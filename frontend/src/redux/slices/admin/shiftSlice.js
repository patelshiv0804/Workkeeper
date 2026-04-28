import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shifts: [
    { id: 1, name: 'Morning Shift', startTime: '09:00 AM', endTime: '06:00 PM', gracePeriod: '15 mins' },
    { id: 2, name: 'Evening Shift', startTime: '02:00 PM', endTime: '11:00 PM', gracePeriod: '15 mins' },
    { id: 3, name: 'Night Shift', startTime: '10:00 PM', endTime: '07:00 AM', gracePeriod: '15 mins' },
  ],
  assignments: [],
  loading: false,
  error: null,
};

const adminShiftSlice = createSlice({
  name: 'adminShift',
  initialState,
  reducers: {
    addShift: (state, action) => {
      state.shifts.push(action.payload);
    },
    updateShift: (state, action) => {
      const index = state.shifts.findIndex(s => s.id === action.payload.id);
      if (index !== -1) state.shifts[index] = action.payload;
    },
    assignShift: (state, action) => {
      state.assignments.push(action.payload);
    }
  },
});

export const { addShift, updateShift, assignShift } = adminShiftSlice.actions;
export default adminShiftSlice.reducer;
