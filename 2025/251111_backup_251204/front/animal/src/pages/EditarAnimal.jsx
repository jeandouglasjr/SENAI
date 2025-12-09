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
  InputGroup,
} from "react-bootstrap";
import api from "../services/api"; // Mantendo o import da sua API

const EditarAnimal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loadingInitial, setLoadingInitial] = useState(true);

  // 1. Estado Principal do Animal
  const [animal, setAnimal] = useState({
    nome: "",
    especie: "",
    raca: "",
    sexo: "",
    nascimento: "", // data (DD/MM/AAAA)
    porte: "",
    saude: "",
    status: "",
    data_resgate: "", // data (DD/MM/AAAA)
  });

  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: null,
  });

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        setLoadingInitial(true);
        const response = await api.get(`/animal/${id}`);
        const data = response.data?.animal;

        setAnimal({
          nome: data.nome || "",
          especie: data.especie || "",
          raca: data.raca || "",
          sexo: data.sexo || "",
          nascimento: data.nascimento || "", // Assumindo que a API retorna como string
          porte: data.porte || "",
          saude: data.saude || "",
          status: data.status || "",
          data_resgate: data.data_resgate || "", // Assumindo que a API retorna como string
        });
      } catch (error) {
        console.error(
          "Erro ao carregar dados do animal",
          error.response || error
        );
        setStatus({
          loading: false,
          error:
            "Erro ao carregar dados do animal. ID inválido ou problema de conexão.",
          success: null,
        });
      } finally {
        setLoadingInitial(false);
      }
    };

    fetchAnimal();
  }, [id]);

  const handleAnimalChange = (e) => {
    setAnimal({ ...animal, [e.target.name]: e.target.value });
  };

  // 4. Handler de Submissão
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: null });

    const payload = {
      ...animal,
      // Assegure que as datas no payload estejam no formato correto para o backend
      // (Mantido como string, conforme seu código original)
    };

    try {
      // Usa api.put para o endpoint de edição do animal
      const response = await api.put(`/animal/${id}`, payload);
      setStatus({
        loading: false,
        error: null,
        success: "Animal atualizado com sucesso!",
      });
      console.log("Animal Atualizado:", response.data);

      setTimeout(() => {
        navigate("/animal"); // Volta para a lista de animais após o sucesso
      }, 1500);
    } catch (error) {
      console.error("Erro ao atualizar animal", error.response || error);
      setStatus({
        loading: false,
        error:
          error.response?.data?.mensagem ||
          "Erro ao atualizar o animal. Verifique a conexão com a API e os dados.",
        success: null,
      });
    }
  };

  // --- Renderização de Status ---
  if (loadingInitial) {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" role="status" variant="info">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
        <p className="mt-2">Carregando dados do animal...</p>
      </Container>
    );
  }

  if (status.error && !status.loading && !loadingInitial) {
    return (
      <Container className="my-5">
        <Alert variant="danger" className="text-center">
          {status.error}
          <div className="mt-2">
            <Button as={Link} to="/animal" variant="danger">
              Voltar para a Lista de Animais
            </Button>
          </div>
        </Alert>
      </Container>
    );
  }

  // --- Formulário Principal ---
  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={10} lg={8}>
          <Card className="shadow-lg">
            <Card.Header className="bg-info text-white">
              <h2 className="mb-0">
                Editar Animal: **{animal.nome || "ID " + id}** 🐾
              </h2>
            </Card.Header>
            <Card.Body>
              {status.error && <Alert variant="danger">{status.error}</Alert>}
              {status.success && (
                <Alert variant="success">{status.success}</Alert>
              )}

              <Form onSubmit={handleSubmit}>
                {/* --- Seção: Informações Básicas --- */}
                <h3>Informações Básicas</h3>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nome do Animal"
                      name="nome"
                      value={animal.nome}
                      onChange={handleAnimalChange} // CORRIGIDO AQUI
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formEspecie">
                    <Form.Label>Espécie</Form.Label>
                    <Form.Select
                      name="especie"
                      value={animal.especie}
                      onChange={handleAnimalChange} // CORRIGIDO AQUI
                      required
                    >
                      <option value="">Selecione a Espécie</option>
                      <option value="Cachorro">Cachorro</option>
                      <option value="Gato">Gato</option>
                      <option value="Outros">Outros</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formRaca">
                    <Form.Label>Raça</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ex: Labrador, Siamês"
                      name="raca"
                      value={animal.raca}
                      onChange={handleAnimalChange} // CORRIGIDO AQUI
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formPorte">
                    <Form.Label>Porte</Form.Label>
                    <Form.Select
                      name="porte"
                      value={animal.porte}
                      onChange={handleAnimalChange} // CORRIGIDO AQUI
                      required
                    >
                      <option value="">Selecione o Porte</option>
                      <option value="Pequeno">Pequeno</option>
                      <option value="Medio">Médio</option>
                      <option value="Grande">Grande</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <hr className="my-4" />

                {/* --- Seção: Detalhes e Datas --- */}
                <h3>Detalhes e Histórico</h3>
                <Row className="mb-3">
                  <Form.Group as={Col} md={6} controlId="formNascimento">
                    <Form.Label>Data de Nascimento (Estimada)</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>📅</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="DD/MM/AAAA"
                        name="nascimento"
                        value={animal.nascimento}
                        onChange={handleAnimalChange} // CORRIGIDO AQUI
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md={6} controlId="formResgate">
                    <Form.Label>Data de Resgate</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>🏠</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="DD/MM/AAAA"
                        name="data_resgate"
                        value={animal.data_resgate}
                        onChange={handleAnimalChange} // CORRIGIDO AQUI
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="mb-4">
                  <Form.Group as={Col} md={6} controlId="formSexo">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Select
                      name="sexo"
                      value={animal.sexo}
                      onChange={handleAnimalChange} // CORRIGIDO AQUI
                      required
                    >
                      <option value="">Selecione o Sexo</option>
                      <option value="Macho">Macho</option>
                      <option value="Femea">Fêmea</option>
                      <option value="NaoInformado">Não Informado</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} md={6} controlId="formSaude">
                    <Form.Label>Status de Saúde</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Vacinas, Castração, Problemas de Saúde, etc."
                      name="saude"
                      value={animal.saude}
                      onChange={handleAnimalChange} // CORRIGIDO AQUI
                    />
                  </Form.Group>
                </Row>

                <hr className="my-4" />

                {/* --- Botões de Ação --- */}
                <div className="d-grid gap-2">
                  <Button
                    variant="info"
                    type="submit"
                    disabled={status.loading}
                    className="text-white"
                  >
                    {status.loading ? "Atualizando..." : "Atualizar Animal"}
                  </Button>
                  <Button
                    variant="outline-secondary"
                    as={Link}
                    to="/animal"
                    disabled={status.loading}
                  >
                    Voltar para a Lista de Animais
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

// Wrapper App para exportação
const App = () => <EditarAnimal />;
export default App;