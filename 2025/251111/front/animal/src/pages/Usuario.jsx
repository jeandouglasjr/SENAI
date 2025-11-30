// src/pages/Usuario.jsx
import React, { useEffect, useState, useMemo } from "react";
import api from "../services/api"; // Certifique-se de que 'api' está configurado para o Supabase
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

// Ícone simples para mostrar/esconder senha. Use um ícone real se tiver uma biblioteca (ex: react-icons)
const EyeIcon = ({ onClick, isVisible }) => (
  <span
    onClick={onClick}
    style={{
      cursor: "pointer",
      marginLeft: "5px",
      color: isVisible ? "red" : "green",
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
    localStorage.getItem("userName") || "Usuário Logado"
  );

  const navigate = useNavigate();

  const buscarUsuarios = async () => {
    try {
      // Rota de busca no seu back-end Supabase
      const response = await api.get("/usuario");
      // Assumindo que a resposta de sucesso tem o formato esperado: response.data.mensagem é um array de usuários
      const dados = response.data?.mensagem || [];

      // Mapeia os dados para garantir que campos de data sejam formatados se vierem como string ISO
      const usuariosFormatados = dados.map((usuario) => ({
        ...usuario,
        // Garante que o ID do usuário seja uma string/número válida para usar na chave e no mapa de senhas
        id: usuario.id || usuario.email,
        data_cadastro: usuario.data_cadastro
          ? new Date(usuario.data_cadastro).toLocaleString()
          : "N/A",
        updatedAt: usuario.updatedAt
          ? new Date(usuario.updatedAt).toLocaleString()
          : "N/A",
      }));
      setUsuarios(usuariosFormatados);
    } catch (error) {
      console.error("Erro ao buscar usuário", error);
      setUsuarios([]);
    }
  };

  useEffect(() => {
    buscarUsuarios();
    // Em uma aplicação real, você também buscará o usuário logado aqui
    // Ex: const userResponse = await api.get('/auth/me'); setUsuarioLogado(userResponse.data.nome);
  }, []);

  const toggleSenhaVisivel = (userId) => {
    setSenhaVisivelMap((prevMap) => ({
      ...prevMap,
      [userId]: !prevMap[userId],
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    console.log("Usuário deslogado");
    navigate("/login");
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
            Meu App Pet
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
            </Nav>

            {/* Dropdown de Usuário Logado e Sair */}
            <Nav>
              <NavDropdown
                title={usuarioLogado}
                id="user-nav-dropdown"
                align="end"
              >
                <NavDropdown.ItemText>
                  Logado como: <strong>{usuarioLogado}</strong>
                </NavDropdown.ItemText>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  // 🟢 AGORA ESTA FUNÇÃO EXISTE NO ESCOPO
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
          <Col>
            <h1 className="mb-4">🐾 Lista de Usuários</h1>
          </Col>
        </Row>

        {/* 2. Tabela de Usuários Responsiva */}
        <div className="table-responsive">
          {usuarios.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead className="table-dark">
                <tr>
                  {colunas.map((col) => (
                    <th key={col.key}>{col.label}</th>
                  ))}
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
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="alert alert-info">
              Nenhum usuário encontrado - Possível causa: erro na conexão com a
              base de dados.
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
