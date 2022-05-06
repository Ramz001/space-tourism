import { configureStore } from "@reduxjs/toolkit";
import findWidthReducer from "./features/findWidthSlice";


const store = configureStore({
    reducer:{
        findWidth: findWidthReducer
    }
})

export default store;
