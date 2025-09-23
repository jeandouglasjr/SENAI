import { Batalha } from "../models/batalhasModel.js";
import { Hero } from "../models/herosModel.js";
import { Vilao } from "../models/viloesModel.js";

async function list(req, res) {
  try {
    const batalha = await Batalha.findAll();
    return res.status(200).send({ mensagem: batalha });
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
    // const hero = await Hero.findByPk(id)
    // outra forma de buscar pelo primeiro dado do banco de dados (findOne)
    const batalha = await Batalha.findOne({ where: { id } });
    if (!id || !hero) {
      return res.status(400).send({ mensagem: "ID inválido" });
    }
    // const usuario = await Usuario.findAll({ where: { endereco: endereco }})
    res.status(200).send({ mensagem: batalha });
  } catch (error) {
    console.log(error);
    res.status(402).send({ mensagem: "Batalha não encontrado" });
  }
}

// batalhar
async function batalhar(req, res) {
  try {
    const { id_vilao, id_heroi } = req.body;
    let nome_vencedor = "";
    const heroi = await Hero.findOne({ where: { id: id_heroi } });

    // Cria um novo objeto Date
    const dataAtual = new Date();
    // Obtém apenas os segundos
    const segundos = dataAtual.getSeconds();
    // Troca o espaço por 'T' para ficar compatível com ISO 8601
    heroi.segundos = segundos;
    const vilao = await Vilao.findOne({ where: { id: id_vilao } });

    // número inteiro entre 0 e 59
    const randomSeconds = Math.floor(Math.random() * 60);
    vilao.segundos = randomSeconds;

    if (heroi.segundos >= vilao.segundos) {
      nome_vencedor = heroi.nome;
      heroi.vitorias += 1;
      vilao.derrotas += 1;
    } else {
      nome_vencedor = vilao.nome;
      vilao.vitorias += 1;
      heroi.derrotas += 1;
    }
    await heroi.save();
    await vilao.save();
    const batalhaCreated = await Batalha.create({
      id_vilao,
      id_heroi,
      nome_vencedor
    });
    res.status(201).send({ mensagem: batalhaCreated });
  } catch (error) {
    console.log(error);
    res.status(402).send({ mensagem: "Erro na batalha" });
  }
}

export { batalhar, list, listById };
