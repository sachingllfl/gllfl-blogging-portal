import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "@/app/redux/features/globalSlice";
export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});
