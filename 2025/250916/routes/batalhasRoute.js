// destructuring / desestruturação
import { Router } from "express";
const batalhaRouter = Router();

import {
  list,
  listById,
  create
} from "../controllers/batalhasController.js";

batalhaRouter.get("/", list);
batalhaRouter.get("/:id", listById);
batalhaRouter.post("/", create);

export { batalhaRouter };
