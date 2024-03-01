import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: localStorage.getItem('user-details')
    ? JSON.parse(localStorage.getItem('user-details') || '')
    : { isLoggedIn: false, user: '' },
  reducers: {
    logIn(state: any, payload) {
      state.isLoggedIn = true;
      state.user = payload.payload;
      localStorage.setItem(
        'user-details',
        JSON.stringify({ isLoggedIn: true, user: payload.payload })
      );
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.user = '';
      localStorage.removeItem('user-details');
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice;
