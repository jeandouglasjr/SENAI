import { Usuario } from "../models/Usuario.js"

async function listar(_, res) {
    try {
        const usuarios = await Usuario.findAll()
        return res.status(200).send({ mensagem: usuarios })
    } catch (err) {
        console.log(err)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

async function listarPeloId(req, res) {
    try {
        const { id } = req.params
        // Buscar dado pela chave primaria (primary key ou pk)
        const usuario = await Usuario.findByPk(id)
        // const usuario = await Usuario.findOne({ where: { id: id } })
        // const usuario = await Usuario.findAll({ where: { endereco: endereco } })
        res.status(200).send({ mensagem: usuario })
    } catch (err) {
        console.log(err)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

async function excluir(req, res) {
    try {
        const { id } = req.params
        // DELETE = destroy
        await Usuario.destroy({ where: { id } })
        res.status(204).send({ mensagem: 'Usuario excluido com sucesso' })
    } catch (err) {
        console.log(err)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

// CRIAR DADOS = create
async function criar(req, res) {
    try {
        const { nome, email, cpf, senha, data_cadastro } = req.body
        if (!nome || !email || !cpf || !senha) {
            return res.status(400).send({ mensagem: 'Campos nome, email, cpf e senha são obrigatorios' })
        }
        const usuarioCriado = await Usuario.create({ nome, email, cpf, senha, data_cadastro })
        res.status(201).send({ mensagem: usuarioCriado })
    } catch (err) {
        console.log(err)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

// ATUALIZAR DADOS = update
async function atualizar(req, res) {
    try {
        const { nome, email, cpf, senha } = req.body
        const { id } = req.params
        if (!id || !nome || !email || !cpf || !id) {
            return res.status(400).send({ mensagem: 'Campos id, nome, email, cpf e senha são obrigatorios' })
        }
        const usuarioAtualizado = await Usuario.update({ nome, email, cpf, senha }, { where: { id } })
        res.status(201).send({ mensagem: usuarioAtualizado })
    } catch (err) {
        console.log(err)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

export { listar, listarPeloId, excluir, criar, atualizar }