import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev: boolean = mode.startsWith("dev");
  const isProd: boolean = mode.startsWith("prod");

  const apiURL = process.env.VITE_API_URL;
  const theme = process.env.VITE_THEME;
  const client = process.env.VITE_CLIENT;
  const loggingLevel = process.env.VITE_LOGGING_LEVEL;
  return {
    plugins: [react()],
    server: {
      port: isDev ? 3000 : 8080,
      open: true,
      proxy: {
        "/api": {
          target: apiURL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ""),
        },
      },
    },
    build: {
      outDir: isProd ? `dist/${client}` : `build/${client}`,
      sourcemap: isDev,
      minify: isDev ? "terser" : false,
      chunkSizeWarningLimit: 1024,
    },
    resolve: {
      alias: {
        "@": "/src",
        "@theme": `/src/themes/${theme}`,
        "@client": `/src/clients/${client}`,
        "@logging": `/src/logging/${loggingLevel}`,
      },
    },
    css: {
      // css modules  camelCase
      modules: { localsConvention: "camelCase", scopeBehaviour: "local" },
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";',
          indentedSyntax: false,
        },
      },
    },
    define: {

      // Environment Variables
      "process.env.NODE_ENV": '"production"',
      "process.env.REACT_APP_API_URL": JSON.stringify(apiURL),
      "process.env.VITE_API_URL": JSON.stringify(apiURL),
      "process.env.VITE_THEME": JSON.stringify(theme),
      "process.env.VITE_APP_NAME": JSON.stringify(process.env.VITE_APP_NAME),
      "process.env.VITE_LOGGING_LEVEL": JSON.stringify(loggingLevel),

      // MUI Color Variables
      "process.env.MUI_PRIMARY_COLOR": JSON.stringify(
        process.env.MUI_PRIMARY_COLOR
      ),
      "process.env.MUI_SECONDARY_COLOR": JSON.stringify(
        process.env.MUI_SECONDARY_COLOR
      ),
      "process.env.MUI_TERTIARY_COLOR": JSON.stringify(
        process.env.MUI_TERTIARY_COLOR
      ),
      "process.env.MUI_BACKGROUND_COLOR": JSON.stringify(
        process.env.MUI_BACKGROUND_COLOR
      ),
      "process.env.MUI_NEUTRAL_COLOR": JSON.stringify(
        process.env.MUI_NEUTRAL_COLOR
      ),
      "process.env.MUI_BLACK_COLOR": JSON.stringify(
        process.env.MUI_BLACK_COLOR
      ),
      "process.env.MUI_GREY_COLOR": JSON.stringify(process.env.MUI_GREY_COLOR),
      "process.env.MUI_WHITE_COLOR": JSON.stringify(
        process.env.MUI_WHITE_COLOR
      ),
      "process.env.MUI_HIGHLIGHT_COLOR": JSON.stringify(
        process.env.MUI_HIGHLIGHT_COLOR
      ),
      "process.env.MUI_SUCCESS_COLOR": JSON.stringify(
        process.env.MUI_SUCCESS_COLOR
      ),
      "process.env.MUI_WARNING_COLOR": JSON.stringify(
        process.env.MUI_WARNING_COLOR
      ),
      "process.env.MUI_ERROR_COLOR": JSON.stringify(
        process.env.MUI_ERROR_COLOR
      ),
      "process.env.MUI_TEXT_COLOR": JSON.stringify(
        process.env.MUI_TEXT_PRIMARY_COLOR
      ),
      "process.env.MUI_ACTION_COLOR": JSON.stringify(
        process.env.MUI_ACTION_COLOR
      ),
      "process.env.MUI_DIVIDER_COLOR": JSON.stringify(
        process.env.MUI_DIVIDER_COLOR
      ),
      "process.env.MUI_FONT_PRIMARY": JSON.stringify(process.env.MUI_FONT_PRIMARY),
      "process.env.MUI_FONT_SECONDARY": JSON.stringify(process.env.MUI_FONT_SECONDARY),
      "process.env.MUI_FONT_MONTSERRAT": JSON.stringify(process.env.MUI_FONT_MONTSERRAT),
      "process.env.MUI_FONT_LATO": JSON.stringify(process.env.MUI_FONT_LATO),
      "process.env.MUI_FONT_INTER": JSON.stringify(process.env.MUI_FONT_INTER),
    },
  };
});
