// src/pages/EditarUsuario.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Alert,
  Card,
  Spinner,
} from "react-bootstrap";
import api from "../services/api";

const EditarUsuario = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loadingInitial, setLoadingInitial] = useState(true);

  // 2. Estados Principais (Usuário, Endereços)
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    cpf: "",
    senha: "",
    fone: "",
  });

  const [enderecos, setEnderecos] = useState([
    {
      logradouro: "",
      numero: "",
      complemento: "",
      municipio: "",
      uf: "",
      cep: "",
      bairro: "",
    },
  ]);

  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: null,
  });

  // 3. Efeito para carregar os dados do usuário
  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        setLoadingInitial(true);
        const response = await api.get(`/usuario/${id}`);
        const data = response.data;

        // Atualiza o estado principal do usuário
        setUsuario({
          nome: data.nome || "",
          email: data.email || "",
          cpf: data.cpf || "",
          fone: data.fone || "",
          senha: "", // Não preencher o campo de senha
        });

        // Mapeia e atualiza Endereços
        if (data.enderecos && data.enderecos.length > 0) {
          setEnderecos(
            data.enderecos.map((end) => ({
              logradouro: end.logradouro || "",
              numero: end.numero || "",
              complemento: end.complemento || "",
              municipio: end.municipio || "",
              uf: end.uf || "",
              cep: end.cep || "",
              bairro: end.bairro || "",
            }))
          );
        } else {
          setEnderecos([
            {
              logradouro: "",
              numero: "",
              complemento: "",
              municipio: "",
              uf: "",
              cep: "",
              bairro: "",
            },
          ]);
        }
      } finally {
        setLoadingInitial(false);
      }
    };

    fetchUsuario();
  }, [id]);

  // --- Handlers do Formulário Principal (Usuário) ---
  const handleUsuarioChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  // --- Handlers para Endereços ---
  const handleEnderecoChange = (index, e) => {
    const novosEnderecos = enderecos.map((endereco, i) => {
      if (i === index) {
        return { ...endereco, [e.target.name]: e.target.value };
      }
      return endereco;
    });
    setEnderecos(novosEnderecos);
  };

  const addEndereco = () => {
    setEnderecos([
      ...enderecos,
      {
        logradouro: "",
        numero: "",
        complemento: "",
        municipio: "",
        uf: "",
        cep: "",
        bairro: "",
      },
    ]);
  };

  const removeEndereco = (index) => {
    const novosEnderecos = enderecos.filter((_, i) => i !== index);
    setEnderecos(novosEnderecos);
  };

  // --- Handler de Submissão ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: null });

    // Monta o payload (mesma lógica de filtro do NovoUsuario.jsx)
    const payload = {
      ...usuario,
      enderecos: enderecos.filter(
        (addr) => addr.logradouro && addr.municipio && addr.uf && addr.bairro
      ),
    };

    // Nova Validação Front-end: Garante que haja pelo menos 1 endereço completo
    if (payload.enderecos.length === 0) {
      setStatus({
        loading: false,
        error:
          "Pelo menos um endereço completo (Logradouro, Bairro, Município, UF) é obrigatório.",
        success: null,
      });
      return;
    }

    // Validação da Senha
    if (usuario.senha === "") {
      // Remove a propriedade senha do payload se estiver vazia (para não sobrescrever no backend)
      delete payload.senha;
    }

    try {
      // 4. Usa api.put para o endpoint de edição
      const response = await api.put(`/usuario/${id}`, payload);
      setStatus({
        loading: false,
        error: null,
        success: "Usuário atualizado com sucesso!",
      });
      console.log("Usuário Atualizado:", response.data);

      setTimeout(() => {
        navigate("/usuario"); // Volta para a lista após o sucesso
      }, 1500);
    } catch (error) {
      console.error("Erro ao atualizar usuário", error.response || error);
      setStatus({
        loading: false,
        error:
          error.response?.data?.mensagem ||
          "Erro ao atualizar. Verifique a conexão com a API e os dados.",
        success: null,
      });
    }
  };

  // Mostra um spinner enquanto carrega os dados iniciais
  if (loadingInitial) {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
        <p className="mt-2">Carregando dados do usuário...</p>
      </Container>
    );
  }

  // Se o carregamento inicial falhou e há um erro
  if (status.error && !status.loading && !loadingInitial) {
    return (
      <Container className="my-5">
        <Alert variant="danger" className="text-center">
          {status.error}
          <div className="mt-2">
            <Button as={Link} to="/usuario" variant="danger">
              Voltar para a Lista
            </Button>
          </div>
        </Alert>
      </Container>
    );
  }

  // Formulário Principal
  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={10} lg={8}>
          <Card className="shadow-lg">
            <Card.Header className="bg-warning text-dark">
              <h2 className="mb-0">
                Editar Usuário: **{usuario.nome || "ID " + id}** 📝
              </h2>
            </Card.Header>
            <Card.Body>
              {status.error && <Alert variant="danger">{status.error}</Alert>}
              {status.success && (
                <Alert variant="success">{status.success}</Alert>
              )}

              <Form onSubmit={handleSubmit}>
                {/* --- Seção 1: Dados Pessoais --- */}
                <h3>Dados Pessoais</h3>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formNome">
                    <Form.Control
                      type="text"
                      placeholder="Nome Completo"
                      name="nome"
                      value={usuario.nome}
                      onChange={handleUsuarioChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formCPF">
                    <Form.Control
                      type="text"
                      placeholder="CPF 000.000.000-00"
                      name="cpf"
                      value={usuario.cpf}
                      onChange={handleUsuarioChange}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-4">
                  <Form.Group as={Col} controlId="formFone">
                    <Form.Control
                      type="text"
                      placeholder="Fone (48) 90000-0000"
                      name="fone"
                      value={usuario.fone}
                      onChange={handleUsuarioChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email email@exemplo.com"
                      name="email"
                      value={usuario.email}
                      onChange={handleUsuarioChange}
                      required
                    />
                  </Form.Group>
                </Row>

                <hr className="my-4" />

                {/* --- Seção 2: Endereços --- */}
                <h3>Endereço</h3>
                {enderecos.map((endereco, index) => (
                  <Card key={index} className="mb-3 p-3 bg-light">
                    <Row>
                      <Col md={6} className="mb-2">
                        <Form.Group controlId={`endLogradouro${index}`}>
                          <Form.Control
                            type="text"
                            placeholder="Rua, Avenida, etc."
                            name="logradouro"
                            value={endereco.logradouro}
                            onChange={(e) => handleEnderecoChange(index, e)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={2} className="mb-2">
                        <Form.Group controlId={`endNumero${index}`}>
                          <Form.Control
                            type="text"
                            placeholder="Nº"
                            name="numero"
                            value={endereco.numero}
                            onChange={(e) => handleEnderecoChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4} className="mb-2">
                        <Form.Group controlId={`endComplemento${index}`}>
                          <Form.Control
                            type="text"
                            placeholder="Complemento Casa, Ap, Bloco..."
                            name="complemento"
                            value={endereco.complemento}
                            onChange={(e) => handleEnderecoChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col md={4} className="mb-2">
                        <Form.Group controlId={`endBairro${index}`}>
                          <Form.Control
                            type="text"
                            placeholder="Bairro"
                            name="bairro"
                            value={endereco.bairro}
                            onChange={(e) => handleEnderecoChange(index, e)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4} className="mb-2">
                        <Form.Group controlId={`endMunicipio${index}`}>
                          <Form.Control
                            type="text"
                            placeholder="Município"
                            name="municipio"
                            value={endereco.municipio}
                            onChange={(e) => handleEnderecoChange(index, e)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={2} className="mb-2">
                        <Form.Group controlId={`endUF${index}`}>
                          <Form.Control
                            type="text"
                            placeholder="UF"
                            name="uf"
                            maxLength={2}
                            value={endereco.uf}
                            onChange={(e) => handleEnderecoChange(index, e)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={2} className="mb-2">
                        <Form.Group controlId={`endCEP${index}`}>
                          <Form.Control
                            type="text"
                            placeholder="CEP 88130-300"
                            name="cep"
                            value={endereco.cep}
                            onChange={(e) => handleEnderecoChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col className="d-flex justify-content-end">
                        {enderecos.length > 1 && (
                          <Button
                            variant="outline-danger"
                            onClick={() => removeEndereco(index)}
                            size="sm"
                          >
                            Remover Endereço
                          </Button>
                        )}
                      </Col>
                    </Row>
                  </Card>
                ))}

                <hr className="my-4" />

                {/* --- Botões de Ação --- */}
                <div className="d-grid gap-2">
                  <Button
                    variant="warning"
                    type="submit"
                    disabled={status.loading}
                  >
                    {status.loading ? "Atualizando..." : "Atualizar Usuário"}
                  </Button>
                  <Button
                    variant="outline-secondary"
                    as={Link}
                    to="/usuario"
                    disabled={status.loading}
                  >
                    Voltar para a Lista
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditarUsuario;
