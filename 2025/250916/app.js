import express from "express";
import jwt from "jsonwebtoken";

//ativação do reconhecimento do dotenv (arquivo com variaveis de ambiente/credenciais)
import "dotenv/config";

// importar conexao do database
import { conexao } from "./database.js";
import { herosRouter } from "./routes/herosRoute.js";
import { viloesRouter } from "./routes/viloesRoute.js";
import { batalhaRouter } from "./routes/batalhasRoute.js";
import { authRouter } from "./middleware/auth.js"

const app = express();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/heros", herosRouter);
app.use("/viloes", viloesRouter);
app.use("/batalha", batalhaRouter);

// testar a conexão
try {
  // await conexao.authenticate()
  await conexao.sync();
  console.log("Conectado com sucesso");
} catch (erro) {
  console.log("Erro ao conectar");
}

app.listen(3000, () => console.log("Api iniciado"));
