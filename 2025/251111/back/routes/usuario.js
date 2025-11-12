import express from 'express'
const router = express.Router()

import { listar, listarPeloId, excluir, criar, atualizar } from '../controllers/usuario.js'

router.get('/', listar)
router.get('/:id', listarPeloId)
router.delete('/:id', excluir)
router.post('/', criar)
router.put('/:id', atualizar)

export { router }