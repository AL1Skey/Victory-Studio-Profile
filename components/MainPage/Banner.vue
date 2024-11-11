<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

</script>

<template>
  <section class="banner-area banner-bg">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="banner-img wow fadeInLeft" data-wow-delay=".4s">
            <img src="assets/img/banner/banner_img.png" alt="Banner Image" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="banner-content">
            <span class="sub-title wow fadeInUp" data-wow-delay=".2s">
              Amazing <strong>Starts</strong> Here
            </span>
            <Swiper
              :modules="[Navigation, Autoplay]"
              :slides-per-view="1"
              :loop="true"
              :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
            >
              <SwiperSlide>
                <h2 class="title wow fadeInUp" data-wow-delay=".4s">
                  Grow Your Business Using Our Services
                </h2>
              </SwiperSlide>
              <SwiperSlide>
                <h2 class="title wow fadeInUp" data-wow-delay=".4s">
                  Jasa Pembuatan Website Profesional
                </h2>
              </SwiperSlide>
              <!-- Add more SwiperSlide components for additional slides if needed -->
            </Swiper>
            <a href="https://api.whatsapp.com/send?phone=6281930456886&text=Halo%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website." class="btn wow fadeInUp" data-wow-delay=".6s">
              Contact Us <span></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-shape-wrap">
      <img src="assets/img/banner/banner_shape01.png" alt="Shape 1" />
      <img src="assets/img/banner/banner_shape02.png" alt="Shape 2" class="animationFramesOne" />
      <img src="assets/img/banner/banner_shape03.png" alt="Shape 3" class="contactSwimmer" />
      <img src="assets/img/banner/banner_shape04.png" alt="Shape 4" class="rotateme" />
      <img src="assets/img/banner/banner_shape05.png" alt="Shape 5" class="animation1" />
      <img src="assets/img/banner/banner_shape06.png" alt="Shape 6" class="ribbonRotate" />
      <img src="assets/img/banner/banner_shape07.png" alt="Shape 7" class="float-bob-x" />
    </div>
  </section>
</template>

<style scoped>
/* Add any component-specific styles here */
.banner-area {
  position: relative;
  overflow: hidden;
}

.banner-shape-wrap img {
  position: absolute;
  z-index: -1;
}

/* Add more styles for positioning and animating the shape images */
</style>