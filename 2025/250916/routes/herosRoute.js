// destructuring / desestruturação
import { Router } from "express";
import { login, verificarToken } from "../middleware/auth.js";

const herosRouter = Router();

import {
  list,
  listById,
  create,
  updateById,
  deleteById,
} from "../controllers/herosController.js";

herosRouter.get("/", verificarToken, list);
herosRouter.get("/:id", verificarToken, listById);
herosRouter.post("/", verificarToken, create);
herosRouter.put("/:id", verificarToken, updateById);
herosRouter.delete("/:id", verificarToken, deleteById);

export { herosRouter };
