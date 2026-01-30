import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import devtools from "solid-devtools/vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    devtools(),
    solidPlugin(),
    legacy({
      targets: ["last 2 versions and not dead, > 0.3%, Firefox ESR"],
      modernPolyfills: true, // 自动检测并添加polyfill
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    // target: "es2020",
  },
});
