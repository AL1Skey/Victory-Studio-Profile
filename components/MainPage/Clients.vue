<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";


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
    <!-- Our Client Start -->
    <section class="client-area pt-120 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-8">
                    <div
                        class="section-title title-style-two text-center mb-55"
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
                    <div class="brand-item">
                        <img src="assets/img/brand/h3_brand_img01.png" alt="" />
                    </div>
                </div>
                <div class="col-12">
                    <div class="brand-item">
                        <img src="assets/img/brand/h3_brand_img02.png" alt="" />
                    </div>
                </div>
                <div class="col-12">
                    <div class="brand-item">
                        <img src="assets/img/brand/h3_brand_img03.png" alt="" />
                    </div>
                </div>
                <div class="col-12">
                    <div class="brand-item">
                        <img src="assets/img/brand/h3_brand_img04.png" alt="" />
                    </div>
                </div>
                <div class="col-12">
                    <div class="brand-item">
                        <img src="assets/img/brand/h3_brand_img05.png" alt="" />
                    </div>
                </div>
                <div class="col-12">
                    <div class="brand-item">
                        <img src="assets/img/brand/h3_brand_img06.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Our Client End -->
</template>
