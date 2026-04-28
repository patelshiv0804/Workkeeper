import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dashboardStats: {
    revenue: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
    attendanceTrend: [95, 92, 94, 91, 93, 90, 92],
    departmentDistribution: [
      { name: 'Engineering', value: 40 },
      { name: 'Design', value: 20 },
      { name: 'Product', value: 15 },
      { name: 'Marketing', value: 25 },
    ]
  },
  reportHistory: [],
  loading: false,
  error: null,
};

const adminReportSlice = createSlice({
  name: 'adminReport',
  initialState,
  reducers: {
    setReportData: (state, action) => {
      state.dashboardStats = action.payload;
    }
  },
});

export const { setReportData } = adminReportSlice.actions;
export default adminReportSlice.reducer;
