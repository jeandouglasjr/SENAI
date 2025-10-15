import axios from "axios";

const BASE_URL = "https://api.cartola.globo.com/clubes";

export const searchTimes = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: { s: query },
  });
  return response.data;
};

export const getTimeDetails = async (id) => {
  const response = await axios.get(BASE_URL, {
    params: { i: id },
  });
  return response.data;
};
