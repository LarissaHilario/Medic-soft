import axios from 'axios';

import { addPulse } from '../Slices/WeekPulseSlice';


export const chargingWeeklyPulse = ()=> {
    return async dispatch => {
      axios.get('https://apipython.ddns.net/pulsesemanal',{
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }})
        .then(({ data }) => {
          console.log(data.pulses)
          dispatch(
            addPulse(
              { weeklypulse: data.pulses }))
          })
        .catch(err => {
          console.log(err);
        });
    };
  };