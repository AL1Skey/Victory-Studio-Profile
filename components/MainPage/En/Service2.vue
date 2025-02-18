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
                    <div class="developr-img tw-m-4">
                        <img loading="lazy"
                            src="assets/logo2.jpg"
                            alt=""
                            data-aos="fade-left"
                            class="tw-h-[500px]"
                        />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="developr-content-two">
                        <div
                            class="section-title title-style-two mb-20"
                            data-aos="fade-right"
                        >
                            <p class="tw-font-bold tw-text-2xl">
                                Did you know that customer trust in a company or organization increases if it has a website
                            </p>
                        </div>

                        <p data-aos="fade-right tw-text-justify">
                            You may have thought about building a brand through microsites or social media. However, it is still not optimal because social media cannot fully represent your brand. Additionally, having a website will optimize your promotions. A website will introduce your business to the world anytime, anywhere. A website is like a marketing tool that never stops promoting, even when you are asleep. We understand this, and we are here to help grow your business. Our website creation service package is an all-in-one package. You don't need to worry about design, domain, hosting, or the technical aspects of creating and maintaining a website. Everything is included in a complete package. Just provide us with the materials for your website in the form of a company profile, brochure, or anything about your business. We will create, maintain, and optimize the website for you.
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
