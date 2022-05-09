import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPlanet: 0,
};

const currentPlanetSlice = createSlice({
  name: "currentPlanet",
  initialState,
  reducers: {
    setCurrentPlanet: (state, action) => {
      state.currentPlanet = action.payload;
    },
  },
});

export const { setCurrentPlanet } = currentPlanetSlice.actions;

export default currentPlanetSlice.reducer;
