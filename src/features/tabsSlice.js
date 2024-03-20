import { createSlice } from "@reduxjs/toolkit";
import { technologyData } from "../utils/data/technology";
import { crewData } from "../utils/data/crew";
import { destinationData } from "../utils/data/destionation";

const initialState = {
  destinationData: destinationData,
  technologyData: technologyData,
  crewData: crewData,
};

const tabSlice = createSlice({
  name: "currentPerson",
  initialState,
  reducers: {
    setCurrentPerson: (state, action) => {
      state.currentPerson = action.payload;
    },
    setCurrentPlanet: (state, action) => {
      state.currentPlanet = action.payload;
    },
    setCurrentTechnology: (state, action) => {
      state.currentTechnology = action.payload;
    },
  },
});

export const { setCurrentPerson } = tabSlice.actions;

export default tabSlice.reducer;
