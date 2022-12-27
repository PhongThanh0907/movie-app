import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  appState: string;
}

const initialState: AppState = {
  appState: "",
}

export const appStateSlice = createSlice({
  name: "AppState",
  initialState,
  reducers: {
    setAppState: (state, action) => {
      state.appState = action.payload;
    }
  }
});

export const {
  setAppState
} = appStateSlice.actions;

export default appStateSlice.reducer;