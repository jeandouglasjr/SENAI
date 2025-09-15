const express = require('express')
const app = express()

// importar a conexão do banco de dados
const conexao = require('./connect')

// receber requisições com JSON
app.use(express.json())

// rota simples do tipo get
app.get('/', async (_, res) => {
    // usar a variável conexão para rodar o comando SQL
    const produtos = await conexao.query('SELECT * FROM "PRODUTO"')
    res.status(200).send({ respota: produtos.rows })
})

app.delete('/produto/:id', async (req, res) => {
    try{
    // const id = req.params.id; receber como parâmetro
    const { id } = req.params; // receber como parâmetro destr
    // SQL Injection (não pode concatenar os dados pra não sofrer ataque por SQL Injection)
    // await conexao.query('delete from produto where id = ' + id);
    // forma ideal recebendo parâmetros
    await conexao.query('delete from "PRODUTO" where id = $1', [id])
    res.status(204).send()
    }
    catch(erro){
        res.status(500).send({ mensagem: 'Ocorreu um erro inesperado'})
    }
})

app.post('/produto', async (req, res) => {
    const { nome, descricao, preco } = req.body || {};
    if (!nome || !descricao || !preco) {
        res.status(400).send({ mensagem: 'Os campos são obrigatórios'})
        return 'Tente novamente'
    }
    await conexao.query('insert into produto(nome, descricao, preco) values ($1, $2, $3)', [nome, descricao, preco])
    res.status(201).send({ mensagem: 'Produto criado com sucesso'})
})

app.listen(3000, () => console.log('Servidor iniciado'))