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
      "process.env.NODE_ENV": '"production"',
      "process.env.REACT_APP_API_URL": JSON.stringify(apiURL),
      "process.env.VITE_API_URL": JSON.stringify(apiURL),
      "process.env.VITE_THEME": JSON.stringify(theme),
      "process.env.VITE_APP_NAME": JSON.stringify(process.env.VITE_APP_NAME),
      "process.env.VITE_LOGGING_LEVEL": JSON.stringify(loggingLevel),
    },
  };
});
