import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';
import ticketSlice from './ticket';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    ticket: ticketSlice.reducer,
  },
});

export default store;
