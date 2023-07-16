import axios from 'axios';
import { addStat } from '../Slices/statiticsSlice';


export const chargingStatistics= ()=> {
    return async dispatch => {
      axios.get('http://18.189.196.21:8000/statistics',{
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }})
        .then(({ data }) => {
          console.log(data)
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
