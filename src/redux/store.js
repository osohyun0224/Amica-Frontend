import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice.js";
import userReducer from "./userSlice.js";
import modalSlice from "./modalSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
    modal: modalSlice,
  },
});
