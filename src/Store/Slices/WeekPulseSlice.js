import { createSlice } from "@reduxjs/toolkit";

export const weeklyPulseSlice = createSlice({
    name: 'weeklyPulse',
    initialState: {
      weeklypulse:[],
    },
    reducers: {
      addPulse: (state, action) => {
        state.weeklypulse = action.payload
      },
      cleanPulse: state => {
        state.weeklypulse = []
      },
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { addPulse, cleanPulse } = weeklyPulseSlice.actions;