

import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Historial from '../Pages/Historial';
import Register from '../Pages/Register';
import Informes from '../Pages/Informes';



const DashBoardRoutes = () => {

  
  return (
    <>
      <Routes>
        <Route path='/historial' element={<Historial/>}/>
        <Route path='/registro' element={<Register/>}/>
        <Route path='/informes' element={<Informes/>}/>
       
      </Routes>
    
    </>
  );
};

export default DashBoardRoutes;