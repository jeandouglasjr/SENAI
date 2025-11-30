// src/pages/NovoAnimal.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import api from "../services/api";

const NovoAnimal = () => {
  const navigate = useNavigate(); // 💡 ESTADO ATUALIZADO COM TODOS OS CAMPOS DO SUPABASE
  const [formData, setFormData] = useState({
    nome: "",
    especie: "",
    raca: "",
    sexo: "", // Novo campo
    nascimento: "", // Novo campo (data)
    porte: "", // Novo campo
    saude: "", // Novo campo
    status: "Disponível para Adoção", // Novo campo (valor padrão)
    data_resgate: "", // Novo campo (data)
  });
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: null,
  });

  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      navigate("/login");
      return;
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: null });

    try {
      // Chama a rota POST /animal/novo com todos os dados
      const response = await api.post("/animal/novo", formData);

      setStatus({
        loading: false,
        error: null,
        success: response.data.mensagem || "Animal cadastrado com sucesso!",
      }); // Limpa o formulário

      setFormData({
        nome: "",
        especie: "",
        raca: "",
        sexo: "",
        nascimento: "",
        porte: "",
        saude: "",
        status: "Disponível para Adoção",
        data_resgate: "",
      });

      setTimeout(() => navigate("/animal"), 1500);
    } catch (error) {
      console.error("Erro ao cadastrar animal:", error.response || error);
      const errorMessage =
        error.response?.data?.mensagem ||
        "Erro ao cadastrar. Verifique os dados.";

      if (error.response?.status === 401 || error.response?.status === 403) {
        alert("Sessão inválida. Faça login novamente.");
        localStorage.removeItem("userToken");
        localStorage.removeItem("userName");
        navigate("/login");
      }

      setStatus({
        loading: false,
        error: errorMessage,
        success: null,
      });
    }
  };

  return (
    <Container className="my-5">
           {" "}
      <Row className="justify-content-md-center">
               {" "}
        <Col md={10} lg={8}>
                   {" "}
          <Card className="shadow-lg">
                       {" "}
            <Card.Header className="bg-success text-white text-center">
                            <h2 className="mb-0">Cadastrar Novo Animal 🐶</h2> 
                       {" "}
            </Card.Header>
                       {" "}
            <Card.Body>
                           {" "}
              {status.error && <Alert variant="danger">{status.error}</Alert>} 
                         {" "}
              {status.success && (
                <Alert variant="success">{status.success}</Alert>
              )}
                           {" "}
              <Form onSubmit={handleSubmit}>
                                               {" "}
                {/* LINHA 1: NOME, ESPÉCIE, RAÇA */}               {" "}
                <Row>
                                   {" "}
                  <Col md={4}>
                                       {" "}
                    <Form.Group className="mb-3">
                      <Form.Label>Nome</Form.Label>
                                           {" "}
                      <Form.Control
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                      />
                                         {" "}
                    </Form.Group>
                                     {" "}
                  </Col>
                                   {" "}
                  <Col md={4}>
                                       {" "}
                    <Form.Group className="mb-3">
                      <Form.Label>Espécie</Form.Label>
                                           {" "}
                      <Form.Control
                        type="text"
                        name="especie"
                        value={formData.especie}
                        onChange={handleChange}
                        required
                      />
                                         {" "}
                    </Form.Group>
                                     {" "}
                  </Col>
                                   {" "}
                  <Col md={4}>
                                       {" "}
                    <Form.Group className="mb-3">
                      <Form.Label>Raça</Form.Label>
                                           {" "}
                      <Form.Control
                        type="text"
                        name="raca"
                        value={formData.raca}
                        onChange={handleChange}
                      />
                                         {" "}
                    </Form.Group>
                                     {" "}
                  </Col>
                                 {" "}
                </Row>
                                {/* LINHA 2: SEXO, NASCIMENTO, PORTE */}       
                       {" "}
                <Row>
                                   {" "}
                  <Col md={4}>
                                       {" "}
                    <Form.Group className="mb-3">
                      <Form.Label>Sexo</Form.Label>                     {" "}
                      <Form.Select
                        name="sexo"
                        value={formData.sexo}
                        onChange={handleChange}
                        required
                      >
                                               {" "}
                        <option value="">Selecione</option>                     
                          <option value="Macho">Macho</option>                 
                              <option value="Fêmea">Fêmea</option>             
                               {" "}
                      </Form.Select>
                                         {" "}
                    </Form.Group>
                                     {" "}
                  </Col>
                                   {" "}
                  <Col md={4}>
                                       {" "}
                    <Form.Group className="mb-3">
                      <Form.Label>Data de Nascimento</Form.Label>
                                           {" "}
                      <Form.Control
                        type="date"
                        name="nascimento"
                        value={formData.nascimento}
                        onChange={handleChange}
                      />
                                         {" "}
                    </Form.Group>
                                     {" "}
                  </Col>
                                   {" "}
                  <Col md={4}>
                                       {" "}
                    <Form.Group className="mb-3">
                      <Form.Label>Porte</Form.Label>                     {" "}
                      <Form.Select
                        name="porte"
                        value={formData.porte}
                        onChange={handleChange}
                      >
                                               {" "}
                        <option value="">Selecione</option>                     
                          <option value="Pequeno">Pequeno</option>             
                                  <option value="Médio">Médio</option>         
                                      <option value="Grande">Grande</option>   
                                         {" "}
                      </Form.Select>
                                         {" "}
                    </Form.Group>
                                     {" "}
                  </Col>
                                 {" "}
                </Row>
                                {/* LINHA 3: SAÚDE, STATUS, DATA RESGATE */}   
                           {" "}
                <Row>
                                   {" "}
                  <Col md={4}>
                                       {" "}
                    <Form.Group className="mb-3">
                      <Form.Label>Saúde/Vacinado</Form.Label>                   
                       {" "}
                      <Form.Select
                        name="saude"
                        value={formData.saude}
                        onChange={handleChange}
                        required
                      >
                                               {" "}
                        <option value="">Selecione o Status</option>           
                                   {" "}
                        <option value="Excelente">
                          Excelente (Vacinado e Vermifugado)
                        </option>
                                               {" "}
                        <option value="Boa">Boa (Requer 1 dose)</option>       
                                       {" "}
                        <option value="Acompanhamento">
                          Acompanhamento Médico
                        </option>
                                             {" "}
                      </Form.Select>
                                         {" "}
                    </Form.Group>
                                     {" "}
                  </Col>
                                   {" "}
                  <Col md={4}>
                                       {" "}
                    <Form.Group className="mb-3">
                      <Form.Label>Status Adoção</Form.Label>                   
                       {" "}
                      <Form.Select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                      >
                                               {" "}
                        <option value="Disponível para Adoção">
                          Disponível para Adoção
                        </option>
                                               {" "}
                        <option value="Em Adoção">Em Adoção (Reserva)</option> 
                                             {" "}
                        <option value="Adotado">Adotado</option>               
                             {" "}
                      </Form.Select>
                                         {" "}
                    </Form.Group>
                                     {" "}
                  </Col>
                                   {" "}
                  <Col md={4}>
                                       {" "}
                    <Form.Group className="mb-3">
                      <Form.Label>Data do Resgate</Form.Label>
                                           {" "}
                      <Form.Control
                        type="date"
                        name="data_resgate"
                        value={formData.data_resgate}
                        onChange={handleChange}
                        required
                      />
                                         {" "}
                    </Form.Group>
                                     {" "}
                  </Col>
                                 {" "}
                </Row>
                               {" "}
                <div className="d-grid gap-2 mt-4">
                                   {" "}
                  <Button
                    variant="success"
                    type="submit"
                    disabled={status.loading}
                  >
                                       {" "}
                    {status.loading ? "Cadastrando..." : "Cadastrar Animal"}   
                                 {" "}
                  </Button>
                                 {" "}
                </div>
                             {" "}
              </Form>
                         {" "}
            </Card.Body>
                       {" "}
            <Card.Footer className="text-center">
                           {" "}
              <Link to="/animal">Voltar para a Lista de Animais</Link>         
               {" "}
            </Card.Footer>
                     {" "}
          </Card>
                 {" "}
        </Col>
             {" "}
      </Row>
         {" "}
    </Container>
  );
};

export default NovoAnimal;
