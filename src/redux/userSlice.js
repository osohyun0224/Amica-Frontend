import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    access_token: null,
    refresh_token: null,
    email: null,
    name: null,
  },
  reducers: {
    login: (state, action) => {
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    logout: (state) => {
      state.access_token = null;
      state.refresh_token = null;
      state.email = null;
      state.name = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectName = (state) => state.user.name;

export default userSlice.reducer;
