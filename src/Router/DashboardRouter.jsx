import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import Historial from '../Pages/Historial';
import Register from '../Pages/Register';
import Reports from '../Pages/Reports';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import MyDocument from '../components/PDF/Document';
import Viewer from '../components/PDF/Viewer';





const DashBoardRoutes = () => {

  
  return (
    <>
      <Routes>
        <Route path='/historial' element={<Historial/>}/>
        <Route path='/registro' element={<Register/>}/>
        <Route path='/informes' element={<Reports/>}/>
        <Route path='/crearCuenta' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Home/>}/>
        <Route path='/document' element={ <Viewer/>}/>
       

        

       
      </Routes>
    
    </>
  );
};

export default DashBoardRoutes;