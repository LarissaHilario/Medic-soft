import axios from 'axios';
import { addData } from '../Slices/lastData';




export const chargingData = ()=> {
    return async dispatch => {
      axios.get('http://18.189.196.21:8000/last',{
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('data', data.temperature.value)
          dispatch(
            addData({
              lastData:{
                temperature: data.temperature.value,
                oxygen: data.oxygen.value,
                pulse: data.pulse.value
              }
            })
            )
          })
        .catch(err => {
          console.log(err);
        });
    };
  };
