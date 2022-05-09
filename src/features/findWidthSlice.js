import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: "none",
};

const findWidthSlice = createSlice({
  name: "findWidth",
  initialState,
  reducers: {
    findWidth: (state, action) => {
      if (action.payload.width <= 640) {
        state.display = "mobile";
      }
      if (action.payload.width > 640 && action.payload.width <= 1280) {
        state.display = "tablet";
      }
      if (action.payload.width > 1280) {
        state.display = "desktop";
      }
    },
  },
});

export const { findWidth } = findWidthSlice.actions;

export default findWidthSlice.reducer;
