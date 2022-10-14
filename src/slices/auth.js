import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import users from '../data/Users.json';

const initialState = {
  users,
  authUser: {},
  message: '',
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      const { email, password } = action.payload;
      const getUserByEmail = current(state.users).filter(
        (user) => user.email === email,
      );

      if (getUserByEmail.length > 0) {
        if (getUserByEmail[0].password === password) {
          localStorage.removeItem('authUserMail');
          localStorage.setItem('authUserMail', getUserByEmail[0].email);
          state.authUser = getUserByEmail[0];
        } else {
          state.message = 'An error occured while login';
        }
      } else {
        state.message = 'User not found.';
      }
    },
  },
});

export const { setAuthUser } = authSlice.actions;

export default authSlice.reducer;
