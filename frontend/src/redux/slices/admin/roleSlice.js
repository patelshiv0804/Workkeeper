import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roles: [
    { id: 1, name: 'Admin', description: 'Full system access', userCount: 5 },
    { id: 2, name: 'HR Manager', description: 'Employee and leave management', userCount: 12 },
    { id: 3, name: 'Team Lead', description: 'Team attendance and reports', userCount: 24 },
    { id: 4, name: 'Employee', description: 'Basic self-service access', userCount: 156 },
  ],
  permissions: {
    dashboard: ['view'],
    employees: ['view', 'create', 'edit', 'delete'],
    attendance: ['view', 'edit'],
    leaves: ['view', 'approve'],
    settings: ['view', 'edit']
  },
  loading: false,
  error: null,
};

const adminRoleSlice = createSlice({
  name: 'adminRole',
  initialState,
  reducers: {
    updateRolePermissions: (state, action) => {
      // Logic for updating role-permission mapping
    }
  },
});

export const { updateRolePermissions } = adminRoleSlice.actions;
export default adminRoleSlice.reducer;
