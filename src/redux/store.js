import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { regionSlice } from "./regionSlice";
import { areaSlice } from "./areaSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    region: regionSlice.reducer,
    area: areaSlice.reducer,
  },
});

export default store;
