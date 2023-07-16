import { createSlice } from '@reduxjs/toolkit';

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    statistics:[],
  },
  reducers: {
    addStat: (state, action) => {
      state.statistics = action.payload
    },
    cleanStat: state => {
      state.statistics = [];
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { addStat, cleanStat } = statisticsSlice.actions;