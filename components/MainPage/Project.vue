<template>
    <section
        class="project-area md:tw-rounded-l-full tw-bg-gradient-to-r tw-from-blue-800 tw-via-purple-800 tw-to-pink-500"
        id="project-area"
    >
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-4">
                    <div class="project-content">
                        <div
                            class="section-title white-title mb-30"
                            data-aos="fade-right"
                        >
                            <span class="sub-title">Our Complete Craft</span>
                            <h2 class="title">{{ preproject[0].title }}</h2>
                        </div>
                        <p data-aos="fade-right ">
                            {{ preproject[0].description }}
                        </p>
                        <div class="content-bottom">
                            <a
                                data-aos="fade-right"
                                href="https://api.whatsapp.com/send?phone=6281930456886&text=Halo%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website."
                                class="btn"
                                >Contact Us <span></span
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="project-item-wrap">
                        <div class="project-active" data-aos="fade-left">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="i in data">
                                    <div class="project-item">
                                        <a :href="i.url" class="project-img">
                                            <img
                                                :src="`/images/${i.image}`"
                                                :alt="i.title"
                                                class="tw-h-[400px] hover:tw-scale-105 tw-bg-contain tw-bg-no-repeat tw-outline tw-outline-4 tw-outline-purple-300 hover:tw-opacity-60"
                                            />
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
import AOS from "aos";
import "aos/dist/aos.css";
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
            AOS.init({
                duration: 600, // Animation duration in milliseconds
                once: false, // Allow animations to repeat on scroll
                easing: "ease-in-out", // Smooth animation easing
                anchorPlacement: "top-bottom", // Specifies animation start point
            });
            const swiper = new Swiper(".project-active", {
                loop: true, // Enables looping
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                slidesPerView: 4,
                spaceBetween: 230,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
            });
        });

        return {
            data,
            preproject,
        };
    },
};
</script>
