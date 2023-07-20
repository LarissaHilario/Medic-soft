import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashBoardRoutes from "./DashboardRouter";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import PublicRoutes from "./PublicRoutes";
import { useSelector } from "react-redux";

import { useEffect } from "react";
import PrivateRoutes from "./PrivateRouter";

const AppRouter = () => {

  const authState = useSelector(state => state.authState);
  useEffect(() => {}, [authState]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login/>
            </PublicRoutes>
          }
        />
        <Route
          path="/CrearCuenta"
          element={
            <PublicRoutes>
              <SignUp />
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes>
               <DashBoardRoutes/>
            </PrivateRoutes>
             
            
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
