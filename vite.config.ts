import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

  const isDev: boolean = mode.startsWith("dev");
  const isProd: boolean = mode.startsWith("prod");

  const apiURL = isDev ? "http://localhost:8081" : "http://localhost:3000"; 

  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
      proxy: {
        "/api": {
          target: "http://localhost:8081",
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ""),
        },
      },
    },
    build: {
      outDir: "build",
      sourcemap: true,
      minify: "terser",
      chunkSizeWarningLimit: 1024,
    },
    resolve: {
      alias: { "@": "/src" },
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
      "process.env.REACT_APP_API_URL": '"http://localhost:3000"',
    },
  };
});
