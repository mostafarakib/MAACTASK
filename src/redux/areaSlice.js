import { createSlice } from "@reduxjs/toolkit";

export const areaSlice = createSlice({
  name: "area",
  initialState: {
    areas: [],
  },
  reducers: {
    setAreas: (state, action) => {
      state.areas = action.payload;
    },
  },
});

export const { setAreas } = areaSlice.actions;

export const selectAreas = (state) => state.area.areas;

export default areaSlice.reducer;
