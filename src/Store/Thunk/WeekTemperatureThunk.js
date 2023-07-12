import axios from 'axios';


import {axiosInstancia} from '../../Helpers/AxiosInstancia'
import { addTemp } from '../Slices/WeeksTemperatureSlice';


export const chargingWeelyTemp = ()=> {
    return async dispatch => {
      axiosInstancia
      .get('tempsemanal',{
      })
        .then(({ data }) => {
          console.log(data.temperatures)
          dispatch(
            addTemp({
              weeklyTemp:data.temperatures,
            })
            )
          })
        .catch(err => {
          console.log(err);
        });
    };
  };
