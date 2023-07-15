import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Historial from '../Pages/Historial';
import Register from '../Pages/Register';
import Reports from '../Pages/Reports';
import Home from '../Pages/Home';
import Viewer from '../components/PDF/Viewer';
import { login } from '../Store/Slices/authSlice';
import { chargingUsers } from '../Store/Thunk/userThunk';
import { chargingData } from '../Store/Thunk/lastDataThunk';
import { chargingAllData } from '../Store/Thunk/AllDataThunk';
import { chargingWeelyTemp } from '../Store/Thunk/WeekTemperatureThunk';
import { chargingOxygenWeekly } from '../Store/Thunk/WeeklyOxygenThunk';
import { chargingWeeklyPulse } from '../Store/Thunk/WeeklyPulseThunk';

const DashBoardRoutes = () => {
  const token = localStorage.getItem('token');
  const user = useSelector((state) => state.user);
  const lastData = useSelector((state) => state.lastData);
  const allData=useSelector((state)=>state.allData)
  const weeklyTemp=useSelector((state)=>state.weeklyTemp)
  const oxygenWeekly= useSelector((state)=> state.oxygenWeekly)
  const weeklyPulse= useSelector((state) => state.weeklyPulse)
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(chargingUsers());
        await dispatch(chargingData());
        await dispatch(chargingAllData());
        await dispatch(chargingWeelyTemp());
        await dispatch(chargingWeeklyPulse())
        await dispatch(chargingOxygenWeekly())
        
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
    dispatch(login({ token, isAuthenticated: true }));
  }, [dispatch]);

  if (isLoading) {
    return <div>Cargando...</div>; // Puedes mostrar un indicador de carga mientras se obtienen los datos
  }

  return (
    <>
      <Routes>
        <Route path='/historial' element={<Historial />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/informes' element={<Reports />} />
        <Route path='/dashboard' element={<Home />} />
        <Route path='/document' element={<Viewer />} />
        <Route path='/*' element={<Navigate to={('/dashboard')} />} />
      </Routes>
    </>
  );
};

export default DashBoardRoutes;
