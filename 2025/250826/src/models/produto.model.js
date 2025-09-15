const fs = require('fs');

const conteudo = require('./bd_mock.json');
console.log(conteudo);

let seq = 1;

const produtos = [];

function findAll() {
    return produtos;
}

function findById() {
    return produtos.find(p => p.id === id) || null;
}

function create({ nome, preco, categoria }) {
    const novo = {
        id: seq++,
        nome: nome.trim(),
        preco,
        ...(categoria !== undefined ? { categoria: categoria.trim() } : {})
    };
    produtos.push(novo);
    return novo;
}

function update(id, { nome, preco, categoria }) {
    const idx = produtos.findIndex(p => p.id === id);
    if (idx === -1) return null;
    const atual = produtos[idx];
    atual.nome = nome.trim();
    atual.preco = preco;
    if (categoria !== undefined) atual.categoria = categoria.trim();
    produtos[idx] = atual;
    return atual;
}

function remove(id) {
    const idx = produtos.findIndex(p => p.id === id);
    if (idx === -1) return false;
    produtos.splice(idx, 1);
    return true;
}

module.exports = { findAll, findById, create, update, remove };