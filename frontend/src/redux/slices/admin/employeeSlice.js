import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [
    {
      id: 'WK-1024',
      name: 'Michael Chen',
      avatar: 'MC',
      avatarColor: '#FDBA74',
      department: 'Engineering',
      designation: 'Senior Frontend Dev',
      email: 'm.chen@workkeeper.io',
      status: 'Active',
      role: 'Member'
    },
    {
      id: 'WK-1025',
      name: 'Sarah Jenkins',
      avatar: 'SJ',
      avatarColor: '#FDE68A',
      department: 'Product',
      designation: 'Product Manager',
      email: 's.jenkins@workkeeper.io',
      status: 'Probation',
      role: 'Lead'
    },
    {
      id: 'WK-1012',
      name: 'David Wilson',
      avatar: 'DW',
      avatarColor: '#A7F3D0',
      department: 'Marketing',
      designation: 'SEO Strategist',
      email: 'd.wilson@workkeeper.io',
      status: 'Inactive',
      role: 'Member'
    }
  ],
  filters: {
    search: '',
    department: 'All',
    status: 'All',
    role: 'All'
  },
  loading: false,
  error: null,
};

const adminEmployeeSlice = createSlice({
  name: 'adminEmployee',
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    updateEmployee: (state, action) => {
      const index = state.employees.findIndex(e => e.id === action.payload.id);
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(e => e.id !== action.payload);
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    }
  },
});

export const { setEmployees, addEmployee, updateEmployee, deleteEmployee, setFilters } = adminEmployeeSlice.actions;
export default adminEmployeeSlice.reducer;
