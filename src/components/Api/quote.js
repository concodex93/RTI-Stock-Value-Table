import axios from 'axios';

const API_KEY = process.env.REACT_APP_QUOTE_API_KEY;

const createAxios = (action, symbol) => {
  return axios.create({
    baseURL: `https://finnhub.io/api/v1/${action}?symbol=${symbol}&token=${API_KEY}`
  });
};

export default createAxios;
