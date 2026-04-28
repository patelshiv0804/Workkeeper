import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adminUser: {
    id: 'ADM-001',
    name: 'Super Admin',
    role: 'Administrator',
    email: 'admin@workkeeper.io',
    avatar: 'SA'
  },
  isAuthenticated: true, // Mocked as true for demonstration
  loading: false,
  error: null,
};

const adminAuthSlice = createSlice({
  name: 'adminAuth',
  initialState,
  reducers: {
    setAdminUser: (state, action) => {
      state.adminUser = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    logoutAdmin: (state) => {
      state.adminUser = null;
      state.isAuthenticated = false;
    }
  },
});

export const { setAdminUser, logoutAdmin } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
