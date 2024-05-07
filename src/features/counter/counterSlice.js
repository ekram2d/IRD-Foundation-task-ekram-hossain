import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "হাদিস গ্রন্থসমূহ",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setText, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
