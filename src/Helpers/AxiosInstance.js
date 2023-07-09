import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://192.168.100.195:9000/',
  headers: {
    'Content-type': 'application/json',
  },
});
