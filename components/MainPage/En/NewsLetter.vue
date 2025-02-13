<script lang="ts" setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
    AOS.init({
        duration: 600, // Animation duration in milliseconds
        once: false, // Allow animations to repeat on scroll
        easing: "ease-in-out", // Smooth animation easing
        anchorPlacement: "top-bottom", // Specifies animation start point
    });
});
</script>


<template>
<section class="newsletter-area pt-110 pb-120" data-aos="fade-up"
data-aos-anchor-placement="center-bottom">
      <!-- <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="section-title text-center mb-80">
              <span class="sub-title">Get update</span>
              <h2 class="title">
                Get latest updates <br />
                and dealsi
              </h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="newsletter-form">
              <form action="#">
                <input type="email" placeholder="Enter your email address" />
                <button type="submit" class="btn">
                  Subscribe <span></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> -->
      <div class="newsletter-shape-wrap">
        <img
          src="assets/img/images/newsletter_bg_shape.png"
          alt=""
          class="bg-shape"
        />
        <img
          src="assets/img/images/newsletter_shape01.png"
          alt=""
          class="shape-one"
        />
        <img
          src="assets/img/images/newsletter_shape02.png"
          alt=""
          class="shape-two"
        />
        <img
          src="assets/img/images/newsletter_shape03.png"
          alt=""
          class="shape-three"
        />
        <img
          src="assets/img/images/newsletter_shape04.png"
          alt=""
          class="shape-four"
        />
        <img
          src="assets/img/images/newsletter_shape05.png"
          alt=""
          class="shape-five"
        />
        <img
          src="assets/img/images/newsletter_shape06.png"
          alt=""
          class="shape-six"
        />
      </div>
    </section>
</template>
