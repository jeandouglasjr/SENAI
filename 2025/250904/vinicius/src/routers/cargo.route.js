import { Router } from "express";
import cargoController from "../controllers/cargo.controller.js";

const router = Router();

router.get("/:cargo", cargoController.findCargo);

export default router;