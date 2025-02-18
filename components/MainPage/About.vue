<script lang="ts" setup>
import about from "@/assets/json/aboutus.json";
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../assets/logo.png";

onMounted(() => {
    AOS.init({
        duration: 600, 
        once: false, // Allow animations to repeat on scroll
        easing: "ease-in-out", // Smooth animation easing
        anchorPlacement: "top-bottom", // Specifies animation start point
    });
});

const data = about;
</script>

<template>
    <section
        className="about-area pt-120 pb-120 rounded-sm tw-mb-10  "
        class="about-area"
        id="about-area"
        data-aos-anchor-placement="top-bottom"
    >
        <div class="container custom-container ">
            <div class="about-inner  tw-rounded-1/2">
                <div
                    class="row align-items-center justify-content-center "
                >
                    <div class="col-46 order-0 order-lg-2" data-aos="fade-left">
                        <div class="about-img text-end">
                            <img loading="lazy" src="assets/logo1.jpg" alt="" class="tw-w-[1200px]" />
                        </div>
                    </div>
                    <div class="col-54">
                        <div class="about-content">
                            <div
                                class="section-title mb-25"
                                data-aos="zoom-out-up"
                                data-aos-duration="300"
                            >
                                <span class="tw-font-bold tw-text-2xl"
                                    >About Company</span
                                >
                                <h2 class="title">
                                    {{ data[0].title }}
                                </h2>
                            </div>
                            <p data-aos="zoom-out-up" data-aos-duration="500">
                                {{ data[0].description }}
                            </p>
                            <ul class="list-wrap">
                                <li
                                    data-aos="zoom-out-up"
                                    data-aos-duration="700"
                                >
                                    <div class="icon">
                                        <img loading="lazy"
                                            src="assets/img/icon/about_icon01.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Visi</h4>
                                        <p data-aos-duration="900">
                                            {{ data[0].visi }}
                                        </p>
                                    </div>
                                </li>
                                <li
                                    data-aos="zoom-out-up"
                                    data-aos-duration="1100"
                                >
                                    <div class="icon">
                                        <img loading="lazy"
                                            src="assets/img/icon/about_icon02.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Misi</h4>
                                        <p>
                                            {{ data[0].misi }}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <div
                                class="about-content-bottom"
                                data-aos="zoom-out-up"
                            >
                                <span>{{ data[0].additional_info }}</span>
                                <div class="read-more-btn">
                                    <a href="https://api.whatsapp.com/send?phone=6281930456886&text=Halo%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website." class="btn"
                                        >Contact Us <span></span
                                    ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
