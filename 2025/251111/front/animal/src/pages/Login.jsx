import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Card,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import api from "../services/api";

const Login = ({ setUsuarioLogado }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [status, setStatus] = useState({ loading: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null });

    try {
      const response = await api.post("/login", { email, senha });

      const { token, usuario } = response.data;

      localStorage.setItem("userToken", token);

      if (usuario && usuario.nome) {
        localStorage.setItem("userName", usuario.nome);
      } else {
        localStorage.setItem("userName", "Usuário");
      }

      setStatus({ loading: false, error: null });

      navigate("/usuario");
    } catch (error) {
      console.error("Erro no Login:", error.response || error);
      setStatus({
        loading: false,
        error:
          error.response?.data?.mensagem ||
          "Erro ao fazer login. Verifique suas credenciais.",
      });
    }
  };

  return (
    // CORREÇÃO: Aplicando classes para centralização vertical (d-flex, align-items-center, min-vh-100)
    // Usamos o 'fluid' para lg para garantir que o contêiner use a largura total da tela,
    // e 'min-vh-100' para forçar o contêiner a ter a altura mínima do viewport.
    <Container fluid="lg" className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100 justify-content-center">
        {/* Usando lg={8} para garantir largura suficiente, conforme solicitado. */}
        <Col xs={12} sm={10} md={8} lg={8}>
          <Card className="shadow-lg">
            <Card.Header className="bg-primary text-white text-center rounded-top-lg">
              <h2 className="mb-0">Acesso ao Sistema 🐾</h2>
            </Card.Header>
            <Card.Body>
              {status.error && (
                <Alert variant="danger">{status.error}</Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Seu email cadastrado"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button
                    variant="success"
                    type="submit"
                    disabled={status.loading}
                  >
                    {status.loading ? "Entrando..." : "Entrar"}
                  </Button>
                </div>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center">
              Não tem uma conta? <Link to="/usuario/novo">Cadastre-se</Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;