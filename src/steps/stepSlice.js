import { createSlice } from "@reduxjs/toolkit";

export const stepSlice = createSlice({
  name: "test_steps",
  initialState: {
    steps: [],
  },
  reducers: {
    addAction: (state, action) => {
      state.steps.push(action.payload);
    },

    start: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { addAction } = stepSlice.actions;

export default stepSlice.reducer;
