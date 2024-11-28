import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Set to your project's root directory
  build: {
    rollupOptions: {
      input: './index.html', // Specify your main HTML file
    },
  },
});