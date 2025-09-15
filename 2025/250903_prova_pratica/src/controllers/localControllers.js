const vagas = require('../models/vagasModels');

exports.listar = (_, res) => {
    return res.json(vagas.findAll());
};

exports.buscarPorId = (req, res) => {
    const id = Number(req.params.id);
    const vaga = vagas.findById(id);
    if (!vaga) return res.status(404).json({ erro: 'Vaga não encontrada' });
    return res.json(vaga);
}

exports.cadastrar = (req, res) => {
    const erro = validar(res, req.body);
    if (erro) return res.status(400).json( { erro });
    const criado = vagas.create(req.body);
    res.status(201).json(criado);
};

exports.atualizar = (req, res) => {
    const erro = validar(res, req.body);
    if (erro) return res.status(404).json({ erro });
    const id = Number(req.params.id);
    const atualizado = vagas.update(id, req.body);
    if (!atualizado) return res.status(404).json({ erro: 'Vaga não encontrada' });
    res.status(200).json(atualizado);
};

exports.deletar = (req, res) => {
    const id = Number(req.params.id);
    const ok = vagas.remove(id);
    if (!ok) return res.status(404).json({ erro: 'Vaga não encontrada' });
    res.status(204).send();
};

// Validação simples conforme enunciado
function validar(res, body) {

    const { titulo, descricao, cargo, cidade, salario } = body;
    return null;
}

exports.buscarPorCargo = (req, res) => {
    const cargo = req.params.cargo;
    const vaga = vagas.findById(cargo);
    if (!vaga) return res.status(404).json({ erro: 'Cargo não encontrado' });
    return res.json(vaga);
}

