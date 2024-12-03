import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression2";

export default defineConfig({
  root: "./", // Set to your project's root directory
  build: {
    rollupOptions: {
      input: "./index.html", // Specify your main HTML file
    },
    minify: "esbuild", // Minify the JavaScript during build
  },
  plugins: [
    react(),
    compression({
      algorithm: "gzip",
    }),
    compression({
      algorithm: "brotliCompress", // Brotli 압축 알고리즘 사용
    }),
  ],
});
