const express = require('express');
// import ticketsRouters from "./routers/ticketsRouters"

const ticketsRouters = require('./routers/ticketsRouters');
const app = express();
app.use(express.json());

// rais
app.get('/', (_, res) => res.send('API Tickets OK'));

// rota de tickets
app.use('/', ticketsRouters);

// 404 de rota
app.use((_, res) => res.status(404).json({ erro: 'Rota não encontrada' }));

// inicia o servidor
const port = process.env.port || 3000;
app.listen(port, () => console.log(`Servidor iniciado: http://localhost:${port}`));