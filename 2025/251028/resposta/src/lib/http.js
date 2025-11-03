// Cliente Axios centralizado para a SWAPI.
// Vantagens: 1) baseURL comum, 2) timeout, 3) ponto único p/ headers/interceptores.

import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://swapi.dev/api', // todas as chamadas usarão esse prefixo
  timeout: 15000,
});

// (Opcional) Interceptores para logging/erros globais
// http.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     // Você pode padronizar mensagens de erro aqui se quiser
//     return Promise.reject(err);
//   }
// );
