import axios from 'axios';

export const axiosInstance = axios.create({

  baseURL: 'http://3.21.229.220:9000/',
  headers: {
    'Content-type': 'application/json',
    Authorization : `Bearer ${localStorage.getItem('token')}`
  },
});
