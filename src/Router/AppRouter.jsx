
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashBoardRoutes from './DashboardRouter';
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';
import PublicRoutes from './PublicRoutes';
//import PrivateRoutes from './PrivateRouter';


const AppRouter = () => {


  return (
    <BrowserRouter>
      <Routes>
       
      {}
        <Route
          path='/login'
          element={
            <PublicRoutes>
              <Login/>
            
            </PublicRoutes>
          }
        />
         <Route
          path='/CrearCuenta'
          element={
            <PublicRoutes>
              <SignUp/>
            </PublicRoutes>
          }
        />
        <Route
          path='/*'
          element={
               <PublicRoutes>
                <DashBoardRoutes />
               </PublicRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;