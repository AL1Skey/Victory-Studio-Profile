<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Inisialisasi AOS
onMounted(() => {
    AOS.init({
        duration: 1000, // Durasi animasi dalam milidetik
        once: true, // Animasi hanya berjalan satu kali
        easing: "ease-in-out", // Efek easing animasi
    });
});
</script>

<template>
    <section class="banner-area banner-bg ">
        <div class="container tw-mt-20">
            <div class="row align-items-center">
                <!-- Banner Image -->
                <div class="col-lg-6">
                    <div
                        class="banner-img"
                        data-aos="fade-left"
                        data-aos-duration="1500"
                    >
                        <img
                            src="assets/img/banner/banner_img.png"
                            alt="Banner Image"
                        />
                    </div>
                </div>

                <!-- Banner Content -->
                <div class="col-lg-6">
                    <div class="banner-content">
                        <!-- Sub-title -->

                        <!-- Swiper Slider -->
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
                                <h2
                                    class="title"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    Grow Your Business Using Our Services
                                </h2>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h2
                                    class="title"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    Jasa Pembuatan Website Profesional
                                </h2>
                            </SwiperSlide>
                        </Swiper>

                        <!-- Contact Button -->
                        <a
                            href="https://api.whatsapp.com/send?phone=6281930456886&text=Halo%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website."
                            class="btn"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            Contact Us <span></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Decorative Shapes -->
        <div class="banner-shape-wrap">
            <img
                src="assets/img/banner/banner_shape01.png"
                alt="Shape 1"
                data-aos="fade-in"
            />
            <img
                src="assets/img/banner/banner_shape02.png"
                alt="Shape 2"
                class="animationFramesOne"
                data-aos="fade-down"
            />
            <img
                src="assets/img/banner/banner_shape03.png"
                alt="Shape 3"
                class="contactSwimmer"
                data-aos="fade-up"
            />
            <img
                src="assets/img/banner/banner_shape04.png"
                alt="Shape 4"
                class="rotateme"
                data-aos="fade-right"
            />
            <img
                src="assets/img/banner/banner_shape05.png"
                alt="Shape 5"
                class="animation1"
                data-aos="fade-left"
            />
            <img
                src="assets/img/banner/banner_shape06.png"
                alt="Shape 6"
                class="ribbonRotate"
                data-aos="zoom-in"
            />
            <img
                src="assets/img/banner/banner_shape07.png"
                alt="Shape 7"
                class="float-bob-x"
                data-aos="fade-up"
            />
        </div>
    </section>
</template>

<style scoped>
/* General styles */
.banner-area {
    position: relative;
    overflow: hidden;
    padding: 80px 0;
}

.banner-img img {
    max-width: 100%;
}

/* Decorative Shapes */
.banner-shape-wrap img {
    position: absolute;
    z-index: -1;
}

.banner-shape-wrap img.animationFramesOne {
    animation: float 3s ease-in-out infinite;
}

.banner-shape-wrap img.contactSwimmer {
    animation: swim 4s linear infinite;
}

.banner-shape-wrap img.rotateme {
    animation: rotate 6s linear infinite;
}

.banner-shape-wrap img.animation1 {
    animation: zoom 5s ease-in-out infinite;
}

.banner-shape-wrap img.float-bob-x {
    animation: float-bob 3s ease-in-out infinite;
}

/* Animations */
@keyframes float {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes swim {
    0%,
    100% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-15px);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes zoom {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}

@keyframes float-bob {
    0%,
    100% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(5px);
    }
}
</style>
