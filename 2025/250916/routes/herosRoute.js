// destructuring / desestruturação
import { Router } from 'express'
const router = Router()

import { list, listById, create, updateById, deleteById } from '../controllers/herosController.js'

router.get('/heros', list)
router.get('heros/:id', listById)
router.post('heros/:id', create)
router.put('heros/:id', updateById)
router.delete('heros/:id', deleteById)

export { router }