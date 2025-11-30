// src/pages/Animal.jsx
import React, { useEffect, useState, useMemo } from "react";
import api from "../services/api";
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
import "bootstrap/dist/css/bootstrap.min.css";

import LogoutButton from "../components/LogoutButton";

const Animal = () => {
  const [animais, setAnimais] = useState([]);
  const [usuarioLogado] = useState(
    localStorage.getItem("userName") || "Usuário Logado"
  );
  const navigate = useNavigate();

  // Função auxiliar para formatar datas (útil para campos de data)
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      // Cria um objeto Date
      const date = new Date(dateString);
      // Formata para DD/MM/AAAA
      return date.toLocaleDateString("pt-BR");
    } catch (e) {
      return "Data Inválida";
    }
  };

  const buscarAnimais = async () => {
    try {
      const response = await api.get("/animal");
      const dados = response.data?.mensagem || []; // 💡 FORMATANDO DATAS AO RECEBER OS DADOS

      const animaisFormatados = dados.map((animal) => ({
        ...animal,
        nascimento: formatDate(animal.nascimento), // Formata Nascimento
        data_resgate: formatDate(animal.data_resgate), // Formata Data Resgate // Mantendo o formato longo para a data de criação do registro (se existir)
        data_cadastro: animal.data_cadastro
          ? new Date(animal.data_cadastro).toLocaleString()
          : "N/A",
      }));

      setAnimais(animaisFormatados);
    } catch (error) {
      console.error("Erro ao buscar animais", error);
      if (error.response?.status === 401 || error.response?.status === 403) {
        alert("Sua sessão expirou. Faça login novamente.");
        localStorage.removeItem("userToken");
        localStorage.removeItem("userName");
        navigate("/login");
      } else {
        alert("Falha ao buscar animais.");
      }
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      navigate("/login");
      return;
    }
    buscarAnimais();
  }, [navigate]); // 💡 COLUNAS ATUALIZADAS PARA EXIBIR TODOS OS CAMPOS

  const colunas = useMemo(
    () => [
      { key: "id", label: "ID" },
      { key: "nome", label: "Nome" },
      { key: "especie", label: "Espécie" },
      { key: "raca", label: "Raça" },
      { key: "sexo", label: "Sexo" },
      { key: "nascimento", label: "Nasc." },
      { key: "porte", label: "Porte" },
      { key: "saude", label: "Saúde" },
      { key: "status", label: "Status" },
      { key: "data_resgate", label: "Resgate" },
      { key: "data_cadastro", label: "Cadastro" },
    ],
    []
  );

  return (
    <>
           {" "}
      <Navbar bg="dark" variant="dark" expand="lg">
               {" "}
        <Container fluid>
                   {" "}
          <Navbar.Brand as={Link} to="/usuario">
            Meu App Pet
          </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />         {" "}
          <Navbar.Collapse id="basic-navbar-nav">
                       {" "}
            <Nav className="me-auto">
                           {" "}
              <Nav.Link as={Link} to="/usuario">
                Lista de Usuários
              </Nav.Link>
                           {" "}
              <Nav.Link as={Link} to="/historico_adocao">
                Histórico de Adoção
              </Nav.Link>
                         {" "}
            </Nav>
                       {" "}
            <Nav>
                           {" "}
              <NavDropdown
                title={usuarioLogado}
                id="user-nav-dropdown"
                align="end"
              >
                               {" "}
                <NavDropdown.ItemText>
                  Logado como: <strong>{usuarioLogado}</strong>
                </NavDropdown.ItemText>
                                <NavDropdown.Divider />
                                <LogoutButton />             {" "}
              </NavDropdown>
                         {" "}
            </Nav>
                     {" "}
          </Navbar.Collapse>
                 {" "}
        </Container>
             {" "}
      </Navbar>
           {" "}
      <Container className="my-5">
               {" "}
        <Row className="align-items-center mb-4">
                   {" "}
          <Col>
                       {" "}
            <h1 className="mb-0">🐕 Lista de Animais para Adoção</h1>         {" "}
          </Col>
                   {" "}
          <Col xs="auto">
                       {" "}
            <Button variant="success" as={Link} to="/animal/novo">
                            + Cadastrar Novo Animal            {" "}
            </Button>
                     {" "}
          </Col>
                 {" "}
        </Row>
               {" "}
        {/* Tabela de Animais (Tabela com muitos campos, use rolagem horizontal) */}
               {" "}
        <div className="table-responsive">
                   {" "}
          {animais.length > 0 ? (
            <Table striped bordered hover responsive>
                           {" "}
              <thead className="table-dark">
                               {" "}
                <tr>
                                   {" "}
                  {colunas.map((col) => (
                    <th key={col.key}>{col.label}</th>
                  ))}
                                 {" "}
                </tr>
                             {" "}
              </thead>
                           {" "}
              <tbody>
                               {" "}
                {animais.map((animal, index) => (
                  <tr key={animal.id || index}>
                                       {" "}
                    {colunas.map((col) => (
                      <td key={col.key}>{animal[col.key]}</td>
                    ))}
                                     {" "}
                  </tr>
                ))}
                             {" "}
              </tbody>
                         {" "}
            </Table>
          ) : (
            <p className="alert alert-info">Nenhum animal encontrado.</p>
          )}
                 {" "}
        </div>
               {" "}
        <div className="mt-4">
                   {" "}
          <Button variant="primary" onClick={buscarAnimais}>
                        Atualizar Lista          {" "}
          </Button>
                 {" "}
        </div>
             {" "}
      </Container>
         {" "}
    </>
  );
};

export default Animal;
