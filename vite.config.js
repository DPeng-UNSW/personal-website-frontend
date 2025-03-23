import { defineConfig } from 'vite';
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  base: '/personal-website-frontend/',
  publicDir: "public",
  build: {
    rollupOptions: {
      input: "public/index.html",
    },
  },
});