import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teams: [
    { id: 1, name: 'Frontend Team', department: 'Engineering', lead: 'Sarah Jenkins', members: 12 },
    { id: 2, name: 'Backend Team', department: 'Engineering', lead: 'Michael Chen', members: 15 },
    { id: 3, name: 'UI/UX Team', department: 'Design', lead: 'Elena Gilbert', members: 8 },
  ],
  departments: ['Engineering', 'Design', 'Product', 'Marketing', 'Sales', 'HR'],
  loading: false,
  error: null,
};

const adminTeamSlice = createSlice({
  name: 'adminTeam',
  initialState,
  reducers: {
    addTeam: (state, action) => {
      state.teams.push(action.payload);
    },
    updateTeam: (state, action) => {
      const index = state.teams.findIndex(t => t.id === action.payload.id);
      if (index !== -1) state.teams[index] = action.payload;
    }
  },
});

export const { addTeam, updateTeam } = adminTeamSlice.actions;
export default adminTeamSlice.reducer;
