import axios from 'axios';
import { addData } from '../Slices/HistorySlice';



export const chargingHistory = ()=> {
    return async dispatch => {
      axios.get('http://18.189.196.21:8000/history',{
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then(({ data }) => {
          console.log(data)
          dispatch(
            addData({
                history:data
            })
            )
          })
        .catch(err => {
          console.log(err);
        });
    };
  };