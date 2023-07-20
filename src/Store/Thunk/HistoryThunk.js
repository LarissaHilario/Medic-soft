import axios from 'axios';
import { addData } from '../Slices/HistorySlice';



export const chargingHistory = ()=> {
    return async dispatch => {
      axios.get('https://apipython.ddns.net/history',{
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then(({ data }) => {
        
          dispatch(
            addData({
                history:data.history
            })
            )
          })
        .catch(err => {
          console.log(err);
        });
    };
  };