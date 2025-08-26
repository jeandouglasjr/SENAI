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
      { nome: "Algoritmos", carga: 80 },
      { nome: "Banco de Dados", carga: 100 },
      { nome: "Programação Web", carga: 120 }
    ]
  }  
];



// ================== CRUD BÁSICO ==================

// Listar todos os cursos
app.get('/cursos', (req, res) => {
  res.json(cursos);
});

// Adicionar um novo curso
app.post('/cursos', (req, res) => {
  const { nome, cargaHoraria, modalidade, professor, disciplinas } = req.body;
  
  if (!nome) {
    return res.status(400).json({ erro: "Nome do curso é obrigatório" });
  }

  const novoId = cursos.length > 0 ? cursos[cursos.length - 1].id + 1 : 1;
  const novoCurso = { 
    id: novoId, 
    nome, 
    cargaHoraria: cargaHoraria || 0, 
    modalidade: modalidade || "Não informado",
    professor: professor || { nome: "Não definido", especialidade: "" },
    disciplinas: disciplinas || []
  };

  cursos.push(novoCurso);
  res.status(201).json(novoCurso);
});

// Atualizar um curso
app.put('/cursos/:id', (req, res) => {
  const { id } = req.params;
  const { nome, cargaHoraria, modalidade, professor, disciplinas } = req.body;

  const curso = cursos.find(c => c.id == id);
  if (!curso) return res.status(404).json({ erro: "Curso não encontrado" });

  if (nome) 
    curso.nome = nome;

  if (cargaHoraria) 
    curso.cargaHoraria = cargaHoraria;

  if (modalidade) 
    curso.modalidade = modalidade;

  if (professor) 
    curso.professor = professor;

  if (disciplinas) 
    curso.disciplinas = disciplinas;

  res.json(curso);
});

// Deletar um curso
app.delete('/cursos/:id', (req, res) => {
  const { id } = req.params;
  const index = cursos.findIndex(c => c.id == id);

  if (index === -1) return res.status(404).json({ erro: "Curso não encontrado" });

  const removido = cursos.splice(index, 1);
  res.json(removido[0]);
});



// ================== ROTAS NOVAS ==================


// Buscar curso por ID
app.get('/cursos/:id', (req, res) => {
  const curso = cursos.find(c => c.id == req.params.id);
  if (!curso) return res.status(404).json({ erro: "Curso não encontrado" });
  res.json(curso);
});

// Retornar todas as disciplinas de um curso
app.get('/cursos/:id/disciplinas', (req, res) => {
  const curso = cursos.find(c => c.id == req.params.id);
  if (!curso) return res.status(404).json({ erro: "Curso não encontrado" });
  res.json(curso.disciplinas);
});

// Adicionar uma disciplina a um curso
app.post('/cursos/:id/disciplinas', (req, res) => {
  const curso = cursos.find(c => c.id == req.params.id);
  if (!curso) return res.status(404).json({ erro: "Curso não encontrado" });

  const { nome, carga } = req.body;
  if (!nome) return res.status(400).json({ erro: "Nome da disciplina é obrigatório" });

  curso.disciplinas.push({ nome, carga: carga || 0 });
  res.status(201).json(curso.disciplinas);
});

// Buscar cursos de um professor pelo nome
app.get('/cursos/professor/:nome', (req, res) => {
  const nomeProfessor = req.params.nome.toLowerCase();
  const filtrados = cursos.filter(c => c.professor.nome.toLowerCase() === nomeProfessor);

  if (filtrados.length === 0) {
    return res.status(404).json({ erro: "Nenhum curso encontrado para esse professor" });
  }

  res.json(filtrados);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
