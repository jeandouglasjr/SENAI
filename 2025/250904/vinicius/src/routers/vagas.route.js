import { Router } from "express";
import vagasController from "../controllers/vagas.controller.js"

const router = Router();

router.post("/", vagasController.create);
router.get("/", vagasController.findAll);
router.get("/:id", vagasController.findById);
router.put("/:id", vagasController.update);
router.delete("/:id", vagasController.remove);

export default router;