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
    <!-- developr-area -->
    <section class="developr-area-two pb-120">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 col-md-9 order-0 order-lg-2">
                    <div class="developr-img">
                        <img
                            src="assets/developer_img.png"
                            alt=""
                            data-aos="fade-left"
                        />

                        <div class="work-experience-wrap" data-aos="fade-left">
                            <h2 class="count">
                                <span class="odometer" data-count="18"></span>+
                            </h2>
                            <p>Years Of Experience</p>
                        </div>

                        <div
                            class="project-completed-wrap"
                            data-aos="fade-left"
                        >
                            <h2 class="count">
                                <span class="odometer" data-count="5"></span>K+
                            </h2>
                            <p>Have Faithfully Completed Projects Till Date</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="developr-content-two">
                        <div
                            class="section-title title-style-two mb-20"
                            data-aos="fade-right"
                        >
                            <span class="sub-title">What We Do</span>
                            <h2 class="title">
                                Kami merancang dan mengembangkan aplikasi web
                                dan mobile untuk klien kami di seluruh dunia
                            </h2>
                        </div>

                        <p data-aos="fade-right">
                            Kami adalah tim pengembang web dan mobile yang
                            berdedikasi untuk membantu bisnis Anda tumbuh. Kami
                            menawarkan layanan pengembangan web dan mobile yang
                            komprehensif untuk membantu Anda mencapai tujuan
                            bisnis Anda. Dari desain web hingga pengembangan
                            aplikasi mobile, kami memiliki semua yang Anda
                            butuhkan untuk mengembangkan bisnis Anda secara
                            online.
                        </p>
                        <div class="developr-social">
                            <!-- <ul class="list-wrap">
                <li>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-vimeo-v"></i></a>
                </li>
              </ul> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- developr-area-end -->
</template>
