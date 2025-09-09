import { Router } from "express";
import localizacaoController from "../controllers/localizacao.controller.js";

const router = Router();

router.get("/:cidade", localizacaoController.findLocal);

export default router;