/*
25/08/25
SENAI - Análise e Desenvolvimento de Sistemas
Desenvolvimento de Sistemas
Docente: Diego Ramos da Silva
Discente: Jean Douglas Junior

Criando Endpoints com Express
Objetivo: praticar criação de API REST com Node.js + Exprss, implementando CRUD de produtos e testando no Postman.

Contexto

Você foi contratado para criar uma API simples para uma loja. A equipe precisa listar, cadastrar, editar e excluir produtos. Sua missão é criar os endpoints REST e validar os dados básicos.

Requisitos Funcionais (de 1 a 6).

Regras de validação

● nome obrigatório e com pelo menos 2 caracteres.
● preco obrigatório e maior que 0.
● Se presente, categoria deve ser string não vazia.
● Em erros de validação, responder 400 com { erro: "mensagem" }.
● Para recurso não encontrado, responder 404 com { erro: "Produto não
encontrado" }.

*/

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let produtos = [
    {
        "id": 1, // gerado automaticamente
        "nome": "teclado", // obrigatório, mínimo 2 caracteres
        "preco": 70, // obrigatório, > 0
        "categoria": "periféricos" // opcional (ex.: "perifericos", "informatica")
    }
];

// 1. GET / → retornar "Bem-vindo à API da Loja!". (OK)
app.get('/', (req, res) => {
    const mensagem = `Bem-vindo à API da Loja!`;
    res.json(mensagem);
});

// 2. GET /produtos → retornar todos os produtos.
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// 3. GET /produtos/:id → retornar o produto pelo id.
app.get('/produtos/:id', (req, res) => {
    const produto = produtos.find(p => p.id == req.params.id);
    if (!produto) return res.status(404).json({ erro: "Produto não encontrado" });
    res.json(produto);
});

// 4. POST /produtos → cadastrar produto.
app.post('/produtos/', (req, res) => {
    const { nome, preco, categoria } = req.body;

    if(!nome) {
        return res.status(400).json({ erro: "Nome do produto é obrigatório" });
    } 
    const novoId = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;
    const novoProduto = { 
      id: novoId,
      nome,
      preco: preco || 0,
      categoria: categoria || null,
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});
  
// 5. PUT /produtos/:id → atualizar produto.
app.put('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, preco, categoria } = req.body;

    const produto = produtos.find(p => p.id == id);
    if (!produto) return res.status(404).json({ erro: "Produto não encontrado"});

    if (nome)
        produto.nome = nome;

    if (preco)
        produto.preco = preco;

    if (categoria)
        produto.categoria = categoria;

    res.json(produto);
});

// 6. DELETE /produtos/:id → excluir produto.
app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const index = produtos.findIndex(p => p.id == id);
  
    if (index === -1) return res.status(404).json({ erro: "Produto não encontrado" });
  
    const removido = produtos.splice(index, 1);
    res.json(removido[0]);
  });

// Listen
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});