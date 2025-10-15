import axios from "axios";

const API_KEY = "28d0dee8";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: { s: query, apikey: API_KEY },
  });
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(BASE_URL, {
    params: { i: id, apikey: API_KEY },
  });
  return response.data;
};
