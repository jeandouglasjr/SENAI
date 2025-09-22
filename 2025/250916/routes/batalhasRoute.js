// destructuring / desestruturação
import { Router } from "express";
const batalhaRouter = Router();

import { list, listById, batalhar } from "../controllers/batalhasController.js";

batalhaRouter.get("/", list);
batalhaRouter.get("/:id", listById);
batalhaRouter.post("/", batalhar);

export { batalhaRouter };
