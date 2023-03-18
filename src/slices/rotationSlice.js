import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRotated: false,
};

export const rotationSlice = createSlice({
  name: "rotation",
  initialState,
  reducers: {
    setRotation: (state) => {
      state.isRotated = !state.isRotated;
    },
  },
});

export const { setRotation } = rotationSlice.actions;

export default rotationSlice.reducer;
