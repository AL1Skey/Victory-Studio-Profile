export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  // plugins: [
  //   { src: 'plugins/external-scripts.js', mode: 'client' },
  //   { src: 'plugins/external-style.js', mode: 'client' },
  // ],
  app: {
    head: {
      link:[
        {rel: 'stylesheet', href:"css/bootstrap.min.css"},
        {rel: 'stylesheet', href:"css/animate.min.css"},
        {rel: 'stylesheet', href:"css/magnific-popup.css"},
        {rel: 'stylesheet', href:"css/fontawesome-all.min.css"},
        {rel: 'stylesheet', href:"css/swiper-bundle.min.css"},
        {rel: 'stylesheet', href:"css/odometer.css"},
        {rel: 'stylesheet', href:"css/slick.css"},
        {rel: 'stylesheet', href:"css/default.css"},
        {rel: 'stylesheet', href:"css/style.css"},
        {rel: 'stylesheet', href:"css/responsive.css"}
      ]
    },
    
  },
  ssr:true,
  // css : [
  //   "@/assets/css/bootstrap.min.css",
  //   "@/assets/css/animate.min.css",
  //   "@/assets/css/magnific-popup.css",
  //   "@/assets/css/fontawesome-all.min.css",
  //   "@/assets/css/swiper-bundle.min.css",
  //   "@/assets/css/odometer.css",
  //   "@/assets/css/slick.css",
  //   "@/assets/css/default.css",
  //   "@/assets/css/style.css",
  //   "@/assets/css/responsive.css"
  //   ],
    postcss: {
      plugins: {
        autoprefixer: {},
        cssnano: { preset: 'default' }
      }
    },
  // vite: {
  //   build: {
  //     sourcemap: false,
  //     cssCodeSplit: false,
  //   },
  //   server: {
  //     hmr: {
  //       overlay: false,
  //     },
  //   },
  // },
});