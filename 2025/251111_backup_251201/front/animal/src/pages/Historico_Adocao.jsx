import React, { useEffect, useState, useMemo } from 'react';
import api from '../services/api'; 
import { useNavigate, Link } from 'react-router-dom';
import { Container, Table, Button, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HistoricoAdocao = () => {
  const [historico, setHistorico] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState('Nome do Usuário Logado'); // Simulação
  const navigate = useNavigate();

  // --- Funções de API ---

  const buscarHistorico = async () => {
    try {
      // Rota para buscar histórico de adoções no seu back-end (Ex: /historico-adocao)
      const response = await api.get('/historico-adocao'); 
      const dados = response.data?.mensagem || [];
      
      // Mapeia os dados para formatação e garante IDs
      const historicoFormatado = dados.map(item => ({
        ...item,
        id: item.id,
        // Supondo que você tem 'dataAdocao' no back-end
        dataAdocao: item.dataAdocao ? new Date(item.dataAdocao).toLocaleDateString() : 'N/A',
      }));
      setHistorico(historicoFormatado);
    } catch (error) {
      console.error("Erro ao buscar histórico de adoção", error);
      alert("Falha ao buscar o histórico de adoção. Verifique sua autenticação.");
    }
  };

  useEffect(() => {
    buscarHistorico();
  }, []);

  // --- Colunas da Tabela ---

  const colunas = useMemo(() => ([
    { key: 'nomeAnimal', label: 'Animal Adotado' },
    { key: 'especie', label: 'Espécie' },
    { key: 'nomeAdotante', label: 'Adotante' }, // Nome do usuário
    { key: 'emailAdotante', label: 'Email do Adotante' }, // Email do usuário
    { key: '  ', label: 'Data da Adoção' },
    { key: 'status', label: 'Status' }, // Ex: Concluída, Cancelada, etc.
  ]), []);

  // --- Funções de Sessão ---

  const handleLogout = () => {
    // Implemente a remoção do token real (setAuthToken(null))
    localStorage.removeItem('userToken'); // Simulação
    alert("Sessão encerrada!");
    navigate('/login'); 
  };
  
  // --- Renderização ---
  
  return (
    <>
      {/* 1. Navbar Consistente */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/usuario">Meu App Pet</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Links de navegação */}
              <Nav.Link as={Link} to="/usuario">Lista de Usuários</Nav.Link>
              <Nav.Link as={Link} to="/animal">Lista de Animais</Nav.Link>
            </Nav>

            <Nav>
              <NavDropdown title={usuarioLogado} id="user-nav-dropdown" align="end">
                <NavDropdown.Item onClick={handleLogout} className="text-danger">
                  Sair
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-5">
        <h1 className="mb-4 text-center">💖 Histórico de Adoções</h1>
        
        <Row className="mb-4">
          <Col className="text-end">
            <Button variant="info" onClick={buscarHistorico}>
              Atualizar Histórico
            </Button>
          </Col>
        </Row>

        {/* 2. Tabela do Histórico Responsiva */}
        <div className="table-responsive">
          {historico.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead className="table-success"> {/* Tabela com cor de adoção (sucesso) */}
                <tr>
                  {colunas.map(col => (
                    <th key={col.key}>{col.label}</th>
                  ))}
                  <th>Detalhes</th>
                </tr>
              </thead>
              <tbody>
                {historico.map(item => (
                  <tr key={item.id}> 
                    {colunas.map(col => (
                      <td key={col.key}>
                        {/* Aplica um badge para o status, se for o caso */}
                        {col.key === 'status' ? (
                          <span 
                            className={`badge bg-${item.status === 'Concluída' ? 'success' : 'secondary'}`}
                          >
                            {item.status || 'Concluída'}
                          </span>
                        ) : (
                          item[col.key] 
                        )}
                      </td>
                    ))}
                    <td>
                      <Button variant="outline-primary" size="sm">
                        Ver Contrato
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="alert alert-info text-center">Nenhum registro de adoção encontrado.</p>
          )}
        </div>
      </Container>
    </>
  );
};

export default HistoricoAdocao;