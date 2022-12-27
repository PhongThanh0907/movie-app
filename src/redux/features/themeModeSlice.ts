import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";


interface themeModeState {
  themeMode: PaletteMode
}

const initialState: themeModeState = {
  themeMode: "dark"
}

export const themeModeSlice = createSlice({
  name: "ThemeMode",
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      state.themeMode = action.payload;
    }
  }
});

export const {
  setThemeMode
} = themeModeSlice.actions;

export default themeModeSlice.reducer;