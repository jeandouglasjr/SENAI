import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Alert,
  Card,
  InputGroup,
} from "react-bootstrap";
import api from "../services/api"; // Assumindo que esta API é configurada

const NovoHistoricoAdocao = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    animal_id: "",
    adotante_id: "",
    data_adocao: new Date().toISOString().substring(0, 10), // Data atual no formato YYYY-MM-DD
    status: "Concluída", // Padrão
    observacao: "",
  });

  const [animais, setAnimais] = useState([]); // Lista de animais para o Select
  const [adotantes, setAdotantes] = useState([]); // Lista de usuários (adotantes) para o Select

  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: null,
  });

  // --- Funções Auxiliares de Busca (Para Selects) ---

  const buscarDadosIniciais = async () => {
    try {
      // 1. Buscar Animais
      const animaisResponse = await api.get("/animal");
      const animaisData = animaisResponse.data?.mensagem || [];
      // Filtra apenas animais disponíveis para adoção (se houver o campo)
      setAnimais(
        animaisData
          .filter((a) => a.disponivel !== false) // Filtra se o animal tiver a flag 'disponivel: false'
          .map((a) => ({ id: a.id, nome: a.nome, especie: a.especie }))
      );

      // 2. Buscar Usuários (Adotantes)
      const usuariosResponse = await api.get("/usuario");
      const usuariosData = usuariosResponse.data?.mensagem || [];
      // Mapeia para ID e Nome
      setAdotantes(usuariosData.map((u) => ({ id: u.id, nome: u.nome })));
    } catch (err) {
      console.error("Erro ao buscar dados para os selects", err);
      // Define um erro específico para o formulário
      setStatus((prev) => ({
        ...prev,
        error: "Erro ao carregar animais e/ou adotantes para seleção.",
      }));
    }
  };

  useEffect(() => {
    buscarDadosIniciais();
  }, []);

  // --- Handlers do Formulário ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- Handler de Submissão ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: null });

    // Validação mínima
    if (!formData.animal_id || !formData.adotante_id) {
      setStatus({
        loading: false,
        error: "Selecione o Animal e o Adotante.",
        success: null,
      });
      return;
    }

    try {
      const payload = {
        animal_id: parseInt(formData.animal_id), // Garante que seja número, se o back-end esperar isso
        adotante_id: parseInt(formData.adotante_id), // Garante que seja número
        data_adocao: formData.data_adocao,
        status: formData.status,
        observacao: formData.observacoes,
      };

      const response = await api.post("/historico_adocao", payload);
      setStatus({
        loading: false,
        error: null,
        success: "Histórico de adoção registrado com sucesso!",
      });
      console.log("Histórico Criado:", response.data);

      // Redireciona após um pequeno delay
      setTimeout(() => {
        navigate("/historico_adocao");
      }, 1500);
    } catch (error) {
      console.error("Erro ao registrar adoção", error.response || error);
      setStatus({
        loading: false,
        error:
          error.response?.data?.mensagem ||
          "Erro ao registrar. Verifique a conexão com a API e os dados.",
        success: null,
      });
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={10} lg={8}>
          <Card className="shadow-lg">
            <Card.Header className="bg-info text-white">
              <h2 className="mb-0">Registrar Nova Adoção 📝</h2>
            </Card.Header>
            <Card.Body>
              {status.error && <Alert variant="danger">{status.error}</Alert>}
              {status.success && (
                <Alert variant="success">{status.success}</Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  {/* Campo Animal */}
                  <Form.Group as={Col} controlId="formAnimal">
                    <Form.Label>Animal Adotado</Form.Label>
                    <Form.Select
                      name="animal_id"
                      value={formData.animal_id}
                      onChange={handleChange}
                      required
                      disabled={animais.length === 0}
                    >
                      <option value="">Selecione um Animal...</option>
                      {animais.map((animal) => (
                        <option key={animal.id} value={animal.id}>
                          {animal.nome} ({animal.especie})
                        </option>
                      ))}
                    </Form.Select>
                    {animais.length === 0 && (
                      <Form.Text className="text-danger">
                        Nenhum animal disponível ou erro ao carregar.
                      </Form.Text>
                    )}
                  </Form.Group>

                  {/* Campo Adotante */}
                  <Form.Group as={Col} controlId="formAdotante">
                    <Form.Label>Adotante (Usuário)</Form.Label>
                    <Form.Select
                      name="adotante_id"
                      value={formData.adotante_id}
                      onChange={handleChange}
                      required
                      disabled={adotantes.length === 0}
                    >
                      <option value="">Selecione o Adotante...</option>
                      {adotantes.map((adotante) => (
                        <option key={adotante.id} value={adotante.id}>
                          {adotante.nome}
                        </option>
                      ))}
                    </Form.Select>
                    {adotantes.length === 0 && (
                      <Form.Text className="text-danger">
                        Nenhum adotante disponível ou erro ao carregar.
                      </Form.Text>
                    )}
                  </Form.Group>
                </Row>

                <Row className="mb-4">
                  {/* Campo Data da Adoção */}
                  <Form.Group as={Col} controlId="formDataAdocao">
                    <Form.Label>Data da Adoção</Form.Label>
                    <Form.Control
                      type="date"
                      name="data_adocao"
                      value={formData.data_adocao}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Campo Status */}
                  <Form.Group as={Col} controlId="formStatus">
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      required
                    >
                      <option value="Concluída">Concluída</option>
                      <option value="Pendente">Pendente</option>
                      <option value="Cancelada">Cancelada</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                {/* Campo Observação */}
                <Form.Group controlId="formObservacoes" className="mb-4">
                  <Form.Label>Observação</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="observacoes"
                    value={formData.observacao}
                    onChange={handleChange}
                    placeholder="Detalhes importantes sobre a adoção..."
                  />
                </Form.Group>

                <hr className="my-4" />

                {/* --- Botões de Ação --- */}
                <div className="d-grid gap-2">
                  <Button
                    variant="info"
                    type="submit"
                    disabled={
                      status.loading ||
                      animais.length === 0 ||
                      adotantes.length === 0
                    }
                  >
                    {status.loading
                      ? "Registrando..."
                      : "Registrar Histórico de Adoção"}
                  </Button>
                  <Button
                    variant="outline-secondary"
                    as={Link}
                    to="/historico_adocao"
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

export default NovoHistoricoAdocao;
