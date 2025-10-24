import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

// 🔍 Busca país pelo nome ou código (alpha)
export const searchMaps = async (query) => {
  try {
    const endpoint =
      query.length === 3
        ? `${BASE_URL}/alpha/${query}?fields=name,cca3,flags,region,capital,population,languages`
        : `${BASE_URL}/name/${query}?fields=name,cca3,flags,region,capital,population,languages`;

    const response = await axios.get(endpoint);
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    console.error("Erro na busca:", error);
    return [];
  }
};

// 🌍 Carrega todos os países
export const getAllCountries = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/all?fields=name,cca3,flags,region,capital,population,languages`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao carregar países:", error);
    return [];
  }
};
