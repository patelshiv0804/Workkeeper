import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock async thunk for fetching profile
export const fetchUserProfile = createAsyncThunk(
  'auth/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      // For now, returning mock data. In real app, this would be an API call.
      return {
        id: 'EMP-1024',
        name: 'Michael Chen',
        email: 'm.chen@workkeeper.io',
        role: 'Employee',
        avatar: 'MC',
        avatarColor: '#FDBA74'
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: {
    id: 'EMP-1024',
    name: 'Michael Chen',
    email: 'm.chen@workkeeper.io',
    role: 'Employee',
    avatar: 'MC',
    avatarColor: '#FDBA74'
  },
  isAuthenticated: true,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
