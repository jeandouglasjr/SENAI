import { Batalha } from "../models/batalhasModel.js";

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

  }
  catch (error) {
    console.log(error);
    res.status(402).send({ mensagem: "Erro na batalha" })
  }
}

// criar dados = create
async function create(req, res) {
  try {
    const { id_vilao, id_heroi, nome_vencedor } = req.body;
    console.log(req.body);
    if (!id_vilao || !id_heroi || !nome_vencedor) {
      res.status(400).send({ mensagem: "Campos obrigatórios" });
    }
    const batalhaCreated = await Batalha.create({ id_vilao, id_heroi, nome_vencedor });
    res.status(201).send({ mensagem: batalhaCreated });
  } catch (error) {
    console.log(error);
    res.status(400).send({ mensagem: "Erro ao criar batalha" });
  }
}

export { list, listById, create };
