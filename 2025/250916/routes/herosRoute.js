// destructuring / desestruturação
import { Router } from "express";
const herosRouter = Router();

import {
  list,
  listById,
  create,
  updateById,
  deleteById,
} from "../controllers/herosController.js";

herosRouter.get("/", list);
herosRouter.get("/:id", listById);
herosRouter.post("/", create);
herosRouter.put("/:id", updateById);
herosRouter.delete("/:id", deleteById);

export { herosRouter };
