import { conexao } from "../database.js"; // IMPORTANTE: Sua instância Sequelize
import { Usuario, Endereco, Contato } from "../models/index.js";

async function listar(_, res) {
  try {
    const usuarios = await Usuario.findAll({
      include: [
        { model: Endereco, as: "enderecos" },
        { model: Contato, as: "contatos" },
      ],
    });
    return res.status(200).send({ mensagem: usuarios });
  } catch (err) {
    console.log(err);
    res.status(500).send({ mensagem: "Erro interno" });
  }
}

async function listarPeloId(req, res) {
  const { id } = req.params; // Desestruture o ID primeiro

  // Agora sim, valide o ID
  if (isNaN(id) || !id) {
    return res.status(400).send({ mensagem: "ID inválido" });
  }

  try {
    // Opcional: Inclua os dados relacionados ao buscar o usuário
    const usuario = await Usuario.findByPk(id, {
      include: [
        { model: Endereco, as: "enderecos" },
        { model: Contato, as: "contatos" },
      ],
    });

    if (!usuario) {
      return res.status(404).send({ mensagem: "Usuário não encontrado." });
    }

    return res.status(200).send({ usuario });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ mensagem: "Erro interno" });
  }
}

async function excluir(req, res) {
  try {
    const { id } = req.params;
    // DELETE = destroy
    await Usuario.destroy({ where: { id } });
    res.status(204).send({ mensagem: "Usuario excluido com sucesso" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ mensagem: "Erro interno" });
  }
}

// CRIAR DADOS = create (com inclusão aninhada)
async function criar(req, res) {
  try {
    // A requisição agora contém todos os dados aninhados: Usuario, Enderecos e Contatos
    const dadosCompletos = req.body;

    // 🚨 Validação Mínima:
    if (
      !dadosCompletos.nome ||
      !dadosCompletos.email ||
      !dadosCompletos.cpf ||
      !dadosCompletos.senha
    ) {
      return res.status(400).send({
        mensagem: "Campos nome, email, cpf e senha do usuário são obrigatorios",
      });
    }

    // Use a opção 'include' para criar os dados aninhados
    const usuarioCriado = await Usuario.create(dadosCompletos, {
      include: [
        { model: Endereco, as: "enderecos" }, // 'enderecos' deve corresponder ao 'as' da associação hasMany
        { model: Contato, as: "contatos" }, // 'contatos' deve corresponder ao 'as' da associação hasMany
      ],
    });

    // 201 Created é a resposta correta
    return res.status(201).send({ usuario: usuarioCriado });
  } catch (err) {
    console.log(err);
    // Em um ambiente real, você pode verificar o tipo de erro (ex: validação) e retornar 400
    return res
      .status(500)
      .send({ mensagem: "Erro interno ao cadastrar usuário completo." });
  }
}

// ATUALIZAR DADOS = update (Com tratamento de associações)
async function atualizar(req, res) {
  const { id } = req.params;
  // Captura todos os dados, incluindo os arrays enderecos e contatos
  const { nome, email, cpf, senha, enderecos, contatos } = req.body;

  // Inicia a transação. Se algo der errado, tudo é desfeito.
  const t = await conexao.transaction();

  try {
    // 1. Atualizar a tabela principal (USUARIO)
    await Usuario.update(
      { nome, email, cpf, senha },
      { where: { id }, transaction: t }
    );

    // 2. Tratar Endereços: Apagar os antigos e criar os novos (Estratégia de Sincronização Simples)
    if (enderecos && enderecos.length > 0) {
      // Remove todos os endereços antigos deste usuário
      await Endereco.destroy({ where: { id_usuario: id }, transaction: t });

      // Mapeia e cria os novos endereços com a FK do usuário
      const novosEnderecos = enderecos.map((endereco) => ({
        ...endereco,
        id_usuario: id,
      }));
      await Endereco.bulkCreate(novosEnderecos, { transaction: t });
    }

    // 3. Tratar Contatos: Apagar os antigos e criar os novos (Estratégia de Sincronização Simples)
    if (contatos && contatos.length > 0) {
      // Remove todos os contatos antigos deste usuário
      await Contato.destroy({ where: { id_usuario: id }, transaction: t });

      // Mapeia e cria os novos contatos com a FK do usuário
      const novosContatos = contatos.map((contato) => ({
        ...contato,
        id_usuario: id,
      }));
      await Contato.bulkCreate(novosContatos, { transaction: t });
    }

    // 4. Confirma a transação (salva tudo no banco)
    await t.commit();

    // 5. Busca o registro atualizado (com as associações) para retornar na resposta
    const usuarioAtualizado = await Usuario.findByPk(id, {
      include: [
        { model: Endereco, as: "enderecos" },
        { model: Contato, as: "contatos" },
      ],
    });

    return res.status(200).send({
      mensagem: "Usuário e dados relacionados atualizados com sucesso.",
      usuario: usuarioAtualizado,
    });
  } catch (err) {
    // Em caso de erro, desfaz todas as operações do banco
    await t.rollback();
    console.error(err);
    return res
      .status(500)
      .send({ mensagem: "Erro interno ao atualizar usuário completo." });
  }
}

export { listar, listarPeloId, excluir, criar, atualizar };
