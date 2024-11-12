<script lang="ts" setup>
import { ref, onMounted, defineExpose } from 'vue';

const isMounted = ref(false);

onMounted(() => {
    isMounted.value = true;
});

defineExpose({ isMounted });
</script>
<template>
  <!--Preloader-->
<div id="preloader" v-if="!isMounted">
    <div id="loader" class="loader">
        <div class="loader-container">
            <div class="loader-icon">
                <img src="assets/img/preloader.png" alt="Preloader" />
            </div>
        </div>
    </div>
</div>
  <!--Preloader-end -->

  <!-- Custom-cursor -->
  <div class="mouseCursor cursor-outer"></div>
  <div class="mouseCursor cursor-inner"><span>Drag</span></div>
  <!-- Custom-cursor-end -->

  <!-- Scroll-top -->
  <button class="scroll-top scroll-to-target" data-target="html">
    <i class="fas fa-angle-up"></i>
  </button>
  <!-- Scroll-top-end-->

  <!-- header-area -->
  <NavBar/> 
  <!-- header-area-end -->

  <!-- main-area -->
  <main>
    <!-- banner-area -->
    <MainPageBanner/>
    <!-- banner-area-end -->

    <!-- services-area -->
    <MainPageService/>
    <!-- services-area-end -->

    <!-- about-area -->
    <MainPageAbout/>
    <!-- about-area-end -->

    <!-- team-area -->
      <!-- <MainPageTeam/> -->
    <!-- team-area-end -->

    <!-- project-area -->
    <MainPageProject/>
    <!-- project-area-end -->

    <!-- our-client-area -->
      <!-- <MainPageTestimonial/> -->
    <!-- testimonial-area-end -->

    <!-- consultation-area -->
    <MainPageConsultation/>
    <!-- consultation-area-end -->

    <!-- blog-area -->

    <!-- blog-area-end -->

    <!-- newsletter-area -->
      <MainPageNewsLetter/>
    <!-- newsletter-area-end -->
  </main>
  <!-- main-area-end -->

  <!-- footer-area -->
  <Footer/>
  <!-- footer-area-end -->

  <!-- JS here -->
  
<Script src="js/vendor/jquery-3.6.0.min.js"></Script>
<Script src="js/bootstrap.min.js"></Script>
<Script src="js/isotope.pkgd.min.js"></Script>
<Script src="js/imagesloaded.pkgd.min.js"></Script>
<Script src="js/jquery.magnific-popup.min.js"></Script>
<Script src="js/jquery.odometer.min.js"></Script>
<Script src="js/swiper-bundle.min.js"></Script>
<Script src="js/jquery.appear.js"></Script>
<Script src="js/slick.min.js"></Script>
<Script src="js/ajax-form.js"></Script>
<Script src="js/parallax.min.js"></Script>
<Script src="js/jquery.parallaxScroll.min.js"></Script>
<Script src="js/tween-max.js"></Script>
<Script src="js/wow.min.js"></Script>
<Script src="js/main.js"></Script> 

</template>
<!-- 
<style scoped>
@import "@/assets/css/bootstrap.min.css";
@import "@/assets/css/animate.min.css";
@import "@/assets/css/fontawesome-all.min.css";
@import "@/assets/css/swiper-bundle.min.css";
@import "@/assets/css/magnific-popup.css";
@import "@/assets/css/slick.css";
@import "@/assets/css/default.css";
@import "@/assets/css/style.css";

</style> -->