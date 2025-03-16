import {
  PaletteOptions,
  PaletteColorOptions,
  ThemeOptions,
  PaletteMode,
} from "@mui/material";
import {
  createActionColors,
  createBackgroundColorPalette,
  createColorPalette,
  createTextColorPalette,
} from "./createColorPalette";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface PaletteColor {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    primary?: string;
    disabled?: string;
    secondary?: string;
  }
  interface SimplePaletteColorOptions {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    primary?: string;
    disabled?: string;
    secondary?: string;
  }

  interface Palette {
    neutral: PaletteColor;
    black: PaletteColor;
    tertiary: PaletteColor;
    white: PaletteColor;
    highlight: PaletteColor;
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions;
    black?: PaletteColorOptions;
    tertiary?: PaletteColorOptions;
    white?: PaletteColorOptions;
    highlight?: PaletteColorOptions;
  }
}

// Theme definition
const theme = (mode: PaletteMode): ThemeOptions => {
  const palette: PaletteOptions = {
    mode,
    primary: createColorPalette("#" + import.meta.env.VITE_MUI_PRIMARY_COLOR),
    secondary: createColorPalette(
      "#" + import.meta.env.VITE_MUI_SECONDARY_COLOR
    ),
    tertiary: createColorPalette("#" + import.meta.env.VITE_MUI_TERTIARY_COLOR),
    background: createBackgroundColorPalette(
      "#" + import.meta.env.VITE_MUI_BACKGROUND_COLOR
    ),
    neutral: createColorPalette("#" + import.meta.env.VITE_MUI_NEUTRAL_COLOR),
    black: createColorPalette("#" + import.meta.env.VITE_MUI_BLACK_COLOR),
    white: createColorPalette("#" + import.meta.env.VITE_MUI_WHITE_COLOR),
    highlight: createColorPalette(
      "#" + import.meta.env.VITE_MUI_HIGHLIGHT_COLOR
    ),
    success: createColorPalette("#" + import.meta.env.VITE_MUI_SUCCESS_COLOR),
    warning: createColorPalette("#" + import.meta.env.VITE_MUI_WARNING_COLOR),
    error: createColorPalette("#" + import.meta.env.VITE_MUI_ERROR_COLOR),
    text: createTextColorPalette("#" + import.meta.env.VITE_MUI_TEXT_COLOR),
    action: createActionColors("#" + import.meta.env.VITE_MUI_ACTION_COLOR),
    divider: "#" + import.meta.env.VITE_MUI_DIVIDER_COLOR,
  };

  const typography: TypographyOptions = {
    fontFamily: `"${import.meta.env.VITE_MUI_FONT_INTER}", "${
      import.meta.env.VITE_MUI_FONT_PRIMARY
    }", "Helvetica", "Arial", sans-serif`,

    h1: {
      fontFamily: `"${import.meta.env.VITE_MUI_FONT_PRIMARY}", sans-serif`,
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
      color: import.meta.env.MUI_PRIMARY_COLOR,
    },
    h2: {
      fontFamily: `"${import.meta.env.VITE_MUI_FONT_PRIMARY}", sans-serif`,
      fontSize: "2.25rem",
      fontWeight: 600,
      lineHeight: 1.3,
      color: import.meta.env.MUI_PRIMARY_COLOR,
    },
    h3: {
      fontFamily: `"${import.meta.env.VITE_MUI_FONT_SECONDARY}", sans-serif`,
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.4,
      color: import.meta.env.MUI_SECONDARY_COLOR,
    },
    h4: {
      fontFamily: `"${import.meta.env.VITE_MUI_FONT_MONTSERRAT}", sans-serif`,
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.4,
      color: import.meta.env.MUI_HIGHLIGHT_COLOR,
    },
    h5: {
      fontFamily: `"${import.meta.env.VITE_MUI_FONT_LATO}", sans-serif`,
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.5,
      color: import.meta.env.MUI_TERTIARY_COLOR,
    },
    h6: {
      fontFamily: `"${import.meta.env.VITE_MUI_FONT_LATO}", sans-serif`,
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      color: import.meta.env.MUI_WARNING_COLOR,
    },

    body1: {
      fontFamily: `"${import.meta.env.VITE_MUI_FONT_INTER}", sans-serif`,
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
      color: import.meta.env.MUI_BLACK_COLOR,
    },
    body2: {
      fontFamily: `"${import.meta.env.VITE_MUI_FONT_INTER}", sans-serif`,
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.6,
      color: import.meta.env.MUI_GREY_COLOR,
    },

    button: {
      textTransform: "none",
      fontFamily: `"${import.meta.env.VITE_MUI_FONT_PRIMARY}", sans-serif`,
      fontWeight: 500,
      fontSize: "1rem",
      color: import.meta.env.MUI_BACKGROUND_COLOR,
    },

    caption: {
      fontFamily: `"${import.meta.env.VITE_MUI_FONT_LATO}", sans-serif`,
      fontSize: "0.75rem",
      fontWeight: 300,
      lineHeight: 1.4,
      color: import.meta.env.MUI_BLACK_COLOR,
    },

    overline: {
      fontFamily: `"${import.meta.env.VITE_MUI_FONT_LATO}", sans-serif`,
      fontSize: "0.625rem",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: import.meta.env.MUI_GREY_COLOR,
    },
  };

  return { palette, typography };
};

export default theme;
