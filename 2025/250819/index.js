/*
13/08/25
SENAI - Análise e Desenvolvimento de Sistemas
Desenvolvimento de Sistemas
Docente: Diego Ramos da Silva
Discente: Jean Douglas Junior
*/

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let cursos = [
    {
        id: 1,
        nome: "Desenvolvimento de Sistemas",
        cargaHoraria: 1200,
        modalidade: "Presencial",
        professor: {
            nome: "Carlos Silva",
            especialidade: "Programação Full Stack"
        },
        disciplinas: [
            { nome: "Algoritmos", carga: 80},
            { nome: "Banco de Dados", carga: 100},
            { nome: "Programação Web", carga: 120},
        ]
    }
]

/*
Criar rota que retorne apenas as disciplinas de um curso
(GET /cursos/:id/disciplinas)
*/

app.get('/cursos/:id/disciplinas', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const curso = cursos.find(c => c.id === id);
        if (!curso) { return res.status(404).json({ error: 'Curso não encontrado' });
    }
    // Retorna apenas os nomes das disciplinas
    const nomesDisciplinas = curso.disciplinas.map(d => d.nome); res.json(nomesDisciplinas);
});

/*
Criar rota para adicionar uma nova disciplina em um curso
(POST /cursos/:id/disciplinas)
*/

app.post('/cursos/:id/disciplinas', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const curso = cursos.find(c => c.id === id);
    if (!curso) {
        return res.status(404).json({
            error: 'Curso não encontrado'
        });
    }
    const { nome, carga } = req.body;
    if (!nome || typeof carga !== 'number') {
        return res.status(400).json({
            error: 'Dados inválidos. Informe "nome" e "carga" (número).'
        });
    }
    const novaDisciplina = { nome, carga };
    curso.disciplinas.push(novaDisciplina);
    return res.status(201).json(novaDisciplina);
});

/*
Crisar rota para buscar todos os cursos de um professor específico
(GET /cursos/PROFESSOR/:nome)
*/
app.get('/cursos/PROFESSOR/:nome', (req, res) => {
    const nomeProfessor = req.params.nome;
    // Filtra cursos cujo professor tenha o nome informado
    const cursosDoProfessor = cursos.filter(curso => {
      return curso.professor && curso.professor.nome === nomeProfessor;
    });
    if (cursosDoProfessor.length === 0) {
        return res.status(404).json({
            error: 'Nenhum curso encontrado para o professor informado'
        });
    }
    // Opcional: retornar apenas alguns campos se preferir
    // const resultado = cursosDoProfessor.map(c => ({
    //   id: c.id,
    //   nome: c.nome,
    //   cargaHoraria: c.cargaHoraria,
    //   modalidade: c.modalidade
    // }));
    res.json(cursosDoProfessor);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});