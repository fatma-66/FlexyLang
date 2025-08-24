import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementFun: (state) => {
     state.value += 1;
    },
    decrementFun: (state) => {
      state.value -= 5;
    },
  },
});

export const { incrementFun, decrementFun } = counterSlice.actions;

export default counterSlice.reducer;
