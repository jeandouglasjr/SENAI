const router = require('express').Router();
const Ctrl = require('../controllers/ticketsControlers');

router.get('/', Ctrl.listar);
router.get('/:id', Ctrl.buscarPorId);
router.post('/', Ctrl.criar);
router.put('/:id', Ctrl.atualizar);
router.delete('/:id', Ctrl.remover);