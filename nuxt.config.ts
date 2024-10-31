import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: [
    `assets/css/bootstrap.min.css`,
    "assets/css/animate.min.css",
    "assets/css/magnific-popup.css",
    "assets/css/fontawesome-all.min.css",
    "assets/css/swiper-bundle.min.css",
    "assets/css/odometer.css",
    "assets/css/slick.css",
    "assets/css/default.css",
    "assets/css/style.css",
    "assets/css/responsive.css",
  ],
  plugins: [
    { src: 'plugins/external-scripts.js', mode: 'client' }
  ],
  vite: {
    
    build: {
      sourcemap: false, // Disable source maps for production build
    },
    server: {
      hmr: {
        overlay: false, // Disables caching for HMR updates
      },
    },
  },
  
});
