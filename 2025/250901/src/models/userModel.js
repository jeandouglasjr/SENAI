/* const fs = require('fs');

const conteudo = require('./bd_mock.json');
console.log(conteudo);*/

let seq = 1;

const users = [];

function findAll() {
    return users;
}

function findById(id) {
    return users.find(u => u.id === id) || null;
}

function findByEmail(email) {
    return users.find(m => m.email === email) || null;
}

function create({ name, email, password }) {
    const novo = {
        id: seq++,
        name: name.trim(),
        email: email.trim(),
        password: password.trim()
    };
    users.push(novo);
    return novo;
}

function update(id, { name, email, password }) {
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return null;
    const atual = users[idx];
    atual.name = name.trim();
    atual.email = email.trim();
    atual.password = password.trim();
    users[idx] = atual;
    return atual;
}

function remove(id) {
    const idx = users.findIndex(p => p.id === id);
    if (idx === -1) return false;
    users.splice(idx, 1);
    return true;
}

module.exports = { findAll, findById, create, update, remove };