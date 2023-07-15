import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    history:[],
  },
  reducers: {
    addData: (state, action) => {
      state.history = action.payload
    },
    cleanHistory: state => {
      state.history = [];
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { addData, cleanHistory } = historySlice.actions;