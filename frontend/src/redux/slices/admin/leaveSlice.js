import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  leaveRequests: [
    {
      id: 1,
      name: 'Sarah Jenkins',
      designation: 'UI Designer',
      avatar: 'SJ',
      avatarColor: '#FDBA74',
      type: 'Sick Leave',
      dateRange: 'Oct 12 - Oct 14, 2023',
      duration: '3 Days',
      reason: 'Severe flu and fever symptoms',
      appliedOn: 'Oct 10, 2023',
      status: 'Pending'
    },
    {
      id: 2,
      name: 'Michael Chen',
      designation: 'Frontend Developer',
      avatar: 'MC',
      avatarColor: '#93C5FD',
      type: 'Annual Leave',
      dateRange: 'Dec 20 - Jan 02, 2024',
      duration: '14 Days',
      reason: 'End of year family vacation',
      appliedOn: 'Oct 05, 2023',
      status: 'Approved'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      designation: 'Marketing Lead',
      avatar: 'ER',
      avatarColor: '#FCA5A5',
      type: 'Maternity Leave',
      dateRange: 'Nov 01 - Feb 01, 2024',
      duration: '90 Days',
      reason: 'Maternity and postpartum care',
      appliedOn: 'Sep 28, 2023',
      status: 'Rejected'
    }
  ],
  pendingCount: 1,
  loading: false,
  error: null,
};

const adminLeaveSlice = createSlice({
  name: 'adminLeave',
  initialState,
  reducers: {
    updateLeaveStatus: (state, action) => {
      const { id, status } = action.payload;
      const request = state.leaveRequests.find(r => r.id === id);
      if (request) {
        request.status = status;
        state.pendingCount = state.leaveRequests.filter(r => r.status === 'Pending').length;
      }
    }
  },
});

export const { updateLeaveStatus } = adminLeaveSlice.actions;
export default adminLeaveSlice.reducer;
