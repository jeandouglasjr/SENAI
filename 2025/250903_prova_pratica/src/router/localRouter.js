const router = require('express').Router();
const Ctrl = require('../controllers/localControllers');

router.get('/:local', Ctrl.buscarPorLocal);

module.exports = router;