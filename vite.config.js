import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sitemap({
    hostname: 'https://www.aisusc.com',
    dynamicRoutes: [
      '/',
      '/eboard',
      '/resources',
      '/events/diwali',
      '/events/holi',
      '/events/ganesha-chaturthi',
      '/events/navratri-garba',
    ]
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
  base: "/",
})
