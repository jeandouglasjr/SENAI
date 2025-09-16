// destructuring / desestruturação
import { Router } from 'express'
const router = Router()

import { list, listById, create, updateById, deleteById } from '../controllers/usuarioController.js'

router.get('/usuarios', list)
router.get('usuarios/:id', listById)
router.post('usuarios/:id', create)
router.put('usuarios/:id', updateById)
router.delete('usuarios/:id', deleteById)

export { router }