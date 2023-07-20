import axios from 'axios';
import { addData } from '../Slices/lastData';




export const chargingData = ()=> {
    return async dispatch => {
      axios.get('https://apipython.ddns.net/last',{
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then(({ data }) => {
          console.log(data)
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
