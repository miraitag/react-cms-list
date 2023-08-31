import { createSlice } from "@reduxjs/toolkit";
import { ISpinner } from "../../../interfaces/spinner.interface";

const initialState: ISpinner = {
  isLoading: false,
};

export const spinnerSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    show: () => {
      return { isLoading: true };
    },
    hide: () => {
      return { isLoading: false };
    },
  },
});

export const { show, hide } = spinnerSlice.actions;

export default spinnerSlice.reducer;
