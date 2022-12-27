import { createSlice } from "@reduxjs/toolkit";

export interface authState {
  authModalOpen: boolean
}

const initialState: authState = {
  authModalOpen: false
}


export const authModalSlice = createSlice({
  name: "AuthModal",
  initialState,
  reducers: {
    setAuthModalOpen: (state, action) => {
      state.authModalOpen = action.payload;
    }
  }
});

export const {
  setAuthModalOpen
} = authModalSlice.actions;

export default authModalSlice.reducer;