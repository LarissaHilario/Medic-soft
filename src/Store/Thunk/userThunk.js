
import axios from 'axios';
import { axiosInstancia } from '../../Helpers/AxiosInstancia';
import {  addUsers } from '../Slices/usersSlice';




export const chargingUsers = ()=> {
    return async dispatch => {
      axios.get('http://18.216.166.70:8000/userdetails',{
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then(({ data }) => {
          localStorage.setItem('nombre', data.user.name);
          localStorage.setItem('photo', data.user.photoUrl);
          console.log(data)
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


