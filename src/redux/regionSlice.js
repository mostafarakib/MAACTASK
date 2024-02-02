import { createSlice } from "@reduxjs/toolkit";

export const regionSlice = createSlice({
  name: "region",
  initialState: {
    regions: [],
  },
  reducers: {
    setRegions: (state, action) => {
      state.regions = action.payload;
    },
  },
});

export const { setRegions } = regionSlice.actions;

export const selectRegions = (state) => state.region.regions;

export default regionSlice.reducer;
