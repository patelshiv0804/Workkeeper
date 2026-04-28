import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  broadcasts: [
    { id: 1, title: 'Annual General Meeting', message: 'All staff are required to attend.', date: '2025-11-01', target: 'All' },
    { id: 2, title: 'Office Maintenance', message: 'The HQ office will be closed on Saturday.', date: '2025-10-28', target: 'HQ Branch' },
  ],
  adminLogs: [],
  loading: false,
  error: null,
};

const adminNotificationSlice = createSlice({
  name: 'adminNotification',
  initialState,
  reducers: {
    addBroadcast: (state, action) => {
      state.broadcasts.unshift({ ...action.payload, id: Date.now() });
    },
    deleteBroadcast: (state, action) => {
      state.broadcasts = state.broadcasts.filter(b => b.id !== action.payload);
    }
  },
});

export const { addBroadcast, deleteBroadcast } = adminNotificationSlice.actions;
export default adminNotificationSlice.reducer;
