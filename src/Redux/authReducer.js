import { createSlice } from '@reduxjs/toolkit';

const userFromStorage = localStorage.getItem('user') !== undefined
  ? JSON.parse(localStorage.getItem('user'))
  : null;

const initialState = {
  user: userFromStorage,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
      state.user = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },
    signupSuccess(state) {
      state.loading = false;
      state.user = null;
      state.error = null;
    },
    logout(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  signupSuccess,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
