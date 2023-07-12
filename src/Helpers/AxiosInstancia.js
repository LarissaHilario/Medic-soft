import axios from 'axios';

export const axiosInstancia = axios.create({
  baseURL: 'http://18.216.166.70:8000/',
  headers: {
    'Content-type': 'application/json',
     'Authorization' : `Bearer ${localStorage.getItem('token')}`
  },
});