import { createTheme } from "@mui/material";
import themeOption from "./theming";
import { PaletteMode } from "@mui/material/styles/createPalette";

// Create the MUI theme using the custom theme configuration
const theme = (mode: PaletteMode = "light") => createTheme(themeOption(mode));

export default theme;
