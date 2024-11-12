// server/plugins/my-plugin.ts
export default defineNuxtPlugin((nuxtApp) => {
    const css = [
        "~/assets/css/bootstrap.min.css",
        "~/assets/css/animate.min.css",
        "~/assets/css/magnific-popup.css",
        "~/assets/css/fontawesome-all.min.css",
        "~/assets/css/swiper-bundle.min.css",
        "~/assets/css/odometer.css",
        "~/assets/css/slick.css",
        "~/assets/css/default.css",
        "~/assets/css/style.css",
        "~/assets/css/responsive.css"
    ]
    nuxtApp.hook('render:html', (html) => {
        css.forEach((style) => {
            html.head.push(`<link rel="stylesheet" href="${style}">`)
        })
    })
})