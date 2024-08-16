import { createSlice } from "@reduxjs/toolkit";
import { sliceName } from "../sliceName";
import { initialState } from "../../initialState";

const commonSlice = createSlice({
  initialState: initialState.common,
  name: sliceName.COMMON,
  reducers: {
    showLoader: (state) => {
      state.loadingIndicator.isLoading = true;
    },
    hideLoader: (state) => {
      state.loadingIndicator.isLoading = false;
    },
  },
});

export const { showLoader, hideLoader } = commonSlice.actions;
export default commonSlice.reducer;
