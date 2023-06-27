

import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Historial from '../Pages/Historial';
import Register from '../Pages/Register';



const DashBoardRoutes = () => {

  
  return (
    <>
      <Routes>
        <Route path='/historial' element={<Historial/>}/>
        <Route path='/registro' element={<Register/>}/>
       
      </Routes>
    
    </>
  );
};

export default DashBoardRoutes;