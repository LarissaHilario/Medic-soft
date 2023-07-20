import axios from 'axios';
import { addStat } from '../Slices/statiticsSlice';


export const chargingStatistics= ()=> {
    return async dispatch => {
      axios.get('https://apipython.ddns.net/statistics',{
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }})
        .then(({ data }) => {
          
          dispatch(
            addStat(
              { statistics:{ 
                temperature: data.temperature,
              oxygen: data.oxygen,
            pulse:data.pulse }}))
          })
        .catch(err => {
          console.log(err);
        });
    };
  };
