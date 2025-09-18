// destructuring / desestruturação
import { Router } from "express";
const batalhaRouter = Router();

import {
  list,
  listById,
  create,
  updateById,
  deleteById,
} from "../controllers/herosController.js";

batalhaRouter.get("/", list);
batalhaRouter.get("/:id", listById);
batalhaRouter.post("/", create);
batalhaRouter.put("/:id", updateById);
batalhaRouter.delete("/:id", deleteById);

export { batalhaRouter };
