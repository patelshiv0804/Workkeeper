import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todayPresence: {
    status: 'Checked In',
    checkInTime: '09:05 AM',
    checkOutTime: null,
    workingHours: '05h 45m',
    location: 'Office - HQ Bangalore'
  },
  todaySummary: {
    checkIn: '09:05 AM',
    checkOut: null,
    totalHours: '05h 45m',
    location: 'HQ Office, Floor 4'
  },
  records: [
    { id: 1, date: 'Oct 26, 2025', day: 'Thursday', inTime: '09:05 AM', outTime: '06:15 PM', location: 'Office', source: 'Web App', status: 'Present' },
    { id: 2, date: 'Oct 25, 2025', day: 'Wednesday', inTime: '08:58 AM', outTime: '05:45 PM', location: 'Work From Home', source: 'Mobile App', status: 'WFH' },
    { id: 3, date: 'Oct 24, 2025', day: 'Tuesday', inTime: '09:12 AM', outTime: '06:05 PM', location: 'Office', source: 'Web App', status: 'Present' },
    { id: 4, date: 'Oct 23, 2025', day: 'Monday', inTime: '09:00 AM', outTime: '06:00 PM', location: 'Office', source: 'Biometric', status: 'Present' },
    { id: 5, date: 'Oct 22, 2025', day: 'Sunday', inTime: '-- : --', outTime: '-- : --', location: '--', source: '--', status: 'Weekly Off' },
  ],
  loading: false,
  error: null,
};

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    addRecord: (state, action) => {
      state.records.unshift({ ...action.payload, id: Date.now() });
    },
    updateTodaySummary: (state, action) => {
      state.todaySummary = { ...state.todaySummary, ...action.payload };
      state.todayPresence = { ...state.todayPresence, ...action.payload };
    }
  },
});

export const { addRecord, updateTodaySummary } = attendanceSlice.actions;
export default attendanceSlice.reducer;
