import { configureStore } from "@reduxjs/toolkit";
import findWidthReducer from "./features/findWidthSlice";
import currentPlanetReducer from "./features/currentPlanetSlice";
import currentPersonReducer from "./features/currentPersonSlice";
import currentTechnologyReducer from "./features/currentTechnologySlice";

const store = configureStore({
    reducer:{
        findWidth: findWidthReducer,
        currentPlanet: currentPlanetReducer,
        currentPerson: currentPersonReducer,
        currentTechnology: currentTechnologyReducer
    }
})

export default store;
