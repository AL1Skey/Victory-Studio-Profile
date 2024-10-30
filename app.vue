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
      <MainPageTeam/>
    <!-- team-area-end -->

    <!-- project-area -->
      <MainPageProject/>
    <!-- project-area-end -->

    <!-- testimonial-area -->
      <MainPageTestimonial/>
    <!-- testimonial-area-end -->

    <!-- consultation-area -->
      <MainPageConsultation/>
    <!-- consultation-area-end -->

    <!-- blog-area -->
      <MainPageBlog/>
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
  <!--
<script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/isotope.pkgd.min.js"></script>
<script src="assets/js/imagesloaded.pkgd.min.js"></script>
<script src="assets/js/jquery.magnific-popup.min.js"></script>
<script src="assets/js/jquery.odometer.min.js"></script>
<script src="assets/js/swiper-bundle.min.js"></script>
<script src="assets/js/jquery.appear.js"></script>
<script src="assets/js/slick.min.js"></script>
<script src="assets/js/ajax-form.js"></script>
<script src="assets/js/parallax.min.js"></script>
<script src="assets/js/jquery.parallaxScroll.min.js"></script>
<script src="assets/js/tween-max.js"></script>
<script src="assets/js/wow.min.js"></script>
<script src="assets/js/main.js"></script> 
-->
</template>


