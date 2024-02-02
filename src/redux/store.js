import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { regionSlice } from "./regionSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    region: regionSlice.reducer,
  },
});

export default store;
