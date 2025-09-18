import { Vilao } from "../models/viloesModel.js";

async function list(req, res) {
  try {
    const vilao = await Vilao.findAll();
    return res.status(200).send({ mensagem: vilao });
  } catch (error) {
    console.log(error);
    res.status(500).send({ mensagem: "Erro interno" });
  }
}

// listar por id
async function listById(req, res) {
  try {
    const { id } = req.params;
    // buscar dado pela chave primaria (primary key ou pk)
    // const hilao = await Hilao.findByPk(id)
    // outra forma de buscar pelo primeiro dado do banco de dados (findOne)
    const vilao = await Vilao.findOne({ where: { id } });
    if (!id || !vilao) {
      return res.status(400).send({ mensagem: "ID inválido" });
    }
    // const usuario = await Usuario.findAll({ where: { endereco: endereco }})
    res.status(200).send({ mensagem: vilao });
  } catch (error) {
    console.log(error);
    res.status(402).send({ mensagem: "Vilão não encontrado" });
  }
}

// criar dados = create
async function create(req, res) {
  try {
    const { nome, poder, vitorias, derrotas } = req.body;
    console.log(req.body);
    if (!nome || !poder || !vitorias || !derrotas) {
      res.status(400).send({ mensagem: "Campos obrigatórios" });
    }
    let cod = 1;
    const vilaoCreated = await Vilao.create({ nome, poder, vitorias, derrotas });
    res.status(201).send({ mensagem: vilaoCreated });
  } catch (error) {
    console.log(error);
    res.status(400).send({ mensagem: "Erro ao criar vilão" });
  }
}

// atualizar dados = update
async function updateById(req, res) {
  try {
    const { nome, poder, vitorias, derrotas } = req.body;
    const { id } = req.params;
    if (!id || !nome || !poder || !vitorias || !derrotas) {
      res.status(400).send({ mensagem: "Campos obrigatórios" });
    }
    const vilaoUpdated = await Vilao.update(
      { nome, poder, vitorias, derrotas },
      { where: { id } }
    );
    res.status(201).send({ mensagem: "Atualizado com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ mensagem: "Erro interno" });
  }
}

// deletar por id
async function deleteById(req, res) {
  try {
    const { id } = req.params;
    // DELETE = destroy
    await Vilao.destroy({ where: { id: id } });
    res.status(204).send({ mensagem: "Vião excluído com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ mensagem: "Erro interno" });
  }
}

export { list, listById, create, updateById, deleteById };
