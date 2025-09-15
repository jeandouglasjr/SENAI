const express = require("express");
const app = express();
// Importar a conexão do banco de dados
const conexao = require("./database");

// Receber requisições com JSON
app.use(express.json());

// Rota simples do tipo get
app.get("/produto", async (_, res) => {
  // Usar a variavel conexao para rodar comando SQL
  const produto = await conexao.query("SELECT * FROM PRODUTO");
  res.status(200).send({ resposta: produto.rows });
});

app.delete("/produto/:id", async (req, res) => {
  try {
    // const id = req.params.id
    const { id } = req.params;
    // SQL INJECTION
    // await conexao.query('DELETE FROM PRODUTO WHERE ID = ' + id)
    // FORMA IDEAL RECEBENDO PARAMETROS
    await conexao.query("DELETE FROM PRODUTO WHERE ID = $1", [id]);
    res.status(204).send();
  } catch (erro) {
    res.status(500).send({ mensagem: "Ocorreu um erro inesperado" });
  }
});

app.post("/produto", async (req, res) => {
  const { nome, preco, descricao } = req.body || {};
  if (!nome || !preco || !descricao) {
    res
      .status(400)
      .send({ mensagem: "Os campos nome, preco e descricao são obrigatórios" });
    return;
  }
  await conexao.query(
    "INSERT INTO PRODUTO(nome, preco, descricao) VALUES ($1, $2, $3)",
    [nome, preco, descricao]
  );

  res.status(201).send({ mensagem: "Produto criado com sucesso" });
});

// PUT - ATUALIZAR UM DADO
// UPDATE PRODUTO SET nome = '', preco = 0, descricao = '' WHERE id = 0

app.listen(3000, () => console.log("Servidor iniciado"));
