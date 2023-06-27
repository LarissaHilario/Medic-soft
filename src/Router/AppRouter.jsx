
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashBoardRoutes from './DashboardRouter';


const AppRouter = () => {


  return (
    <BrowserRouter>
      <Routes>
       
        <Route
          path='/*'
          element={
           
              <DashBoardRoutes />
            
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;