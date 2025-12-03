import express from "express";
import cors from "cors";

// ativação do reconhecimento do dotenv (arquivo com variaveis de ambiente/credenciais)
import "dotenv/config";
// importar conexao do database
import { conexao } from "./database.js";

try {
  await conexao.sync();
} catch (error) {
  console.error(error);
}
// importar arquivo de rotas
import { routerUsuario } from "./routes/usuario.js";
import { routerAnimal } from "./routes/animal.js";
import { routerHistoricoAdocao } from "./routes/historico_adocao.js";
import { routerAuth } from "./routes/auth.js"; // Certifique-se de que o caminho está correto

const app = express();

// Permitir o uso de JSON no body
app.use(express.json());
app.use(cors());
// Indicar o uso do arquivo de rotas
app.use("/", routerAuth);
app.use("/", routerUsuario);
app.use("/", routerAnimal);
app.use("/", routerHistoricoAdocao);
// Teste de conexão com o banco de dados
try {
  await conexao.authenticate();
  // Comando que adiciona novas colunas nas tabelas
  await conexao.sync({ alter: true });
  // Comando que exclui a tabela e seus dados e cria a tabela sem dados
  // await conexao.sync({ force: true })
  console.log("2/3 - Conectado com sucesso");
} catch (erro) {
  console.log("Erro na conexão");
}
const port = process.env.PORT;
app.listen(port, () => console.log(`Acesse > http://localhost:${port}`));
