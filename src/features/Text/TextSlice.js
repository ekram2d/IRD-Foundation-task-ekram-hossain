import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "হাদিস গ্রন্থসমূহ",
};

export const TextSlice = createSlice({
  name: " textchanger",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setText } = TextSlice.actions;

export default TextSlice.reducer;
