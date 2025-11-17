import express from "express";
const routerUsuario = express.Router();

import {
  listar,
  listarPeloId,
  excluir,
  criar,
  atualizar,
} from "../controllers/usuario.js";

routerUsuario.get("/usuario", listar);
routerUsuario.get("/usuario/:id", listarPeloId);
routerUsuario.delete("/usuario/:id", excluir);
routerUsuario.post("/usuario", criar);
routerUsuario.put("/usuario/:id", atualizar);

export { routerUsuario };
