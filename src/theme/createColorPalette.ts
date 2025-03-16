import {
  PaletteColor,
  SimplePaletteColorOptions,
  TypeAction,
  TypeBackground,
  TypeText,
} from "@mui/material/styles";
import chroma from "chroma-js";

export const createColorPalette = (
  baseColor: string // Default to a shade of blue if no base color is provided
): SimplePaletteColorOptions | PaletteColor => {
  const scale = chroma
    .scale([
      chroma(baseColor).brighten(2),
      baseColor,
      chroma(baseColor).darken(2),
    ])
    .mode("lab");

  return {
    main: baseColor,
    light: scale(0.3).hex(),
    dark: scale(0.8).hex(),
    contrastText: chroma.contrast(baseColor, "#fff") > 4.5 ? "#fff" : "#000",
    100: scale(0.1).hex(),
    200: scale(0.2).hex(),
    300: scale(0.3).hex(),
    400: scale(0.4).hex(),
    500: baseColor,
    600: scale(0.7).hex(),
    700: scale(0.8).hex(),
    800: scale(0.9).hex(),
    900: scale(1).hex(),
  };
};

export const createBackgroundColorPalette = (
  baseColor: string
): TypeBackground => {
  return {
    default: baseColor,
    paper: chroma(baseColor).darken(0.2).hex(),
  };
};

export const createTextColorPalette = (
  baseColor: string
): Partial<TypeText> & Record<number | string, string> => {
  const scale = chroma
    .scale([
      chroma(baseColor).brighten(2),
      baseColor,
      chroma(baseColor).darken(2),
    ])
    .mode("lab");

  return {
    main: baseColor,
    primary: baseColor,
    light: scale(0.3).hex(),
    disable: scale(0.3).hex(),
    dark: scale(0.8).hex(),
    secondary: scale(0.8).hex(),
    contrastText: chroma.contrast(baseColor, "#fff") > 4.5 ? "#fff" : "#000",
    100: scale(0.1).hex(),
    200: scale(0.2).hex(),
    300: scale(0.3).hex(),
    400: scale(0.4).hex(),
    500: baseColor,
    600: scale(0.7).hex(),
    700: scale(0.8).hex(),
    800: scale(0.9).hex(),
    900: scale(1).hex(),
  };
};

export const createActionColors = (baseColor: string): Partial<TypeAction> => {
  const scale = chroma
    .scale([
      chroma(baseColor).brighten(2),
      baseColor,
      chroma(baseColor).darken(2),
    ])
    .mode("lab");

  return {
    active: baseColor,
    hoverOpacity: 0.08,
    selectedOpacity: 0.14,
    disabled: scale(0.8).hex(),
    disabledOpacity: 0.38,
    disabledBackground: scale(0.8).alpha(0.1).hex(),
    focus: scale(0.8).hex(),
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
    hover: scale(0.5).hex(),
    selected: scale(0.7).hex(),
  };
};
