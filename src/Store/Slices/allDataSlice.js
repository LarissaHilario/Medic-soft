import { createSlice } from '@reduxjs/toolkit';

export const allDataSlice = createSlice({
  name: 'allData',
  initialState: {
    allData:null,
  },
  reducers: {
    addData: (state, action) => {
      state.allData = action.payload
    },
    cleanAllData: state => {
      state.allData = null;
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { addData, cleanAllData } = allDataSlice.actions;