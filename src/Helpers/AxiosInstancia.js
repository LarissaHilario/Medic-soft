import axios from 'axios';

export const axiosInstancia = axios.create({
  baseURL: 'http://18.189.196.21:8000/',
  headers: {
    'Content-type': 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem('token')}`
  },
});