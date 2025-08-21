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
    const id = parseInt(req.params.id);
    


})