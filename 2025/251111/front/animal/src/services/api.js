// src/services/api.js
import axios from "axios";

// 1. Defina a URL base do seu Back-end
const API_URL = "http://localhost:3000"; // 💡 SUBSTITUA pela URL correta do seu Back-end

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. Interceptador de Requisição (Este é o ponto chave!)
// Ele injeta o token JWT em cada requisição ANTES dela ser enviada.
api.interceptors.request.use(
  (config) => {
    // Tenta obter o token do localStorage
    const token = localStorage.getItem("userToken");

    // Se o token existir, anexa ele ao cabeçalho Authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. Interceptador de Resposta (Opcional, mas útil para tratar 401/403)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Se receber 401 (Não Autorizado) ou 403 (Proibido), pode ser token expirado
    if (error.response && [401, 403].includes(error.response.status)) {
      console.error("Sessão expirada. Redirecionando para login...");
      // Você pode forçar o logout e redirecionar aqui
      // localStorage.removeItem('userToken');
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
