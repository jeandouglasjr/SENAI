import axios from "axios";

const BASE_URL_PERSONAGENS = "https://swapi.dev/api/people/";
const BASE_URL_PLANETAS = "https://swapi.dev/api/planets/";
const BASE_URL_FILMES = "https://swapi.dev/api/films/";

// Busca personagens
export const getPersonagens = async (query) => {
    const response = await axios.get(BASE_URL_PERSONAGENS, {
        params: { name: query },
    });
    return response.data;
};

export const getPlanetas = async (query) => {
    const response = await axios.get(BASE_URL_PLANETAS, {
        params: { name: query },
    });
    return response.data;
};

export const getFilmes = async (query) => {
    const response = await axios.get(BASE_URL_FILMES, {
        params: { name: query },
    });
    return response.data;
};

export const getPersonagensById = async (id) => {
    const response = await axios.get(`${BASE_URL_PERSONAGENS}${id}/`);
    return response.data;
}