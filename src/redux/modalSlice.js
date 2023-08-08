import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
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

export const { show, hide } = modalSlice.actions;

export const selectVisible = (state) => state.modal.visible;

export default modalSlice.reducer;
