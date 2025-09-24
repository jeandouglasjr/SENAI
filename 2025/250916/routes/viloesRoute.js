// destructuring / desestruturação
import { Router } from "express";
import { login, verificarToken } from "../middleware/auth.js";
const viloesRouter = Router();

import {
  list,
  listById,
  create,
  updateById,
  deleteById,
} from "../controllers/viloesController.js";

viloesRouter.get("/", verificarToken, list);
viloesRouter.get("/:id", verificarToken, listById);
viloesRouter.post("/", verificarToken, create);
viloesRouter.put("/:id", verificarToken, updateById);
viloesRouter.delete("/:id", verificarToken, deleteById);

export { viloesRouter };
