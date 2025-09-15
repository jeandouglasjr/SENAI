/*
01/09/25
SENAI - Análise e Desenvolvimento de Sistemas
Desenvolvimento de Sistemas
Docente: Diego Ramos da Silva
Discente: Jean Douglas Junior
Atividade Express 4 (exercicios_api_usuarios_memoria.pdf)

Exercício: API de Cadastro de Usuários com Express (Armazenamento em Memória)

Estrutura de Pastas:
src/controllers/usersControllers.js - OK
src/models/userModel.js - OK
src/router/usersRouter.js - OK
src/server.js - OK

Endpoints Esperados:
GET / -> Retorna { message: 'API Users OK' } - OK
GET /users -> Lista todos os usuários - OK
GET /users:id -> Retorna um usuário pelo ID (404 se não existir) - OK
POST /users -> Cria usuário (201) - OK
PUT /users:id -> Atualiza usuário (200, 404 se não existir) - OK
DELETE /users:id -> Remove usuário (204, 404 se não existir) - OK

Validações Básicas:
name: obrigatório no POST; mínimo 2 caracteres. - OK
email: obrigatório no POST; formato válido; deve ser único no sistema. - FALTA
password: obrigatório no POST; mínimo 6 caracteres. - OK
Nunca retornar o campo password nas respostas. - FALTA
Erros de validação → 400 { erro: 'mensagem' }. - OK
Recurso não encontrado → 404 { erro: 'Usuário não encontrado' } - FALTA

Validações por Endpoint
POST /users
• Campos obrigatórios: name, email, password (regras gerais acima). - OK
• E-mail deve ser único (não pode repetir).
• Resposta: 201 com usuário criado (sem password)



*/

const express = require('express');
const usersRouter = require('./router/usersRouter');
const app = express();
app.use(express.json());
// raiz
app.get('/', (_, res) => res.send('API Users OK'));
// rotas de produtos
app.use('/users', usersRouter);
// 404 de rota
app.use((_, res) => res.status(404).json({ erro: 'Rota não encontrada' }));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API da Loja em http://localhost:${PORT}`));

