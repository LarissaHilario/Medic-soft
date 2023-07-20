import axios from 'axios';
import { addData } from '../Slices/allDataSlice';



export const chargingAllData = ()=> {
  return async dispatch => {
    axios.get('https://apipython.ddns.net/total',{
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then(({ data }) => {
        dispatch(
          addData({
            allData:{
              oxygen: data.oxygen,
              pulse: data.pulses,
              temperature:data.temperatures
            }
          })
          )
        })
      .catch(err => {
        console.log(err);
      });
  };
};
