const router = require('express').Router();
const Ctrl = require('../controllers/produtos.controller');

router.get('/', Ctrl.listar);
router.get('/:id', Ctrl.buscarPorId);
router.post('/', Ctrl.cadastrar);
router.put('/:id', Ctrl.atualizar);
router.delete('/:id', Ctrl.deletar);

module.exports = router;