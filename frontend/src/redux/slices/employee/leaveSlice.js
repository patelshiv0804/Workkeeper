import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balances: [
    { type: 'Annual Leave', total: 24, used: 12, available: 12, color: '#4F46E5' },
    { type: 'Sick Leave', total: 12, used: 4, available: 8, color: '#10B981' },
    { type: 'Casual Leave', total: 8, used: 2, available: 6, color: '#F59E0B' },
    { type: 'Maternity Leave', total: 90, used: 0, available: 90, color: '#EC4899' }
  ],
  history: [
    { id: 1, type: 'Annual Leave', startDate: '2025-11-10', endDate: '2025-11-15', days: 5, status: 'Approved' },
    { id: 2, type: 'Sick Leave', startDate: '2025-10-05', endDate: '2025-10-05', days: 1, status: 'Approved' }
  ],
  loading: false,
  error: null,
};

const leaveSlice = createSlice({
  name: 'leave',
  initialState,
  reducers: {
    applyLeave: (state, action) => {
      state.history.unshift({ ...action.payload, id: Date.now(), status: 'Pending' });
    },
    updateBalances: (state, action) => {
      state.balances = action.payload;
    }
  },
});

export const { applyLeave, updateBalances } = leaveSlice.actions;
export default leaveSlice.reducer;
