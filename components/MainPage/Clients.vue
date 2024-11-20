<script setup lang="ts">

import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
    AOS.init({
        duration: 600, // Animation duration in milliseconds
        once: false,   // Allow animations to repeat on scroll
        easing: "ease-in-out", // Smooth animation easing
        anchorPlacement: "top-bottom", // Specifies animation start point
    });
});

</script>

<template>
    <!-- Our Client Start -->
    <section class="client-area pt-120 pb-120" >
        <div class="container">
            <div class="row justify-content-center" >
                <div class="col-xl-6 col-lg-8">
                    <div
                        class="section-title title-style-two text-center mb-55" data-aos = "flip-up" data-aos-duration="800"
                    >
                        <span class="sub-title">Our Clients</span>
                        <h2 class="title">
                            Kami Bekerja Dengan Lebih Dari 175+ Klien
                        </h2>
                        <p>
                            Kami telah bekerja dengan berbagai merek dan
                            perusahaan di seluruh dunia. Dari desain web hingga
                            pemasaran digital, kami telah membantu klien kami
                            mencapai tujuan bisnis mereka.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row brand-active">
                <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="200" >
                        <img src="assets/img/brand/h3_brand_img01.png" alt=""  />
                    </div>
                </div>
                <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="500" >
                        <img src="assets/img/brand/h3_brand_img02.png" alt="" />
                    </div>
                </div>
                <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="800" >
                        <img src="assets/img/brand/h3_brand_img03.png" alt="" />
                    </div>
                </div>
                <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="1100" >
                        <img src="assets/img/brand/h3_brand_img04.png" alt="" />
                    </div>
                </div>
                <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="1400" >
                        <img src="assets/img/brand/h3_brand_img05.png" alt="" />
                    </div>
                </div>
                <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="1700" >
                        <img src="assets/img/brand/h3_brand_img06.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Our Client End -->
</template>
