import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  attendanceLogs: [
    {
      id: 1,
      date: '24 Oct, 2025',
      name: 'Sarah Jenkins',
      avatar: 'SJ',
      avatarColor: '#FDBA74',
      department: 'Engineering',
      shift: 'General (9:00 - 18:00)',
      inTime: '08:52 AM',
      outTime: '--:--',
      location: 'Main Office',
      source: 'Biometric',
      status: 'Present'
    },
    {
      id: 2,
      date: '24 Oct, 2025',
      name: 'Michael Chen',
      avatar: 'MC',
      avatarColor: '#FDBA74',
      department: 'Design',
      shift: 'General (9:00 - 18:00)',
      inTime: '09:05 AM',
      outTime: '--:--',
      location: 'Remote',
      source: 'Mobile App',
      status: 'Work From Home'
    },
    {
      id: 3,
      date: '24 Oct, 2025',
      name: 'Emily Rodriguez',
      avatar: 'ER',
      avatarColor: '#FDE68A',
      department: 'Marketing',
      shift: 'General (9:00 - 18:00)',
      inTime: '--:--',
      outTime: '--:--',
      location: '--',
      source: '--',
      status: 'Absent'
    }
  ],
  stats: {
    totalEmployees: 156,
    presentToday: 142,
    onLeave: 8,
    lateArrivals: 6
  },
  filters: {
    dateRange: { start: '', end: '' },
    status: 'All'
  },
  loading: false,
  error: null,
};

const adminAttendanceSlice = createSlice({
  name: 'adminAttendance',
  initialState,
  reducers: {
    updateLog: (state, action) => {
      const index = state.attendanceLogs.findIndex(l => l.id === action.payload.id);
      if (index !== -1) {
        state.attendanceLogs[index] = action.payload;
      }
    },
    setAttendanceFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    }
  },
});

export const { updateLog, setAttendanceFilters } = adminAttendanceSlice.actions;
export default adminAttendanceSlice.reducer;
