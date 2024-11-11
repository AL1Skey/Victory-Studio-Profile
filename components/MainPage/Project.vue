<template>
  <section class="project-area" id="project-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-4">
          <div class="project-content">
            <div class="section-title white-title mb-30">
              <span class="sub-title">Our Complete Craft</span>
              <h2 class="title">{{ preproject[0].title }}</h2>
            </div>
            <p>{{ preproject[0].description }}</p>
            <div class="content-bottom">
              <a href="https://api.whatsapp.com/send?phone=6281930456886&text=Halo%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website." class="btn"
                >Contact Us <span></span
              ></a>
              <!-- <div class="project-nav">
                <button class="swiper-button-prev" aria-label="prev"></button>
                <button class="swiper-button-next" aria-label="next"></button>
              </div> -->
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="project-item-wrap">
            <div class="swiper-container project-active">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="i in data">
                  <div class="project-item">
                    <a :href="i.url" class="project-img ">
                      <img :src="`/images/${i.image}`" :alt="i.title" />
                    </a>
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
        alt="Shape One"
        class="shape-one ribbonRotate"
      />
      <img
        src="assets/img/project/project_shape02.png"
        alt="Shape Two"
        class="shape-two ribbonRotate"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { register } from "swiper/element/bundle";
import Swiper from "swiper";
import { onMounted } from "vue";
import projecttext from "@/assets/json/projecttext.json";
import project from "@/assets/json/project.json";

register();

export default {
  setup() {
    const data = project;
    const preproject = projecttext;

    

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

    return {
      data,
      preproject,
    };
  },
};
</script>
