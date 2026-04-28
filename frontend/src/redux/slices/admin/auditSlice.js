import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logs: [
    { id: 1, adminName: 'Super Admin', action: 'Created Employee WK-1025', timestamp: '2025-10-26 10:30 AM', ip: '192.168.1.1' },
    { id: 2, adminName: 'HR Lead', action: 'Approved Leave Request #442', timestamp: '2025-10-26 11:15 AM', ip: '192.168.1.5' },
  ],
  loading: false,
  error: null,
};

const adminAuditSlice = createSlice({
  name: 'adminAudit',
  initialState,
  reducers: {
    addLog: (state, action) => {
      state.logs.unshift({ ...action.payload, id: Date.now() });
    }
  },
});

export const { addLog } = adminAuditSlice.actions;
export default adminAuditSlice.reducer;
