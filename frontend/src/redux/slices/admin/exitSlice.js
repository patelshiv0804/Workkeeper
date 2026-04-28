import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exitRequests: [
    { id: 1, employeeName: 'David Wilson', resignationDate: '2025-10-20', lastWorkingDate: '2025-11-20', reason: 'Career growth', status: 'Pending Clearance' },
  ],
  loading: false,
  error: null,
};

const adminExitSlice = createSlice({
  name: 'adminExit',
  initialState,
  reducers: {
    updateExitStatus: (state, action) => {
      const { id, status } = action.payload;
      const request = state.exitRequests.find(r => r.id === id);
      if (request) request.status = status;
    }
  },
});

export const { updateExitStatus } = adminExitSlice.actions;
export default adminExitSlice.reducer;
