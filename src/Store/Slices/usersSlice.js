import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'user',
  initialState: {
    user:null,
  },
  reducers: {
    addUsers: (state, action) => {
      state.user = action.payload.user.user;
    },
    cleanUsers: state => {
      state.user = null;
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { addUsers, cleanUsers } = usersSlice.actions;
