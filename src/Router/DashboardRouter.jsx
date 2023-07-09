import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';


import Historial from '../Pages/Historial';
import Register from '../Pages/Register';
import Reports from '../Pages/Reports';
import Home from '../Pages/Home';
import Viewer from '../components/PDF/Viewer';
import { login } from '../Store/Slices/authSlice'

const DashBoardRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(login({token, isAuthenticathed: true}));
  },[]);
  const token = localStorage.getItem('token');
  return (
    <>
      <Routes>
        <Route path='/historial' element={<Historial/>}/>
        <Route path='/registro' element={<Register/>}/>
        <Route path='/informes' element={<Reports/>}/>
        <Route path='/dashboard' element={<Home/>}/>
        <Route path='/document' element={ <Viewer/>}/>
        <Route
          path='/*'
          element={<Navigate to={('/dashboard')} />}
        />
      </Routes>
    </>
  );
};

export default DashBoardRoutes;