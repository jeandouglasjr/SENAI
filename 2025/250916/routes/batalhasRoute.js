// destructuring / desestruturação
import { Router } from "express";
import { login, verificarToken } from "../middleware/auth.js";

const batalhaRouter = Router();

import { list, listById, batalhar } from "../controllers/batalhasController.js";

batalhaRouter.get("/", verificarToken, list);
batalhaRouter.get("/:id", verificarToken, listById);
batalhaRouter.post("/", verificarToken, batalhar);

export { batalhaRouter };
