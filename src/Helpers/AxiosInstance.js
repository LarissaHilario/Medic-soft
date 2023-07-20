import axios from 'axios';

export const axiosInstance = axios.create({

  baseURL: 'https://apilogin.ddns.net/',
  headers: {
    'Content-type': 'application/json',
    Authorization : `Bearer ${localStorage.getItem('token')}`
  },
});
