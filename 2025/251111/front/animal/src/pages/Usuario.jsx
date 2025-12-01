import React, { useEffect, useState, useMemo } from "react";
// import api from "../services/api"; // Esta linha foi removida pois causava erro de compilação
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Table,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css"; // Importe o CSS do Bootstrap
import api from "../services/api";

// Ícone simples para mostrar/esconder senha. Use um ícone real se tiver uma biblioteca (ex: react-icons)
const EyeIcon = ({ onClick, isVisible }) => (
  <span
    onClick={onClick}
    style={{
      cursor: "pointer",
      marginLeft: "5px",
      color: isVisible ? "#dc3545" : "#28a745", // Corrigindo cores para bootstrap (red/green)
    }}
    title={isVisible ? "Esconder Senha" : "Mostrar Senha"}
  >
    {isVisible ? "🙈" : "👀"}
  </span>
);

const Usuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [senhaVisivelMap, setSenhaVisivelMap] = useState({}); // Mapeia o ID do usuário para o estado da senha
  const [usuarioLogado] = useState(
    // NOTE: O uso de localStorage não é ideal em React, mas mantido para replicar o código original.
    localStorage.getItem("userName") || "Usuário Admin"
  );

  const navigate = useNavigate();

  const buscarUsuarios = async () => {
    try {
      // Rota de busca no seu back-end Supabase (agora simulada pelo mock 'api')
      const response = await api.get("/usuario");

      // Assumindo que a resposta de sucesso tem o formato esperado: response.data.mensagem é um array de usuários
      const dados = response.data?.mensagem || [];

      // Mapeia os dados para garantir que campos de data sejam formatados se vierem como string ISO
      const usuariosFormatados = dados.map((usuario) => ({
        ...usuario,
        // Garante que o ID do usuário seja uma string/número válida para usar na chave e no mapa de senhas
        id: usuario.id || usuario.email,
        data_cadastro: usuario.data_cadastro
          ? new Date(usuario.data_cadastro).toLocaleString("pt-BR")
          : "N/A",
        updatedAt: usuario.updatedAt
          ? new Date(usuario.updatedAt).toLocaleString("pt-BR")
          : "N/A",
      }));
      setUsuarios(usuariosFormatados);
    } catch (error) {
      console.error("Erro ao buscar usuário", error);
      setUsuarios([]);
    }
  };

  useEffect(() => {
    // Busca os usuários ao carregar o componente
    buscarUsuarios();
  }, []);

  const toggleSenhaVisivel = (userId) => {
    setSenhaVisivelMap((prevMap) => ({
      ...prevMap,
      [userId]: !prevMap[userId],
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName"); // Limpa o nome também
    console.log("Usuário deslogado");
    navigate("/login"); // Usa o hook navigate
  };

  // Memoiza as colunas da tabela para fácil referência e estilização
  const colunas = useMemo(
    () => [
      { key: "nome", label: "Nome" },
      { key: "cpf", label: "CPF" },
      { key: "email", label: "Email" },
      { key: "senha", label: "Senha", isPassword: true },
      { key: "data_cadastro", label: "Data de Cadastro" },
      { key: "updatedAt", label: "Última Atualização" },
    ],
    []
  );

  return (
    <>
      {/* 1. Componente de Navegação Superior (Navbar) */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/usuario">
            Meu App Pet (Admin)
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Links de navegação para outras páginas */}
              <Nav.Link as={Link} to="/animal">
                Lista de Animais
              </Nav.Link>
              <Nav.Link as={Link} to="/historico_adocao">
                Histórico de Adoção
              </Nav.Link>
              {/* Link para cadastrar novo usuário (exemplo) */}
              <Nav.Link as={Link} to="/usuario/novo">
                Novo Usuário
              </Nav.Link>
            </Nav>

            {/* Dropdown de Usuário Logado e Sair */}
            <Nav>
              <NavDropdown
                title={usuarioLogado}
                id="user-nav-dropdown"
                align="end"
              >
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={handleLogout}
                  className="text-danger"
                >
                  <b>SAIR</b>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-5">
        <Row>
          <Col className="d-flex justify-content-between align-items-center">
            <h1 className="mb-0">🐾 Lista de Usuários</h1>
            <Button variant="success" as={Link} to="/usuario/novo">
              + Novo Usuário
            </Button>
          </Col>
        </Row>
        <hr className="mt-2 mb-4" />

        {/* 2. Tabela de Usuários Responsiva */}
        <div className="table-responsive shadow-sm">
          {usuarios.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead className="table-dark">
                <tr>
                  {colunas.map((col) => (
                    <th key={col.key}>{col.label}</th>
                  ))}
                  <th className="text-center">Ações</th> {/* Coluna de Ações */}
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario, index) => (
                  <tr key={usuario.id || index}>
                    {colunas.map((col) => (
                      <td key={col.key}>
                        {col.isPassword ? (
                          <div className="d-flex align-items-center">
                            {senhaVisivelMap[usuario.id]
                              ? usuario.senha
                              : "********"}
                            {/* 3. Controle de Senha (Visualizar/Esconder) */}
                            <EyeIcon
                              onClick={() => toggleSenhaVisivel(usuario.id)}
                              isVisible={senhaVisivelMap[usuario.id]}
                            />
                          </div>
                        ) : (
                          // 4. Apresentação dos demais atributos
                          usuario[col.key]
                        )}
                      </td>
                    ))}
                    <td className="text-center">
                      <Button
                        variant="warning"
                        size="sm"
                        as={Link}
                        to={`/usuario/editar/${usuario.id}`}
                        className="me-2"
                      >
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        // Adicionar lógica de exclusão aqui
                        onClick={() =>
                          console.log(`Excluir usuário ID: ${usuario.id}`)
                        }
                      >
                        Excluir
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="alert alert-info">
              Nenhum usuário encontrado ou erro ao conectar com a API.
            </p>
          )}
        </div>

        <div className="mt-4">
          <Button variant="primary" onClick={buscarUsuarios}>
            Atualizar Lista
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Usuario;
