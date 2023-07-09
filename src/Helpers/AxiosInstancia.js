import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://192.168.100.195:8000/',
  headers: {
    'Content-type': 'application/json',
    Authorization : `Bearer ${localStorage.getItem('token')}`
  },
});