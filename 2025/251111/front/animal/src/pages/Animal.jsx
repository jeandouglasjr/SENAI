// src/pages/Animal.jsx
import React, { useState, useEffect } from 'react';
import api from '../services/api'; // Importa a instância configurada do Axios
import { useNavigate } from 'react-router-dom';

const Animal = () => {
  const [animais, setAnimais] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnimais = async () => {
      // Verifica se o usuário está logado (exemplo básico de proteção)
      const token = localStorage.getItem('token');
      if (!token) {
        // Se não houver token, redireciona para a home ou login
        navigate('/'); 
        return;
      }
      
      try {
        // Rota de exemplo no back-end: /animais
        const response = await api.get('/animais'); 
        setAnimais(response.data);
        setError(null);
      } catch (err) {
        console.error("Erro ao buscar animais:", err);
        // Trata erro de JWT expirado/inválido
        if (err.response && err.response.status === 401) {
          localStorage.removeItem('token'); // Limpa o token inválido
          navigate('/'); // Redireciona para login
        }
        setError("Falha ao carregar a lista de animais.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimais();
  }, [navigate]);

  if (loading) return <h2>🐾 Carregando animais...</h2>;
  if (error) return <h2 style={{ color: 'red' }}>Erro: {error}</h2>;

  return (
    <div>
      <h1>🐶 Cadastro e Listagem de Animais</h1>
      <p>Área protegida que exibe a lista de animais disponíveis para adoção.</p>
      <ul>
        {animais.map(animal => (
          <li key={animal.id}>{animal.nome} - Idade: {animal.idade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Animal;