import axios from 'axios';

const client = axios.create({
  baseURL: process.env.API_BASE_URL || 'https://6033c4d8843b15001793194e.mockapi.io/api',
  timeout: parseInt(process.env.API_TIMEOUT || '2000', 10),
});

export default client;
