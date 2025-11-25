// src/pages/Usuario.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Usuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  const buscarUsuarios = async () => {
    try {
      // Rota de login no seu back-end Supabase
      const response = await api.get('/usuario');
      const dados = response.data?.mensagem || [];
      setUsuarios(dados)
    } catch (error) {
      console.error("Erro ao buscar usuário", error);
      alert("Falha ao buscar usuário.");
    }
  };

  useEffect(() => {
    buscarUsuarios();
  },[])

  return (
    <div>
      <h1>Lista de Usuários</h1>
      {usuarios.map(usuario => (
        <p>
          Nome: {usuario.nome}
        </p>
      ))}
    </div>
  );
};

export default Usuario;