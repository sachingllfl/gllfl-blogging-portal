import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    checkViewPort: (state) => {
      if (window.innerWidth > 1024) {
        state.isMobile = false;
      } else {
        state.isMobile = true;
      }
    },
  },
});

export const { checkViewPort } = globalSlice.actions;

export default globalSlice.reducer;
