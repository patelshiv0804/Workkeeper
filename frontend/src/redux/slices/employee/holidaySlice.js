import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  holidays: [
    { id: 1, name: 'New Year Day', date: '2025-01-01', day: 'Wednesday', type: 'Public' },
    { id: 2, name: 'Good Friday', date: '2025-04-18', day: 'Friday', type: 'Public' },
    { id: 3, name: 'Independence Day', date: '2025-07-04', day: 'Friday', type: 'Public' },
    { id: 4, name: 'Labor Day', date: '2025-09-01', day: 'Monday', type: 'Public' },
    { id: 5, name: 'Thanksgiving', date: '2025-11-27', day: 'Thursday', type: 'Public' },
    { id: 6, name: 'Christmas', date: '2025-12-25', day: 'Thursday', type: 'Public' }
  ],
  loading: false,
  error: null,
};

const holidaySlice = createSlice({
  name: 'holiday',
  initialState,
  reducers: {
    setHolidays: (state, action) => {
      state.holidays = action.payload;
    }
  },
});

export const { setHolidays } = holidaySlice.actions;
export default holidaySlice.reducer;
