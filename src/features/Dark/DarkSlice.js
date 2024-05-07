import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: true,
};

export const DarkSlice = createSlice({
  name: "modechange",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMode } = DarkSlice.actions;

export default DarkSlice.reducer;
