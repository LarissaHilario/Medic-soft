import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './Slices/authSlice';
import { usersSlice } from './Slices/usersSlice';
import { lastDataSlice } from './Slices/lastData';
import { allDataSlice } from './Slices/allDataSlice';
import { weeklyTempSlice } from './Slices/WeeksTemperatureSlice';
import { OxygenWeeklySlice } from './Slices/WeekOxygenSlice';
import { weeklyPulseSlice } from './Slices/WeekPulseSlice';
import { historySlice } from './Slices/HistorySlice';


export const store = configureStore({
  reducer: {
    authState: authSlice.reducer,
    user: usersSlice.reducer,
    lastData: lastDataSlice.reducer,
    weeklyPulse: weeklyPulseSlice.reducer,
    allData: allDataSlice.reducer,
    weeklyTemps: weeklyTempSlice.reducer,
    oxygenWeekly: OxygenWeeklySlice.reducer,
    history: historySlice.reducer
  },
});
