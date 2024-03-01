import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false, user: '' },
  reducers: {
    logIn(state: any, payload) {
      state.isLoggedIn = true;
      state.user = payload.payload;
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.user = '';
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice;
