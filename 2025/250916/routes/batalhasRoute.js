// destructuring / desestruturação
import { Router } from "express";
const batalhaRouter = Router();

import {
  listById,
  create
} from "../controllers/batalhasController.js";

batalhaRouter.get("/:id", listById);
batalhaRouter.post("/", create);

export { batalhaRouter };
