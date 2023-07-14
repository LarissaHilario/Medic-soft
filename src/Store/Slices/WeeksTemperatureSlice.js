import { createSlice } from '@reduxjs/toolkit';

export const weeklyTempSlice = createSlice({
  name: 'weeklyTemp',
  initialState: {
    weeklyTemp:[],
  },
  reducers: {
    addTemp: (state, action) => {
      state.weeklyTemp = action.payload
    },
    cleanTemp: state => {
      state.weeklyTemp = [];
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { addTemp, cleanTemp } = weeklyTempSlice.actions;