import axios from 'axios';
import { axiosInstancia } from '../../Helpers/AxiosInstancia';

import { addTemp } from '../Slices/WeeksTemperatureSlice';


export const chargingWeelyTemp = ()=> {
    return async dispatch => {
      axios.get('https://apipython.ddns.net/tempsemanal',{
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }})
        .then(({ data }) => {
          
          dispatch(
            addTemp(
              { weeklyTemp: data.temperatures }))
          })
        .catch(err => {
          console.log(err);
        });
    };
  };
