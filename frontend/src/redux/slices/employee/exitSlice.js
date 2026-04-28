import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requestStatus: 'Not Started', // Not Started, In Progress, Completed
  resignationDate: null,
  lastWorkingDay: null,
  steps: [
    { id: 1, name: 'Resignation Submission', status: 'Pending' },
    { id: 2, name: 'Manager Approval', status: 'Pending' },
    { id: 3, name: 'IT Clearance', status: 'Pending' },
    { id: 4, name: 'Finance Clearance', status: 'Pending' },
    { id: 5, name: 'Final Settlement', status: 'Pending' }
  ],
  loading: false,
  error: null,
};

const exitSlice = createSlice({
  name: 'exit',
  initialState,
  reducers: {
    startExitProcess: (state, action) => {
      state.requestStatus = 'In Progress';
      state.resignationDate = action.payload.resignationDate;
      state.lastWorkingDay = action.payload.lastWorkingDay;
      state.steps[0].status = 'Completed';
    },
    updateStepStatus: (state, action) => {
      const step = state.steps.find(s => s.id === action.payload.id);
      if (step) {
        step.status = action.payload.status;
      }
    }
  },
});

export const { startExitProcess, updateStepStatus } = exitSlice.actions;
export default exitSlice.reducer;
