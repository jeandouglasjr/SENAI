import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character";

// Busca personagens por nome
export const searchCharacter = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: { name: query },
  });
  return response.data;
};

// Busca personagem específico por ID
export const getCharacterById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};
