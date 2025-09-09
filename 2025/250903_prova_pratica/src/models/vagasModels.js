let seq = 1;

let vagas = [
    {
        "id": 1, // gerado automaticamente
        "titulo": "Título 1",
        "descricao": "Descrição 1",
        "cargo": "Cargo 1",
        "cidade": "Cidade 1",
        "salario": 1500 // opcional
    }
];

function findAll() {
    return vagas;
}

function findById(id) {
    return vagas.find(v => v.id === id) || null;
}

function create({ titulo, descricao, cargo, cidade, salario }) {
    const novo = {
        id: seq++,
        titulo: titulo.trim(),
        descricao: descricao.trim(),
        cargo: cargo.trim(),
        cidade: cidade.trim(),
        salario: salario || null
    };
    vagas.push(novo);
    return novo;
}

function update(id, { titulo, descricao, cargo, cidade, salario }) {
    const idx = vagas.findIndex(u => u.id === id);
    if (idx === -1) return null;
    const atual = vagas[idx];
    atual.titulo = titulo.trim();
    atual.descricao = descricao.trim();
    atual.cargo = cargo.trim();
    atual.cidade = cidade.trim();
    atual.salario = salario;
    vagas[idx] = atual;
    return atual;
}

function remove(id) {
    const idx = vagas.findIndex(p => p.id === id);
    if (idx === -1) return false;
    vagas.splice(idx, 1);
    return true;
}

module.exports = { findAll, findById, create, update, remove };