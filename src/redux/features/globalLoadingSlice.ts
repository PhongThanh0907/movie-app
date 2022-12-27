import { createSlice } from "@reduxjs/toolkit";

export interface globalLoading {
  globalLoading: boolean
}

const initialState: globalLoading = {
  globalLoading: false
}


export const globalLoadingSlice = createSlice({
  name: "AuthModal",
  initialState,
  reducers: {
    setGlobalLoading: (state, action) => {
      state.globalLoading = action.payload;
    }
  }
});

export const {
  setGlobalLoading
} = globalLoadingSlice.actions;

export default globalLoadingSlice.reducer;