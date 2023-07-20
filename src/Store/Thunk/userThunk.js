
import axios from 'axios';
import {  addUsers } from '../Slices/usersSlice';




export const chargingUsers = ()=> {
    return async dispatch => {
      axios.get('https://apipython.ddns.net/userdetails',{
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then(({ data }) => {
          localStorage.setItem('nombre', data.user.name);
          localStorage.setItem('apellido', data.user.lastname);
          localStorage.setItem('photo', data.user.photoUrl);
        
          dispatch(
            addUsers({
              user: {
                user:data.user
              },
            })
            )
          })
        .catch(err => {
          console.log(err);
        });
    };
  };


