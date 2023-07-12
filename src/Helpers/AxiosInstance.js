import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://3.133.101.116:9000/',
  headers: {
    'Content-type': 'application/json',
    Authorization : `Bearer ${localStorage.getItem('token')}`
  },
});
