// src/services/api.js
import axios from 'axios';

// ⚠️ Mude esta URL para a URL da sua API no Supabase
const API_URL = "http://localhost:3000"; 

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepta todas as requisições antes de serem enviadas
api.interceptors.request.use(
  (config) => {
    // Pega o token do localStorage ou do seu Auth Context
    const token = localStorage.getItem('token'); 
    
    // Se o token existir, adiciona-o ao cabeçalho Authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;