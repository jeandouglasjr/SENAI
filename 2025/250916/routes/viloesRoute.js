// destructuring / desestruturação
import { Router } from "express";
const viloesRouter = Router();

import {
  list,
  listById,
  create,
  updateById,
  deleteById,
} from "../controllers/viloesController.js";

viloesRouter.get("/", list);
viloesRouter.get("/:id", listById);
viloesRouter.post("/", create);
viloesRouter.put("/:id", updateById);
viloesRouter.delete("/:id", deleteById);

export { viloesRouter };
