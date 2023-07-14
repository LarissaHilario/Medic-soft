import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
  name: 'lastData',
  initialState: {
    lastData:null,
  },
  reducers: {
    addData: (state, action) => {
      state.lastData = action.payload
    },
    cleanData: state => {
      state.lastData = null;
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { addData, cleanData } = lastDataSlice.actions;