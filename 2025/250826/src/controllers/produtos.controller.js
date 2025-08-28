const Produto = require('../models/produto.model');

exports.listar = (_, res) => {
    res.json(Produto.findAll());
};

exports.buscarPorId = (req, res) => {
    const id = Number(req.params.id);
    const prod = Produto.findById(id);
    if (!prod) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json(prod);
}

exports.cadastrar = (req, res) => {
    const erro = validar(req.body);
    if (erro) return res.status(400).json({ erro });
    const criado = Produto.create(req.body);
    res.status(201).json(criado);
};

exports.atualizar = (req, res) => {
    // PUT espera corpo completo (nome + preco; categoria opcional)
    const erro = validar(req.body);
    if (erro) return res.status(400).json({ erro });
    const id = Number(req.params.id);
    const atualizado = Produto.update(id, req.body);
    if (!atualizado) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json(atualizado);
};

exports.deletar = (req, res) => {
    const id = Number(req.params.id);
    const ok = Produto.remove(id);
    if (!ok) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.status(204).send();
};

// Validação simples conforme enunciado
function validar(body) {
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