import React, { useEffect, useState, useMemo } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Table,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const calcularIdade = (dataNascimentoString) => {
  if (!dataNascimentoString) return "N/A";

  const dataNascimento = new Date(dataNascimentoString);
  // Verifica se a data é válida
  if (isNaN(dataNascimento.getTime())) return "N/A";

  const dataAtual = new Date();

  let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

  const mesAtual = dataAtual.getMonth();
  const mesNascimento = dataNascimento.getMonth();

  // Ajuste se o aniversário ainda não ocorreu no ano
  if (
    mesAtual < mesNascimento ||
    (mesAtual === mesNascimento &&
      dataAtual.getDate() < dataNascimento.getDate())
  ) {
    idade--;
  }

  // Retorna a idade como número
  return idade;
};

const Animal = () => {
  const [animais, setAnimais] = useState([]);
  const [busca, setBusca] = useState("");
  // Simulação do nome do usuário logado para a Navbar
  const [usuarioLogado, setUsuarioLogado] = useState("Nome do Usuário Logado");
  const navigate = useNavigate();

  // --- Funções de API ---

  const buscarAnimais = async () => {
    try {
      const response = await api.get("/animal");
      const dados = response.data?.mensagem || []; // --- MUDANÇA AQUI ---
      const animaisFormatados = dados.map((animal) => ({
        ...animal,
        id: animal.id, // 1. CALCULA A IDADE e armazena no novo campo 'idade'
        idade: calcularIdade(animal.nascimento), // <-- NOVO CAMPO // 2. Formatação de data (Ainda útil para 'data_cadastro')
        data_cadastro: animal.data_cadastro
          ? new Date(animal.data_cadastro).toLocaleDateString()
          : "N/A", // 3. O campo 'nascimento' não precisa de formatação de data para a tabela, // mas manteremos o valor original (string ISO) para o filtro funcionar corretamente
      }));
      setAnimais(animaisFormatados);
    } catch (error) {
      console.error("Erro ao buscar animais", error);
      alert("Falha ao buscar a lista de animais. Verifique sua autenticação.");
    }
  };

  const excluirAnimal = async (id) => {
    try {
      console.log("excluindo", id);
      const respostaConfirm = confirm("Confirma a exclusão do animal?");
      console.log("respostaConfirm", respostaConfirm);
      if (respostaConfirm) {
        await api.delete(`/animal/${id}`);
        alert(`Animal excluído com sucesso.`);
        buscarUsuarios();
      }
    } catch (err) {
      alert(`Animal não pôde ser excluído (provávelmente já adotado)`);
    }
  };

  useEffect(() => {
    buscarAnimais();
    // Você pode buscar o nome real do usuário aqui se necessário
  }, []);

  // --- Lógica de Filtro ---
  // Colunas da tabela
  const colunas = useMemo(
    () => [
      { key: "nome", label: "Nome" },
      { key: "especie", label: "Espécie" },
      { key: "raca", label: "Raça" },
      { key: "idade", label: "Idade" }, // <-- MUDANÇA AQUI: Usa 'idade' (o resultado do cálculo)
      { key: "disponivel", label: "Disponível" },
      { key: "data_cadastro", label: "Criado Em" },
    ],
    []
  );
  // Filtra a lista de animais com base no termo de busca
  const animaisFiltrados = useMemo(() => {
    if (!busca) return animais;

    const termo = busca.toLowerCase();
    return animais.filter((animal) =>
      colunas.some((col) =>
        String(animal[col.key] || "")
          .toLowerCase()
          .includes(termo)
      )
    );
  }, [animais, busca, colunas]);

  // --- Funções de Navegação e Sessão ---

  const handleLogout = () => {
    // Importe e use setAuthToken do seu api.js para remover o token
    // Ex: setAuthToken(null);
    localStorage.removeItem("userToken"); // Simulação direta
    alert("Sessão encerrada!");
    navigate("/login");
  };

  const handleNovoAnimal = () => {
    // Redireciona para a página/formulário de cadastro de novo animal
    navigate("/animal/novo");
  };

  // --- Renderização ---

  return (
    <>
      {/* 1. Navbar Consistente */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/usuario">
            Meu App Pet
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Links de navegação */}
              <Nav.Link as={Link} to="/usuario">
                Lista de Usuários
              </Nav.Link>
              <Nav.Link as={Link} to="/historico_adocao">
                Histórico de Adoção
              </Nav.Link>
            </Nav>

            <Nav>
              <NavDropdown
                title={usuarioLogado}
                id="user-nav-dropdown"
                align="end"
              >
                <NavDropdown.Item
                  onClick={handleLogout}
                  className="text-danger"
                >
                  Sair
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-5">
        <h1 className="mb-4 text-center">🐶 Lista de Animais para Doação</h1>

        {/* Barra de Ações (Busca e Botão Novo) */}
        <Row className="mb-4 align-items-center">
          <Col md={6}>
            <Form.Group controlId="formBusca">
              <FormControl
                type="text"
                placeholder="Buscar por nome, raça ou espécie..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6} className="text-end">
            <Button variant="success" onClick={handleNovoAnimal}>
              + Adicionar Novo Animal
            </Button>
          </Col>
        </Row>

        {/* 2. Tabela de Animais Responsiva */}
        <div className="table-responsive">
          {animaisFiltrados.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead className="table-primary">
                <tr>
                  {colunas.map((col) => (
                    <th key={col.key}>{col.label}</th>
                  ))}
                  <th>Ações</th>{" "}
                  {/* Coluna para botões de ação (Editar/Deletar) */}
                </tr>
              </thead>
              <tbody>
                {animaisFiltrados.map((animal) => (
                  <tr key={animal.id}>
                    {colunas.map((col) => (
                      <td key={col.key}>
                        {/* Renderiza o valor do campo ou um badge para status */}
                        {col.key === "disponivel" ? (
                          <span
                            className={`badge bg-${
                              animal.disponivel ? "success" : "warning"
                            }`}
                          >
                            {animal.disponivel ? "Sim" : "Não"}
                          </span>
                        ) : (
                          animal[col.key]
                        )}
                      </td>
                    ))}
                    <td className="text-center">
                      <Button
                        variant="warning"
                        size="sm"
                        as={Link}
                        to={`/animal/editar/${animal.id}`}
                        className="me-2"
                      >
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        // Adicionar lógica de exclusão aqui
                        onClick={() => excluirAnimal(animal.id)}
                      >
                        Excluir
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="alert alert-info text-center">
              {busca
                ? "Nenhum animal encontrado com a busca."
                : "Nenhum animal cadastrado."}
            </p>
          )}
        </div>
      </Container>
    </>
  );
};

export default Animal;
