import { configureStore } from '@reduxjs/toolkit';


import { authSlice } from './Slices/authSlice';



export const store = configureStore({
  reducer: {
    authState: authSlice.reducer
  },
});
