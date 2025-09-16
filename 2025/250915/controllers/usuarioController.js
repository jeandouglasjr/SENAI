import { Usuario } from '../models/usuarioModel.js'

async function list (_, res) {
    try {
        const usuarios = await Usuario.findAll()
        return res.status(200).send({ mensagem: usuarios})        
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ mensagem: 'Erro interno'})
    }
}

// listar por id
async function listById (req, res) {
    try {
        const { id } = req.params
        // buscar dado pela chave primaria (primary key ou pk)
        const usuario = await Usuario.findByPk(id)
        // outra forma de buscar pelo primeiro dado do banco de dados (findOne)
        // const usuario = await Usuario.findOne({ where: { id: id } })
        // const usuario = await Usuario.findAll({ where: { endereco: endereco }})
        res.status(200).send({ mensagem: usuario })
    }
    catch (error) {
        console.log(error)
        res.status(402).send({ mensagem: 'Usuário não encontrado'})
    }
}

// criar dados = create
async function create (req, res) {
    try {
        const { nome, idade, endereco } = req.body
        if(!nome || !idade || !endereco) {
            res.status(400).send({ mensagem: 'Campos obrigatórios'})
        }
        const userCreated = await Usuario.create({ nome, idade, endereco })
        res.status(201).send({ mensagem: userCreated })
    }
    catch (error) {
        console.log(error)
        res.status(400).send({ mensagem: 'Erro interno'})
    }
}

// atualizar dados = update
async function updateById (req, res) {
    try {
        const { nome, idade, endereco } = req.body
        const { id } = req.params
        if(!id || !nome || !idade || !endereco) {
            res.status(400).send({ mensagem: 'Campos obrigatórios'})
        }
        const userUpdated = await Usuario.update({ nome, idade, endereco }, { where: { id }})
        res.status(201).send({ mensagem: userUpdated })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ mensagem: 'Erro interno'})
    }
}

// deletar por id
async function deleteById (req, res) {
    try {
        const { id } = req.params
        // DELETE = destroy
        await Usuario.destroy({ where: { id: id }})
        res.status(204).send({ mensagem: 'Usuário excluído com sucesso' })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

export { list, listById, create, updateById, deleteById }