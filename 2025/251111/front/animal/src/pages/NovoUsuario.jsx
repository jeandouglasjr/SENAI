// src/pages/NovoUsuario.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Alert,
  Card,
} from "react-bootstrap";
import api from "../services/api";

const NovoUsuario = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    cpf: "",
    senha: "",
  });
  // 💡 ATUALIZADO: Adicionando 'bairro' ao estado inicial
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
  const [contatos, setContatos] = useState([{ tipo: "Telefone", valor: "" }]);
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: null,
  });

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
    // 💡 ATUALIZADO: Adicionando 'bairro' ao novo endereço
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

  // --- Handlers para Contatos ---
  const handleContatoChange = (index, e) => {
    const novosContatos = contatos.map((contato, i) => {
      if (i === index) {
        return { ...contato, [e.target.name]: e.target.value };
      }
      return contato;
    });
    setContatos(novosContatos);
  };

  const addContato = () => {
    setContatos([...contatos, { tipo: "Telefone", valor: "" }]);
  };

  const removeContato = (index) => {
    const novosContatos = contatos.filter((_, i) => i !== index);
    setContatos(novosContatos);
  };

  // --- Handler de Submissão ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: null });

    // Monta o payload conforme a estrutura esperada pelo back-end (controller/usuario.js:criar)
    const payload = {
      ...usuario,
      // 💡 ATUALIZADO: Filtra e valida se o endereço tem campos essenciais, incluindo 'bairro'
      enderecos: enderecos.filter(
        (addr) => addr.logradouro && addr.municipio && addr.uf && addr.bairro
      ),
      contatos: contatos.filter((cont) => cont.valor),
    };

    // 💡 Nova Validação Front-end: Garante que haja pelo menos 1 endereço completo
    if (payload.enderecos.length === 0) {
      setStatus({
        loading: false,
        error:
          "Pelo menos um endereço completo (Logradouro, Bairro, Município, UF) é obrigatório.",
        success: null,
      });
      return;
    }

    try {
      const response = await api.post("/usuario", payload);
      setStatus({
        loading: false,
        error: null,
        success: "Usuário cadastrado com sucesso!",
      });
      console.log("Usuário Criado:", response.data);

      setTimeout(() => {
        navigate("/usuario");
      }, 1500);
    } catch (error) {
      console.error("Erro ao cadastrar usuário", error.response || error);
      setStatus({
        loading: false,
        error:
          error.response?.data?.mensagem ||
          "Erro ao cadastrar. Verifique a conexão com a API e os dados.",
        success: null,
      });
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={10} lg={8}>
          <Card className="shadow-lg">
            <Card.Header className="bg-primary text-white">
              <h2 className="mb-0">Cadastrar Novo Usuário 🐾</h2>
            </Card.Header>
            <Card.Body>
              {status.error && <Alert variant="danger">{status.error}</Alert>}
              {status.success && (
                <Alert variant="success">{status.success}</Alert>
              )}

              <Form onSubmit={handleSubmit}>
                {/* ... (Dados Pessoais mantidos) ... */}
                <h3>Dados Pessoais</h3>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formNome">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Seu nome"
                      name="nome"
                      value={usuario.nome}
                      onChange={handleUsuarioChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formCPF">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="000.000.000-00"
                      name="cpf"
                      value={usuario.cpf}
                      onChange={handleUsuarioChange}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-4">
                  <Form.Group as={Col} controlId="formFone">
                    <Form.Label>Fone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="(48) 90000-0000"
                      name="fone"
                      value={usuario.fone}
                      onChange={handleUsuarioChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="email@exemplo.com"
                      name="email"
                      value={usuario.email}
                      onChange={handleUsuarioChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formSenha">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Sua senha (mínimo 6 caracteres)"
                      name="senha"
                      value={usuario.senha}
                      onChange={handleUsuarioChange}
                      required
                    />
                  </Form.Group>
                </Row>

                <hr className="my-4" />

                {/* --- Seção 2: Endereços --- */}
                <h3>Endereços ({enderecos.length})</h3>
                {enderecos.map((endereco, index) => (
                  <Card key={index} className="mb-3 p-3 bg-light">
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId={`endLogradouro${index}`}>
                          <Form.Label>Logradouro</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Rua, Avenida, etc."
                            name="logradouro"
                            value={endereco.logradouro}
                            onChange={(e) => handleEnderecoChange(index, e)}
                            required // Logradouro obrigatório
                          />
                        </Form.Group>
                      </Col>
                      <Col md={2}>
                        <Form.Group controlId={`endNumero${index}`}>
                          <Form.Label>Número</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Nº"
                            name="numero"
                            value={endereco.numero}
                            onChange={(e) => handleEnderecoChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group controlId={`endComplemento${index}`}>
                          <Form.Label>Complemento</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Complemento"
                            name="complemento"
                            value={endereco.complemento}
                            onChange={(e) => handleEnderecoChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group controlId={`endCEP${index}`}>
                          <Form.Label>CEP</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="00000-000"
                            name="cep"
                            value={endereco.cep}
                            onChange={(e) => handleEnderecoChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      {/* 💡 CAMPO BAIRRO ADICIONADO E OBRIGATÓRIO */}
                      <Col md={4}>
                        <Form.Group controlId={`endBairro${index}`}>
                          <Form.Label>Bairro</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Bairro"
                            name="bairro"
                            value={endereco.bairro}
                            onChange={(e) => handleEnderecoChange(index, e)}
                            required // Bairro obrigatório
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group controlId={`endMunicipio${index}`}>
                          <Form.Label>Município</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Município"
                            name="municipio"
                            value={endereco.municipio}
                            onChange={(e) => handleEnderecoChange(index, e)}
                            required // Município obrigatório
                          />
                        </Form.Group>
                      </Col>
                      <Col md={2}>
                        <Form.Group controlId={`endUF${index}`}>
                          <Form.Label>UF</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="UF"
                            name="uf"
                            maxLength={2}
                            value={endereco.uf}
                            onChange={(e) => handleEnderecoChange(index, e)}
                            required // UF obrigatório
                          />
                        </Form.Group>
                      </Col>
                      <Col md={2} className="d-flex align-items-end">
                        {enderecos.length > 1 && (
                          <Button
                            variant="outline-danger"
                            onClick={() => removeEndereco(index)}
                            className="w-100"
                          >
                            Remover
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
                    variant="success"
                    type="submit"
                    disabled={status.loading}
                  >
                    {status.loading ? "Cadastrando..." : "Cadastrar Usuário"}
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

export default NovoUsuario;
