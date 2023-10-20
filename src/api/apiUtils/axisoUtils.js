import axios from 'axios';

export const mainAxios = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' }
});