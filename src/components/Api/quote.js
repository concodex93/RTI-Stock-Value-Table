import axios from 'axios';

const API_KEY = process.env.REACT_APP_QUOTE_API_KEY;
const symbol = 'WDAY';

console.log(API_KEY);

export default axios.create({
  baseURL: `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
});
