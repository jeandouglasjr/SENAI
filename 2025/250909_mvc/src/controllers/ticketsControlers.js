const tickets = require('../models/ticketsModels');

exports.listar = (_, res) => {
res.json(tickets.findAll());
};

/*
exports.buscarPorId = (req, res) => {
const id = Number(req.params.id);
const tick = tickets.findById(id);
if (!tick) return res.status(404).json({ erro: 'tickets não encontrado' });
res.json(tick);
};

exports.criar = (req, res) => {
const erro = validar(req.body);
if (erro) return res.status(400).json({ erro });
const criado = tickets.create(req.body);
res.status(201).json(criado);
};

exports.atualizar = (req, res) => {
// PUT espera corpo completo (nome, descricao, preco, foto)
const erro = validar(req.body);
if (erro) return res.status(400).json({ erro });
const id = Number(req.params.id);
const atualizado = tickets.update(id, req.body);
if (!atualizado) return res.status(404).json({ erro: 'tickets não encontrado' });
res.json(atualizado);
};

exports.remover = (req, res) => {
const id = Number(req.params.id);
const ok = tickets.remove(id);
if (!ok) return res.status(404).json({ erro: 'tickets não encontrado' });
res.status(204).send();
};

// Validação simples conforme enunciado
function validar(body) {
/*
const { nome, preco, categoria } = body;
if (typeof nome !== 'string' || nome.trim().length < 2) {
return 'nome obrigatório e com pelo menos 2 caracteres';
}
if (typeof preco !== 'number' || !Number.isFinite(preco) || preco <= 0) {
return 'preco obrigatório e maior que 0';
}
if (categoria !== undefined) {
if (typeof categoria !== 'string' || categoria.trim().length === 0) {
return 'categoria, se presente, deve ser string não vazia';
}
}
return null;
}
*/