import axios from 'axios';
import { addData } from '../Slices/WeekOxygenSlice';





export const chargingOxygenWeekly = ()=> {
    return async dispatch => {
      axios.get('http://18.189.196.21:8000/oxygensemanal',{
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then(({ data }) => {
          console.log(data)
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