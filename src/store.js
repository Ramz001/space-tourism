import { configureStore } from "@reduxjs/toolkit";
import findWidthReducer from "./features/findWidthSlice";
import currentPlanetReducer from "./features/currentPlanetSlice";
import currentPersonReducer from "./features/currentPersonSlice";

const store = configureStore({
    reducer:{
        findWidth: findWidthReducer,
        currentPlanet: currentPlanetReducer,
        currentPerson: currentPersonReducer
    }
})

export default store;
