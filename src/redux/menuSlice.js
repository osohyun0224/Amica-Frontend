import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    visible: false,
  },
  reducers: {
    show: (state) => {
      state.visible = true;
    },
    hide: (state) => {
      state.visible = false;
    },
  },
});

export const { show, hide } = menuSlice.actions;

export const selectVisible = (state) => state.menu.visible;

export default menuSlice.reducer;
