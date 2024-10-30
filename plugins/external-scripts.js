// plugins/external-scripts.js
export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) { // Ensure scripts only run on the client side
      import('assets/js/vendor/jquery-3.6.0.min.js');
      import('assets/js/bootstrap.min.js');
      import('assets/js/isotope.pkgd.min.js');
      import('assets/js/imagesloaded.pkgd.min.js');
      import('assets/js/jquery.magnific-popup.min.js');
      import('assets/js/jquery.odometer.min.js');
      import('assets/js/swiper-bundle.min.js');
      import('assets/js/jquery.appear.js');
      import('assets/js/slick.min.js');
      import('assets/js/ajax-form.js');
      import('assets/js/parallax.min.js');
      import('assets/js/jquery.parallaxScroll.min.js');
      import('assets/js/tween-max.js');
      import('assets/js/wow.min.js');
      import('assets/js/main.js');
    }
  });
  