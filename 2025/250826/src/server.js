/*
26/08/25
SENAI - Análise e Desenvolvimento de Sistemas
Desenvolvimento de Sistemas
Docente: Diego Ramos da Silva
Discente: Jean Douglas Junior

Refatorando os arquivos anteriores em controllers e services (módulos)

*/

const express = require('express');
const produtosRouter = require('./router/produto.router');
const app = express();
app.use(express.json());
// raiz
app.get('/', (_, res) => res.send('Bem-vindo à API da Loja!'));
// rotas de produtos
app.use('/produtos', produtosRouter);
// 404 de rota
app.use((_, res) => res.status(404).json({ erro: 'Rota não encontrada' }));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API da Loja em http://localhost:${PORT}`));