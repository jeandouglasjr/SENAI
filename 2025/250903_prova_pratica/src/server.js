/*
03/09/25
SENAI - Análise e Desenvolvimento de Sistemas
Desenvolvimento de Sistemas
Docentes: Diego Ramos da Silva e Ruan Vítor Lopes
Discente: Jean Douglas Junior

Avaliação Prática

CAPACIDADE:
Desenvolver sistemas computacionais, atendendo normas e padrão de qualidade, usabilidade, robustez, integridade e segurança.

CONTEXTO:
Uma empresa de tecnologia está desenvolvendo uma plataforma para facilitar o processo de recrutamento e seleção de candidatos para vagas de emprego. A plataforma permitirá que empresas publiquem suas vagas, visualizem detalhes sobre os candidatos e acompanhem o status das vagas abertas. O sistema também precisa oferecer opções de filtragem de vagas por cargo e localização.

SITUAÇÃO-PROBLEMA:
A empresa precisa de uma API que gerencie as vagas de emprego disponíveis na plataforma. A API deve permitir que novos anúncios de vagas sejam criados, listar todas as vagas criadas, buscar detalhes de uma vaga específica, editar ou excluir vagas, e também filtrar as vagas por cargo e por cidade onde a oportunidade está localizada. Você, como parte da equipe de desenvolvimento, foi encarregado de criar essa API utilizando Node.js.

COMANDO:
Desenvolva uma API utilizando Node.js para gerenciar as vagas de emprego. Sua aplicação deve incluir as seguintes rotas:
- POST /vagas: Adicionar uma nova vaga de emprego. - OK
- GET /vagas: Listar o título de todas as vagas cadastradas. - OK
- GET /vagas/:id: Mostrar os detalhes de uma vaga específica pelo seu ID. - OK
- PUT /vagas/:id: Atualizar os dados de uma vaga existente com base no ID. - OK
- DELETE /vagas/:id: Remover uma vaga do sistema. - OK
- GET /cargo/:cargo: Listar as vagas filtradas por cargo (ex: Desenvolvedor, Designer).
- GET /localizacao/:cidade: Listar as vagas disponíveis em uma determinada cidade.

REQUISITOS:
Cada vaga deve possuir os seguintes campos:
- id → Identificador único (gerado automaticamente)
- titulo → Título da vaga (ex: Desenvolvedor Backend Node.js)
- descricao → Descrição detalhada da vaga
- cargo → Cargo da vaga (ex: Desenvolvedor, Designer)
- cidade → Localização da vaga (ex: São Paulo)
- salario → Faixa salarial (opcional)

Garanta que sua API retorne respostas adequadas (códigos de status HTTP e mensagens) para cada operação.
*/

const express = require('express');
const vagasRouter = require('./router/vagasRouter');
const cargoRouter = require('./router/cargoRouter');
const localRouter = require('./router/localRouter');
const app = express();
app.use(express.json());
// raiz
app.get('/', (_, res) => res.send('API Users OK'));
// rotas de produtos
app.use('/vagas', vagasRouter);
app.use('/cargo', cargoRouter);
app.use('/local', localRouter);
// 404 de rota
app.use((_, res) => res.status(404).json({ erro: 'Rota não encontrada' }));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API da Loja em http://localhost:${PORT}`));