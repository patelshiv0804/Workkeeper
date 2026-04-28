import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    fullName: 'Michael Chen',
    employeeId: 'EMP-1024',
    designation: 'Senior Frontend Developer',
    department: 'Engineering',
    email: 'm.chen@workkeeper.io',
    phone: '+1 (555) 0123',
    joiningDate: 'Jan 15, 2022',
    location: 'San Francisco, CA'
  },
  skills: ['React', 'Redux', 'TypeScript', 'Node.js', 'Vite'],
  education: [
    { degree: 'B.S. in Computer Science', institution: 'Stanford University', year: '2020' }
  ],
  documents: [
    { name: 'Offer Letter', type: 'PDF', date: 'Jan 05, 2022' },
    { name: 'Joining Kit', type: 'PDF', date: 'Jan 15, 2022' }
  ],
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    }
  },
});

export const { updatePersonalInfo, addSkill } = profileSlice.actions;
export default profileSlice.reducer;
