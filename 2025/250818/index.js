const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// lista cursos
//let cursos = ["Desenvolvimento de Sistemas", "Redes de Computadores", "Automação Industrial"];

// array de objetos
let cursos = [
    { id: 1, nome: "Desenvolvimento de Sistemas"},
    { id: 2, nome: "Redes de Computadores"},
    { id: 3, nome: "Automação Industrial"}];

// rota para listar todos os cursos
app.get('/cursos', (req, res) => {
    res.json(cursos);
});

// rota para adicionar um novo curso
/*
app.post('/cursos', (req, res) => {
    const novoCurso = req.body.nome;
    cursos.push(novoCurso);
    res.status(201).send(`Curso "${novoCurso}" adicionado com sucesso!`);
});
*/

// confere
app.post('/cursos', (req, res) => {
    const novoNome = req.body.nome;
if (!novoNome) {
    return res.status(400).json({erro: "Nome do curso é obrigatório"});
}

// cria sempre objeto com id e nome
const novoId = cursos.lenght ? cursos[cursos.length-1].id+1:1;
const novoCurso = { id: novoId, nome: novoNome};
cursos.push(novoCurso);
res.status(201).json(novoCurso);
});

// rota para atualizar um curso
app.put('/cursos/:id', (req, res) => {
    const { id } = req.params;
    const novoNome = req.body.nome[4];
    cursos[id] = novoNome;
    res.send(`Curso na posição ${id} atualizado para "${novoNome}"`);
});

// rota para apagar um curso
app.delete('/cursos/:id', (req, res) => {
    const { id } = req.params;
    const cursoRemovido = cursos.splice(id, 1);
    res.send(`Curso "${cursoRemovido}" removido com sucesso!`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});