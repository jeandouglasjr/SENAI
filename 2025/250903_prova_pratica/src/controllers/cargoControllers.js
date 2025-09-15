const vagas = require('../models/vagasModels');

exports.buscarPorCargo = (req, res) => {
    const cargo = req.params.cargo;
    const carg = cargo.findByCargo(cargo);
    if (!carg) return res.status(404).json({ erro: 'Cargo não encontrada' });
    return res.json(carg);
}