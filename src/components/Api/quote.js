import axios from 'axios';

const API_KEY1 = process.env.REACT_APP_QUOTE_API_KEY1;
const API_KEY2 = process.env.REACT_APP_QUOTE_API_KEY2;

const createAxios = (action, symbol) => {
  if (action === 'SYMBOL_SEARCH') {
    return axios.create({
      baseURL: `https://www.alphavantage.co/query?function=${action}&keywords=${symbol}&apikey=${API_KEY2}`
    });
  } else if (action === 'TIME_SERIES_DAILY') {
    return axios.create({
      baseURL: `https://www.alphavantage.co/query?function=${action}&symbol=${symbol}&apikey=${API_KEY2}`
    });
  } else if (action === 'quote') {
    return axios.create({
      baseURL: `https://finnhub.io/api/v1/${action}?symbol=${symbol}&token=${API_KEY1}`
    });
  } else if (action === 'earnings') {
    return axios.create({
      baseURL: `https://finnhub.io/api/v1/stock/${action}?symbol=${symbol}&token=${API_KEY1}`
    });
  }
};

export default createAxios;
