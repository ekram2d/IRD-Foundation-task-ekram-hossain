import { configureStore } from "@reduxjs/toolkit";
import textReducer from "../features/Text/TextSlice";
import darksliceReducer from "../features/Dark/DarkSlice";
export const store = configureStore({
  reducer: {
    textchanger: textReducer,
    modechange: darksliceReducer,
  },
});
