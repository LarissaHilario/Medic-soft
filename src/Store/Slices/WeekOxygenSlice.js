import { createSlice } from '@reduxjs/toolkit';

export const OxygenWeeklySlice = createSlice({
  name: 'oxygenWeekly',
  initialState: {
    oxygenWeekly:[],
  },
  reducers: {
    addData: (state, action) => {
      state.oxygenWeekly = action.payload
    },
    cleanOxygen: state => {
      state.oxygenWeekly = [];
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { addData, cleanOxygen } = OxygenWeeklySlice.actions;