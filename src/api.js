import axios from 'axios';
const BASE_URL = 'https://api.jsonbin.io/v3/b';

export default axios.create({
  baseURL: BASE_URL,
});
