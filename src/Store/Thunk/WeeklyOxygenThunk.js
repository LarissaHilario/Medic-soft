import axios from 'axios';
import { addData } from '../Slices/WeekOxygenSlice';





export const chargingOxygenWeekly = ()=> {
    return async dispatch => {
      axios.get('https://apipython.ddns.net/oxygensemanal',{
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then(({ data }) => {
         
          dispatch(  
            addData({
                oxygenWeekly:data.oxygen
            })
            )
          })
        .catch(err => {
          console.log(err);
        });
    };
  };