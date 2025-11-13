import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // carrega variáveis do .env

// Conecta ao banco usando a string de conexão do .env
const conexao = new Sequelize(process.env.BANCO_DE_DADOS, {
  dialect: "postgres", // ou "mysql" se for o caso
  logging: false, // deixa o console mais limpo
});

// Testa a conexão
async function conectarBanco() {
  try {
    await conexao.sync({ alter: true });
    console.log("✅ Conexão com o banco de dados bem-sucedida!");

    // Sincroniza os modelos com o banco
    await conexao.sync({ alter: true });
    console.log("📦 Tabelas sincronizadas com sucesso!");
  } catch (err) {
    console.error("❌ Erro ao conectar ou sincronizar banco:", err);
  }
}

// Executa a conexão assim que o arquivo for importado
conectarBanco();

export { conexao };
