import { Navigate, Route, Routes } from 'react-router-dom';

import Historial from '../Pages/Historial';
import Register from '../Pages/Register';
import Reports from '../Pages/Reports';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';
import Login from '../Pages/Login';



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
        

       
      </Routes>
    
    </>
  );
};

export default DashBoardRoutes;