import axios from 'axios';
import { addData } from '../Slices/allDataSlice';



export const chargingAllData = ()=> {
  return async dispatch => {
    axios.get('http://18.216.166.70:8000/total',{
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then(({ data }) => {
        console.log(data)
        localStorage.setItem('data1', data.pulses)
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
