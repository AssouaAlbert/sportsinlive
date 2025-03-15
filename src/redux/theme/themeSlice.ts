import { createSlice } from "@reduxjs/toolkit";
import theme from "../../theme/createTheme"; // Adjust the path as necessary
import { PaletteMode } from "@mui/material/styles/createPalette";

import { Theme } from "@mui/material/styles";

const initialState: {
  isDark: PaletteMode;
  theme: Theme;
} = {
  isDark: "light",
  theme: theme("light"), // Initialize the theme with the default mode
};

console.log("themeSlice:", theme());
const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
      // Toggle the theme mode between light and dark
      const newMode: PaletteMode = state.isDark === "light" ? "dark" : "light";
      const newTheme = theme(state.isDark as PaletteMode); // Update the theme based on the current mode
      return {
        ...state,
        isDark: newMode, // Update the isDark state
        theme: newTheme, // Update the theme in the state
      }; // Return the updated state
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
