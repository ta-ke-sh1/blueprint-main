import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "./steps/stepSlice";

export default configureStore({
  reducer: {
    test_steps: stepSlice,
  },
});
