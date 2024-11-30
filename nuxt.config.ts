export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  // plugins: [
  //   { src: 'plugins/external-scripts.js', mode: 'client' },
  //   { src: 'plugins/external-style.js', mode: 'client' },
  // ],
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        class: 'no-js',
      },
      title:"Jasa Website",
      meta:[
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
        {hid: 'description', name: 'description', content: 'Jasa Pembuatan Website - Victory Studio'},
        {hid: 'keywords', name: 'keywords', content: 'Jasa Pembuatan Website, Jasa Pembuatan Website Terbaik, Jasa Pembuatan Website Murah, Jasa Pembuatan Website Profesional, Jasa Pembuatan Website Jakarta, Jasa Pembuatan Website Terpercaya, Jasa Pembuatan Website Terbaik,jasa pembuatan website, jasa pembuatan website terbaik, jasa pembuatan website murah, jasa pembuatan website profesional, jasa pembuatan website jakarta, jasa pembuatan website terpercaya, jasa pembuatan website terbaik'
        },
        {hid: 'author', name: 'author', content: 'Victory Studio, victorystudio.id, victorystudio, jasa pembuatan website, jasa pembuatan website terbaik, jasa pembuatan website murah, jasa pembuatan website profesional, jasa pembuatan website jakarta, jasa pembuatan website terpercaya, jasa pembuatan website terbaik'},
        {hid: 'robots', name: 'robots', content: 'index, follow'},
        {hid: 'googlebot', name: 'googlebot', content: 'index, follow'},
        {hid: 'bingbot', name: 'bingbot', content: 'index, follow'},
        {hid: 'yandex', name: 'yandex', content: 'index, follow'},
        {hid: 'twitter:card', name: 'twitter:card', content: 'summary'},
        {hid: 'twitter:site', name: 'twitter:site', content: '@victorystudio.id'},
        {hid: 'twitter:creator', name: 'twitter:creator', content: '@victorystudio.id'},
        {hid: 'twitter:title', name: 'twitter:title', content: 'Jasa Pembuatan Website - Victory Studio'},
        {hid: 'twitter:description', name: 'twitter:description', content: 'Jasa Pembuatan Website - Victory Studio'},
        {hid: 'twitter:image', name: 'twitter:image', content: 'images/Logo/Artboard 1.png'},
        {hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Jasa Pembuatan Website - Victory Studio'},
        {hid: 'og:type', property: 'og:type', content: 'website'},
        {hid: 'og:url', property: 'og:url', content: 'https://victorystudio.id/'},
        {hid: 'og:title', property: 'og:title', content: 'Jasa Pembuatan Website - Victory Studio'},
        {hid: 'og:description', property: 'og:description', content: 'Jasa Pembuatan Website - Victory Studio'},
        {hid: 'og:image', property: 'og:image', content: 'images/Logo/Artboard 1.png'},
        {hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'images/Logo/Artboard 1.png'},
        {hid: 'og:image:alt', property: 'og:image:alt', content: 'Jasa Pembuatan Website - Victory Studio'},
        {hid: 'og:site_name', property: 'og:site_name', content: 'Victory Studio'},
        {hid: 'og:locale', property: 'og:locale', content: 'id_ID'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_US'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_GB'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_CA'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_AU'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_NZ'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_IE'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_ZA'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_JM'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_BS'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_BM'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_TT'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_VI'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_PH'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_PK'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_NG'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_MY'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_MT'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_MH'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_LR'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_KY'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_KN'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_JE'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_IM'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_GY'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_GG'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_GD'},
        {hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_FJ'},
      ],

      link:[
        {rel: 'icon', type: 'image/png', href: 'images/Logo/Artboard 1.png'},
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/tailwindcss'],
});
