import { PaletteColor } from "@mui/material/styles";
import chroma from "chroma-js";

export const createColorPalette = (baseColor: string): PaletteColor & Record<number, string> => {
  const scale = chroma.scale([chroma(baseColor).brighten(2), baseColor, chroma(baseColor).darken(2)]).mode("lab");

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

export const createActionColors = (baseColor: string) => {
    return {
      active: baseColor, 
      hover: chroma(baseColor).brighten(0.3).hex(), 
      selected: chroma(baseColor).darken(0.2).hex(), 
      disabled: chroma(baseColor).desaturate(0.5).hex(), 
      disabledBackground: chroma(baseColor).alpha(0.1).hex(), 
    };
  };