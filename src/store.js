import { configureStore } from "@reduxjs/toolkit";
import findWidthReducer from "./features/findWidthSlice";
import currentPlanetReducer from "./features/currentPlanetSlice";
import currentPersonReducer from "./features/currentPersonSlice";
import currentTechnologyReducer from "./features/currentTechnologySlice";
import hamburgerReducer from "./features/hamburgerSlice";

const store = configureStore({
  reducer: {
    findWidth: findWidthReducer,
    hamburger: hamburgerReducer,
    currentPlanet: currentPlanetReducer,
    currentPerson: currentPersonReducer,
    currentTechnology: currentTechnologyReducer,
  },
});

export default store;
