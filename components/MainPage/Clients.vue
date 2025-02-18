<script setup lang="ts">

import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
const glob = import.meta.glob('@/assets/img/brand/*.webp', { eager: true });
const clientImages = Object.values(glob).map((some:any) => some.default);

onMounted(() => {
    AOS.init({
        duration: 600,
        once: false,
        easing: "ease-in-out",
        anchorPlacement: "top-bottom",
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


                    </div>
                </div>
            </div>



            <div class="row brand-active">
                <div class="col-12" v-for="(image,index) in clientImages" :key="index">
                    <div class="brand-item !tw-bg-white" data-aos="flip-down"  data-aos-duration="200" >
                        <!-- <img loading="lazy" :src="`/img/brand/client${index + 1}.webp`" alt="" class=""  /> -->
                        <img loading="lazy" :src="image" alt="" class="tw-w-3/4 tw-h-3/4"  />
                    </div>
                </div>
                <!-- <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="200" >
                        <img loading="lazy" src="assets/img/brand/client2.webp" alt=""  />
                    </div>
                </div> <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="200" >
                        <img loading="lazy" src="assets/img/brand/client3.webp" alt=""  />
                    </div>
                </div> <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="200" >
                        <img loading="lazy" src="assets/img/brand/client4.webp" alt=""  />
                    </div>
                </div> <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="200" >
                        <img loading="lazy" src="assets/img/brand/client5.webp" alt=""  />
                    </div>
                </div> <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="200" >
                        <img loading="lazy" src="assets/img/brand/client6.webp" alt=""  />
                    </div>
                </div> <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="200" >
                        <img loading="lazy" src="assets/img/brand/client7.webp" alt=""  />
                    </div>
                </div> <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="200" >
                        <img loading="lazy" src="assets/img/brand/client8.webp" alt=""  />
                    </div>
                </div> <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="200" >
                        <img loading="lazy" src="assets/img/brand/client1.webp" alt=""  />
                    </div>
                </div> <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="200" >
                        <img loading="lazy" src="assets/img/brand/client9.webp" alt=""  />
                    </div>
                </div> <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="200" >
                        <img loading="lazy" src="assets/img/brand/client10.webp" alt=""  />
                    </div>
                </div> <div class="col-12">
                    <div class="brand-item" data-aos="flip-down"  data-aos-duration="200" >
                        <img loading="lazy" src="assets/img/brand/client10.webp" alt=""  />
                    </div>
                </div> -->






            </div>
        </div>
    </section>
    <!-- Our Client End -->
</template>
