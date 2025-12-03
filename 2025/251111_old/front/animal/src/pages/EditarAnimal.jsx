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

const EditarAnimal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loadingInitial, setLoadingInitial] = useState(true);

  const [animal, setAnimal] = useState({
    nome: "",
    especie: "",
    raca: "",
    sexo: "",
    nascimento: "",
    porte: "",
    saude: "",
    data_resgate: "",
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
        const data = response.data;

        const formatarData = (dateString) => {
          if (!dateString) return "";
          return dateString.split("T")[0];
        };

        // Atualiza o estado principal do animal com os dados carregados
        setAnimal({
          nome: data.nome || "",
          especie: data.especie || "",
          raca: data.raca || "",
          sexo: data.sexo || "",
          // Formata as datas para serem exibidas corretamente no input date
          nascimento: formatarData(data.nascimento),
          porte: data.porte || "",
          saude: data.saude || "",
          data_resgate: formatarData(data.data_resgate),
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

    if (id) {
      fetchAnimal();
    } else {
      setLoadingInitial(false);
      setStatus({
        error: "ID do animal não fornecido na URL.",
        loading: false,
        success: null,
      });
    }
  }, [id]);

  // --- Handler do Formulário Principal (Animal) ---
  const handleAnimalChange = (e) => {
    setAnimal({ ...animal, [e.target.name]: e.target.value });
  };

  // --- Handler de Submissão ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: null });

    // Monta o payload conforme a estrutura esperada pelo back-end
    const payload = {
      ...animal,
      // Se precisar fazer alguma transformação de dados (como data), faça aqui
    };

    try {
      // 3. Usa api.put para o endpoint de edição
      const response = await api.put(`/animal/${id}`, payload);
      setStatus({
        loading: false,
        error: null,
        success: response.data.mensagem || "Animal atualizado com sucesso!",
      });
      console.log("Animal Atualizado:", response.data);

      setTimeout(() => {
        // Redireciona após o sucesso da atualização
        navigate("/animal");
      }, 1500);
    } catch (error) {
      console.error("Erro ao atualizar animal", error.response || error);
      setStatus({
        loading: false,
        error:
          error.response?.data?.mensagem ||
          "Erro ao atualizar. Verifique a conexão com a API e os dados.",
        success: null,
      });
    }
  };

  // --- Renderização Condicional ---

  // Mostra um spinner enquanto carrega os dados iniciais
  if (loadingInitial) {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" role="status" variant="warning">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
        <p className="mt-2">Carregando dados do animal...</p>
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
            <Button as={Link} to="/animal" variant="danger">
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
                Editar Animal: **{animal.nome || "ID " + id}** 📝
              </h2>
            </Card.Header>
            <Card.Body>
              {status.error && <Alert variant="danger">{status.error}</Alert>}
              {status.success && (
                <Alert variant="success">{status.success}</Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <h3>Dados</h3>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formNome">
                    <Form.Control
                      type="text"
                      placeholder="Nome do Animal"
                      name="nome"
                      value={animal.nome}
                      onChange={handleAnimalChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formEspecie">
                    <Form.Control
                      type="text"
                      placeholder="Espécie (ex: Cachorro, Gato)"
                      name="especie"
                      value={animal.especie}
                      onChange={handleAnimalChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formRaca">
                    <Form.Control
                      type="text"
                      placeholder="Raça"
                      name="raca"
                      value={animal.raca}
                      onChange={handleAnimalChange}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-4">
                  <Form.Group as={Col} controlId="formSexo">
                    <Form.Control
                      as="select"
                      name="sexo"
                      value={animal.sexo}
                      onChange={handleAnimalChange}
                      required
                    >
                      <option value="">Sexo (Selecione)</option>
                      <option value="M">Macho</option>
                      <option value="F">Fêmea</option>
                      <option value="N">Não Informado</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formNascimento">
                    <Form.Control
                      type="date"
                      name="nascimento"
                      placeholder="Data de Nascimento"
                      value={animal.nascimento}
                      onChange={handleAnimalChange}
                      // Removido 'required' como no NovoAnimal.jsx
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formPorte">
                    <Form.Control
                      as="select"
                      name="porte"
                      value={animal.porte}
                      onChange={handleAnimalChange}
                      required
                    >
                      <option value="">Porte (Selecione)</option>
                      <option value="Pequeno">Pequeno</option>
                      <option value="Medio">Médio</option>
                      <option value="Grande">Grande</option>
                    </Form.Control>
                  </Form.Group>
                </Row>

                <Row className="mb-4">
                  <Form.Group as={Col} controlId="formSaude">
                    <Form.Control
                      type="text"
                      placeholder="Estado de Saúde (Ex: Vacinado, Castrado)"
                      name="saude"
                      value={animal.saude}
                      onChange={handleAnimalChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formDataResgate">
                    <Form.Control
                      type="date"
                      placeholder="Data do resgate"
                      name="data_resgate"
                      value={animal.data_resgate}
                      onChange={handleAnimalChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formStatus">
                    <Form.Control
                      type="text"
                      placeholder="Status"
                      name="status"
                      value={animal.status}
                      onChange={handleAnimalChange}
                      required
                    />
                  </Form.Group>
                </Row>

                <hr className="my-4" />

                <div className="d-grid gap-2">
                  <Button
                    variant="warning"
                    type="submit"
                    disabled={status.loading}
                  >
                    {status.loading ? "Atualizando..." : "Atualizar Animal"}
                  </Button>
                  <Button
                    variant="outline-secondary"
                    as={Link}
                    to="/animal"
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

export default EditarAnimal;
