import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  holidays: [
    { id: 1, name: 'New Year Day', date: '2026-01-01', type: 'Public' },
    { id: 2, name: 'Independence Day', date: '2025-08-15', type: 'Public' },
    { id: 3, name: 'Christmas Day', date: '2025-12-25', type: 'Public' },
  ],
  loading: false,
  error: null,
};

const adminHolidaySlice = createSlice({
  name: 'adminHoliday',
  initialState,
  reducers: {
    addHoliday: (state, action) => {
      state.holidays.push(action.payload);
    },
    removeHoliday: (state, action) => {
      state.holidays = state.holidays.filter(h => h.id !== action.payload);
    }
  },
});

export const { addHoliday, removeHoliday } = adminHolidaySlice.actions;
export default adminHolidaySlice.reducer;
