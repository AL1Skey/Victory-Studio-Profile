- Add css files to public folder (create public folder if not exists)
- Add this code in nuxt.config.ts
```ts
....
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
...
```
- Done