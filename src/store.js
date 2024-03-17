import { configureStore } from "@reduxjs/toolkit";

import hamburgerReducer from "./features/hamburgerSlice";
import tabsReducer from './features/tabsSlice'

const store = configureStore({
  reducer: {
    hamburger: hamburgerReducer,
    tabs: tabsReducer,
  },
});

export default store;
