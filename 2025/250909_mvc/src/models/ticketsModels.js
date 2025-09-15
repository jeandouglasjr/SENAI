let seq = 1;
const tickets = [];

function findAll() {
return tickets;
}

function findById(id) {
return tickets.find(t => t.id === id) || null;
}

function create({ nome, local, descricao, preco, foto }) {
const novo = {
id: seq++,
nome: nome.trim(),
local: local.trim(),
descricao: descricao.trim(),
preco: preco.trim(),
foto: foto.trim()
};
tickets.push(novo);
return novo;
}

function update(id, { nome, local, descricao, preco, foto }) {
const idx = tickets.findIndex(t => t.id === id);
if (idx === -1) return null;
const atual = tickets[idx];
atual.nome = nome.trim();
atual.local = local.trim();
atual.descricao = descricao.trim();
atual.preco = preco.trim();
atual.foto = foto.trim();
tickets[idx] = atual;
return atual;
}

function remove(id) {
const idx = tickets.findIndex(t => t.id === id);
if (idx === -1) return false;
tickets.splice(idx, 1);
return true;
}

module.exports = { findAll, findById, create, update, remove };