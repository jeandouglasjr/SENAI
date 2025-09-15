/*
03/09/25
SENAI - Análise e Desenvolvimento de Sistemas
Desenvolvimento de Sistemas
Docente: Ruan
Discente: Jean Douglas Junior

Avaliação Prática

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

/*

// 2. GET /vagas → retornar todos os vagas.
app.get('/vagas', (req, res) => {
    res.json(vagas);
});

// 3. GET /vagas/:id → retornar o vaga pelo id.
app.get('/vagas/:id', (req, res) => {
    const vaga = vagas.find(p => p.id == req.params.id);
    if (!vaga) return res.status(404).json({ erro: "vaga não encontrado" });
    res.json(vaga);
});

// 4. POST /vagas → cadastrar vaga.
app.post('/vagas/', (req, res) => {
    const { titulo, descricao, cargo, cidade, salario } = req.body;
    if(!titulo || titulo.length < 2) {
        return res.status(400).json({ erro: "titulo do vaga é obrigatório e precisa ter ao menos 2 caracteres!" });
    }
//    if(!salario || salario <= 0) {
//        return res.status(400).json({ erro: "Preço precisa ser maior que zero!" });
//    }
//    if(!categoria) 
//        return res.status(400).json({ erro: "Categoria não pode ser vazia!" });
    const novoId = vagas.length > 0 ? vagas[vagas.length - 1].id + 1 : 1;
    const novoCargo = { 
      id: novoId,
      titulo,
      descricao,
      cargo,
      cidade,
      salario: salario || null,
    };
    vagas.push(novoCargo);
    res.status(201).json(novoCargo);
});
  
// 5. PUT /vagas/:id → atualizar vaga.
app.put('/vagas/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, cargo, cidade, salario } = req.body;
    if(!titulo) {
        return res.status(400).json({ erro: "titulo da vaga é obrigatório!" });
    }
    if(!salario || salario <= 0) {
        return res.status(400).json({ erro: "Salário precisa ser maior que zero!" });
    }
    if(!descricao) 
        return res.status(400).json({ erro: "Descrição não pode ser vazia!" });
    const vaga = vagas.find(p => p.id == id);
    if (!vaga) return res.status(404).json({ erro: "vaga não encontrada"});
    if (titulo) vaga.titulo = titulo;
    if (descricao) vaga.descricao = descricao;
    if (cargo) vaga.cargo = cargo;
    if (cidade) vaga.cidade = cidade;
    if (salario) vaga.salario = salario;
    res.json(vaga);
});

// 6. DELETE /vagas/:id → excluir vaga.
app.delete('/vagas/:id', (req, res) => {
    const { id } = req.params;
    const index = vagas.findIndex(p => p.id == id);
    if (index === -1) return res.status(404).json({ erro: "Vaga não encontrado" });
    const removido = vagas.splice(index, 1);
    res.json(removido[0]);
  });

// Listen
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
*/