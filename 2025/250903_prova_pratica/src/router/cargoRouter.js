const router = require('express').Router();
const Ctrl = require('../controllers/cargoControllers');

router.get('/:cargo', Ctrl.buscarPorCargo);

module.exports = router;