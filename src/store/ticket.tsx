import { createSlice } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    // tickets: [],
    tickets: localStorage.getItem('tickets')
      ? JSON.parse(localStorage.getItem('tickets') || '')
      : [],
  },
  reducers: {
    create(state: any, payload) {
      state.tickets.push(payload.payload);
      localStorage.setItem('tickets', JSON.stringify(state.tickets));
    },
    update(state: any, payload) {
      const prevData = state.tickets.filter(
        (ticket: { id: any }) => ticket.id !== payload.payload.id
      );
      state.tickets = [...prevData, payload.payload];
      localStorage.setItem('tickets', JSON.stringify(state.tickets));
    },
    delete(state: any, payload) {
      state.tickets.filter(
        (ticket: { id: any }) => ticket.id !== payload.payload
      );
    },
  },
});

export const ticketAction = ticketSlice.actions;
export default ticketSlice;
