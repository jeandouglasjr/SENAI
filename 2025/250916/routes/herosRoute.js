// destructuring / desestruturação
import { Router } from "express";
const router = Router();

import {
  list,
  listById,
  create,
  updateById,
  deleteById,
} from "../controllers/herosController.js";

router.get("/", list);
router.get("/:id", listById);
router.post("/", create);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

export { router };
