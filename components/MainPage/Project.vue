<template>
    <section
        class="project-area md:tw-rounded-l-full tw-bg-blue-950"
        id="project-area"
    >
        <div class="container tw-h-full">
            <div class="row align-items-center">
                <div class="col-xl-4">
                    <div class="project-content">
                        <div
                            class="section-title white-title"
                            data-aos="fade-right"
                        >
                            <span class="sub-title">Our Complete Craft</span>
                            <h2 class="title">{{ preproject[0]?.title }}</h2>
                        </div>
                        <p data-aos="fade-right">
                            {{ preproject[0]?.description }}
                        </p>
                        <div class="content-bottom">
                            <a
                                data-aos="fade-right"
                                href="https://api.whatsapp.com/send?phone=6281930456886&text=Halo%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website."
                                class="btn"
                            >
                                Contact Us <span></span>
                            </a>
                        </div>
                    </div>
                </div>
                <swiper
                    :navigation="true"
                    :autoplay="{ delay: 3000, disableOnInteraction: false }"
                    :modules="[Navigation, Autoplay]"
                    class="mySwiper tw-w-[1000px] tw-rounded-3xl tw-items-center"
                    data-aos="fade-left"
                >
                    <swiper-slide >
                        <a href="https://pintarlabs.web.app/">
                            <img
                                src="assets/2.png"
                                alt=""
                                class="tw-w-[1000px]"
                            />
                        </a>
                    </swiper-slide>
                    <swiper-slide >
                        <a href="https://pintarlabs.web.app/">
                            <img
                                src="assets/7.png"
                                alt=""
                                class="tw-w-[1000px]"
                            />
                        </a>
                    </swiper-slide>

                    <swiper-slide>
                        <a href="https://topazmaritime.co.id/">
                            <img
                                src="assets/1.png"
                                alt=""
                                class="tw-w-[1000px]"
                            />
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="https://mts-pesri-kendari.sch.id/">
                            <img
                                src="assets/5.png"
                                alt=""
                                class="tw-w-[1000px]"
                            />
                        </a>
                    </swiper-slide>

                    <swiper-slide>
                        <a href="https://zainufirdaus.web.app/">
                            <img
                                src="assets/3.png"
                                alt=""
                                class="tw-w-[1000px]"
                            />
                        </a>
                    </swiper-slide>

                    <swiper-slide>
                        <a href="https://iaajofficial.com/">
                            <img
                                src="assets/4.png"
                                alt=""
                                class="tw-w-[1000px]"
                            />
                        </a>
                    </swiper-slide>

                    <swiper-slide>
                        <a href="https://risharchery.com/">
                            <img
                                src="assets/6.png"
                                alt=""
                                class="tw-w-[1000px]"
                            />
                        </a>
                    </swiper-slide>
                </swiper>
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
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigation, Autoplay } from "swiper/modules"; // Mengimpor modul Autoplay dan Navigation
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

import projecttext from "@/assets/json/projecttext.json";
import project from "@/assets/json/project.json";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const data = project;
        const preproject = projecttext;

        onMounted(() => {
            // Inisialisasi AOS library
            AOS.init({
                duration: 600,
                once: false,
                easing: "ease-in-out",
                anchorPlacement: "top-bottom",
            });
        });

        return {
            data,
            preproject,
            Navigation,
            Autoplay, // Menambahkan modul Autoplay
        };
    },
};
</script>

<style scoped>
/* Tambahkan styling kustom jika diperlukan */
</style>
