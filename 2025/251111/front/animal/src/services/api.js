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
    // 💡 Mantenha a consistência com a chave de armazenamento 'userToken'
    const token = localStorage.getItem('userToken'); 
    
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