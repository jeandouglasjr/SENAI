// src/services/api.js
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Se receber 401 (Não Autorizado) ou 403 (Proibido), pode ser token expirado
    if (error.response && [401, 403].includes(error.response.status)) {
      console.error("Sessão expirada. Redirecionando para login...");
      navigate("/login");

      // Você pode forçar o logout e redirecionar aqui
      // localStorage.removeItem('userToken');
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
