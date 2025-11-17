import express from "express";
const routerUsuarios = express.Router();

import {
  listar,
  listarPeloId,
  excluir,
  criar,
  atualizar,
} from "../controllers/usuario.js";

routerUsuarios.get("/", listar);
routerUsuarios.get("/usuario/:id", listarPeloId);
routerUsuarios.delete("/usuario/:id", excluir);
routerUsuarios.post("/usuario", criar);
routerUsuarios.put("/usuario/:id", atualizar);

export { routerUsuarios };
