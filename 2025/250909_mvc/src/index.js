import express from "express"
import ticketsRouters from "./routers/ticketsRouters"

const app = express()

const conexao = require('./connect')

app.use(express.json())
app.use(express.ticketsRouters)

/*
Antes de refatorar (250909_mvcless)...

const express = require('express') - método require

let tickets = []

endpoints

// get
app.get('/', async (_, res) => {
    // usar a variável conexão para rodar o comando SQL
    const tickets = await conexao.query('select * from tickets')
    res.status(200).send({ resposta: tickets.rows })
})

// post
app.post('/', async (_, res) => {
    const { nome, local, descricao, preco, foto } = req.body || {};
    await conexao.query('insert into tickets(nome, local, descricao, preco, foto) values($1, $2, $3, $4, $5)', [nome, local, descricao, preco, foto])
    res.status(201).send({ mensagem: 'Ticket cadastrado com sucesso' })
})

app.get('/tickets/:id', async (req, res) => {
    const { id } = req.params || {};
    const tickets = await conexao.query('select * from tickets where id = $1', [id])
    if (!id) {
        return res.status(404).json({
            error: 'Ticket não encontrado'
        });
    }
    return res.status(201).json(tickets.rows);
});

app.listen(3000, () => console.log('Servidor iniciado'))
*/