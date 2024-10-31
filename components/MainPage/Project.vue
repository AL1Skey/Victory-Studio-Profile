<template>
    <section class="project-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-4">
            <div class="project-content">
              <div class="section-title white-title mb-30">
                <span class="sub-title">Our Complete Craft</span>
                <h2 class="title">Some of Our Work in Craft Digital Agency</h2>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
              <div class="content-bottom">
                <a href="about-me.html" class="btn"
                  >View All Project <span></span
                ></a>
                <div class="project-nav">
                  <button class="swiper-button-prev" aria-label="prev"></button>
                  <button class="swiper-button-next"  aria-label="next"></button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="project-item-wrap">
              <div class="swiper-container project-active">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="i in Array.from({length:4})">
                    <div class="project-item">
                      <a href="project-details.html"
                        ><img src="assets/img/project/project_img01.jpg" alt=""
                      /></a>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-shape-wrap">
        <img
          src="assets/img/project/project_shape01.png"
          alt=""
          class="shape-one ribbonRotate"
        />
        <img
          src="assets/img/project/project_shape02.png"
          alt=""
          class="shape-two ribbonRotate"
        />
      </div>
    </section>
</template>

<script lang="ts">
  // import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
import { onMounted } from 'vue';
// register Swiper custom elements
register();



export default {
  setup() {
    onMounted(() => {
      const swiper = new Swiper('.project-active', {
        loop: true, // Enables looping
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 230,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
      });
    });
  },
};
</script>