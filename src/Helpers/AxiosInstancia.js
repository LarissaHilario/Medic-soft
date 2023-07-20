import axios from 'axios';

export const axiosInstancia = axios.create({
  baseURL: 'https://apipython.ddns.net/',
  headers: {
    'Content-type': 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem('token')}`
  },
});