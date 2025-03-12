import { createActionColors, createColorPalette } from "./createColorPalette";

const theme = () => {
  const palette = {
    primary: createColorPalette(import.meta.env.MUI_PRIMARY_COLOR),
    secondary: createColorPalette(import.meta.env.MUI_SECONDARY_COLOR),
    tertiary: createColorPalette(import.meta.env.MUI_TERTIARY_COLOR),
    background: createColorPalette(import.meta.env.MUI_BACKGROUND_COLOR),
    neutral: createColorPalette(import.meta.env.MUI_NEUTRAL_COLOR),
    black: createColorPalette(import.meta.env.MUI_BLACK_COLOR),
    grey: createColorPalette(import.meta.env.MUI_GREY_COLOR),
    white: createColorPalette(import.meta.env.MUI_WHITE_COLOR),
    highlight: createColorPalette(import.meta.env.MUI_HIGHLIGHT_COLOR),
    success: createColorPalette(import.meta.env.MUI_SUCCESS_COLOR),
    warning: createColorPalette(import.meta.env.MUI_WARNING_COLOR),
    error: createColorPalette(import.meta.env.MUI_ERROR_COLOR),
    text: createColorPalette(import.meta.env.MUI_TEXT_COLOR),
    action: createActionColors(import.meta.env.MUI_ACTION_COLOR),
    divider: createColorPalette(import.meta.env.MUI_DIVIDER_COLOR),
    typography: {
      fontFamily: `"${import.meta.env.MUI_FONT_INTER}", "${
        import.meta.env.MUI_FONT_PRIMARY
      }", "Helvetica", "Arial", sans-serif`,

      h1: {
        fontFamily: `"${import.meta.env.MUI_FONT_PRIMARY}", sans-serif`,
        fontSize: "3rem",
        fontWeight: 700,
        lineHeight: 1.2,
        color: import.meta.env.MUI_PRIMARY_COLOR,
      },
      h2: {
        fontFamily: `"${import.meta.env.MUI_FONT_PRIMARY}", sans-serif`,
        fontSize: "2.25rem",
        fontWeight: 600,
        lineHeight: 1.3,
        color: import.meta.env.MUI_PRIMARY_COLOR,
      },
      h3: {
        fontFamily: `"${import.meta.env.MUI_FONT_SECONDARY}", sans-serif`,
        fontSize: "1.75rem",
        fontWeight: 600,
        lineHeight: 1.4,
        color: import.meta.env.MUI_SECONDARY_COLOR,
      },
      h4: {
        fontFamily: `"${import.meta.env.MUI_FONT_MONTSERRAT}", sans-serif`,
        fontSize: "1.5rem",
        fontWeight: 500,
        lineHeight: 1.4,
        color: import.meta.env.MUI_HIGHLIGHT_COLOR,
      },
      h5: {
        fontFamily: `"${import.meta.env.MUI_FONT_LATO}", sans-serif`,
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: 1.5,
        color: import.meta.env.MUI_TERTIARY_COLOR,
      },
      h6: {
        fontFamily: `"${import.meta.env.MUI_FONT_LATO}", sans-serif`,
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
        color: import.meta.env.MUI_WARNING_COLOR,
      },

      body1: {
        fontFamily: `"${import.meta.env.MUI_FONT_INTER}", sans-serif`,
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.6,
        color: import.meta.env.MUI_BLACK_COLOR,
      },
      body2: {
        fontFamily: `"${import.meta.env.MUI_FONT_INTER}", sans-serif`,
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.6,
        color: import.meta.env.MUI_GREY_COLOR,
      },

      button: {
        textTransform: "none",
        fontFamily: `"${import.meta.env.MUI_FONT_PRIMARY}", sans-serif`,
        fontWeight: 500,
        fontSize: "1rem",
        color: import.meta.env.MUI_BACKGROUND_COLOR,
      },

      caption: {
        fontFamily: `"${import.meta.env.MUI_FONT_LATO}", sans-serif`,
        fontSize: "0.75rem",
        fontWeight: 300,
        lineHeight: 1.4,
        color: import.meta.env.MUI_BLACK_COLOR,
      },

      overline: {
        fontFamily: `"${import.meta.env.MUI_FONT_LATO}", sans-serif`,
        fontSize: "0.625rem",
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: import.meta.env.MUI_GREY_COLOR,
      },

      listItem: {
        fontFamily: `"${import.meta.env.MUI_FONT_SECONDARY}", sans-serif`,
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
        color: import.meta.env.MUI_BLACK_COLOR,
      },

      small: {
        fontFamily: `"${import.meta.env.MUI_FONT_MONTSERRAT}", sans-serif`,
        fontSize: "0.75rem",
        fontWeight: 300,
        lineHeight: 1.4,
        color: import.meta.env.MUI_GREY_COLOR,
      },
    },
  };
  return palette;
};

export default theme;
// Compare this snippet from src/theme/createColorPalette.ts:
