import express from "express";
import vagasRoute from "./src/routers/vagas.route.js"
import cargoRoute from "./src/routers/cargo.route.js";
import localRoute from "./src/routers/localizacao.route.js"

const port = 3000;
const app = express();

app.use(express.json());
app.use("/vagas", vagasRoute);
app.use("/cargo", cargoRoute);
app.use("/localizacao", localRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}.`));