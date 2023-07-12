import { createSlice } from '@reduxjs/toolkit';

export const weeklyTempSlice = createSlice({
  name: 'weeklyTemp',
  initialState: {
    weeklyTemp:null,
  },
  reducers: {
    addTemp: (state, action) => {
      state.weeklyTemp = action.payload.data
    },
    cleanTemp: state => {
      state.weeklyTemp = null;
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { addTemp, cleanTemp } = weeklyTempSlice.actions;