// routes/historicoAdocao.js

import express from "express";
const routerHistoricoAdocao = express.Router();

import {
    listarHistorico,
    criarHistorico,
    listarHistoricoPeloId,
    atualizarHistorico,
    excluirHistorico
    // Adicione as outras funções aqui
} from "../controllers/historico_Adocao.js";

// Rotas:
routerHistoricoAdocao.get("/historico", listarHistorico);
routerHistoricoAdocao.post("/historico", criarHistorico);
routerHistoricoAdocao.get("/historico/:id", listarHistoricoPeloId);
routerHistoricoAdocao.put("/historico/:id", atualizarHistorico);
routerHistoricoAdocao.delete("/historico/:id", excluirHistorico);

export { routerHistoricoAdocao };