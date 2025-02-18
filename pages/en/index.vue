<script lang="ts" setup>
import { ref, onMounted, defineExpose } from "vue";
import { BsWhatsapp } from "@kalimahapps/vue-icons";
const isMounted = ref(false);

// State untuk menampilkan popup
const showPopup = ref(false);

onMounted(async() => {
    await useScript({ src: '/assets/js/vendor/jquery-3.6.0.min.js', async: true, defer: true });
    await useScript({ src: '/assets/js/bootstrap.min.js', async: true, defer: true });
    await useScript({ src: '/assets/js/isotope.pkgd.min.js', async: true, defer: true });
    await useScript({ src: '/assets/js/imagesloaded.pkgd.min.js', async: true, defer: true });
    await useScript({ src: '/assets/js/jquery.magnific-popup.min.js', async: true, defer: true });
    await useScript({ src: '/assets/js/jquery.odometer.min.js', async: true, defer: true });
    await useScript({ src: '/assets/js/swiper-bundle.min.js', async: true, defer: true });
    await useScript({ src: '/assets/js/jquery.appear.js', async: true, defer: true });
    await useScript({ src: '/assets/js/slick.min.js', async: true, defer: true });
    await useScript({ src: '/assets/js/ajax-form.js', async: true, defer: true });
    await useScript({ src: '/assets/js/parallax.min.js', async: true, defer: true });
    await useScript({ src: '/assets/js/jquery.parallaxScroll.min.js', async: true, defer: true });
    await useScript({ src: '/assets/js/tween-max.js', async: true, defer: true });
    await useScript({ src: '/assets/js/wow.min.js', async: true, defer: true });
    await useScript({ src: '/assets/js/main.js', async: true, defer: true });
    isMounted.value = true;
});

defineExpose({ isMounted });
</script>
<template>
    <!--Preloader-->
    <div id="preloader" v-if="!isMounted">
        <div id="loader" class="loader">
            <div class="loader-container">
                <div class="loader-icon">
                    <img
                        src="/public/images/Logo/logo.png"
                        alt="Preloader"
                        class="tw-ml-5"
                    />
                </div>
            </div>
        </div>
    </div>
    <!--Preloader-end -->

    <!-- Custom-cursor -->
    <div class="mouseCursor cursor-outer"></div>
    <div class="mouseCursor cursor-inner"><span>Drag</span></div>
    <!-- Custom-cursor-end -->

    <div class="tw-fixed tw-bottom-5 tw-right-5 tw-z-[1000] tw-mr-20 tw-mb-4">
        <div class="tw-relative">
            <!-- Popup -->


            <!-- Button -->
            <a
                href="https://api.whatsapp.com/send/?phone=081930456886&text=Halo+saya+ingin+bertanya&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button
                    class="tw-bg-green-600 tw-flex tw-rounded-full tw-items-center tw-justify-center tw-w-14 tw-h-14 hover:tw-bg-green-700"
                    aria-label="WhatsApp"
                    @mouseover="showPopup = true"
                    @mouseleave="showPopup = false"
                >
                    <BsWhatsapp class="tw-text-white tw-w-8 tw-h-8" />
                </button>
            </a>
        </div>
    </div>

    <div
        class="tw-fixed tw-bottom-5 tw-right-5 tw-flex tw-items-center tw-z-[1000]"
    >
        <!-- Tombol WhatsApp -->
        <!-- Tombol Scroll to Top -->
        <button class="scroll-top scroll-to-target tw-mb-5" data-target="html">
            <i class="fas fa-angle-up"></i>
        </button>
    </div>

    <!-- header-area -->
    <MainPageEnNavBar />
    <!-- header-area-end -->

    <!-- main-area -->
    <main>
        <!-- banner-area -->
        <MainPageEnBanner />
        <!-- banner-area-end -->

        <!-- services-area -->
        <MainPageEnService />
        <!-- services-area-end -->

        <!-- about-area -->
        <MainPageEnAbout />
        <!-- about-area-end -->

        <!-- team-area -->
        <!-- <MainPageEnTeam/> -->
        <!-- team-area-end -->

        <!-- project-area -->
        <MainPageEnProject />
        <!-- project-area-end -->

        <!-- our-client-area -->
        <MainPageEnClients />
        <!-- our-client-area-end -->
        <!-- Service 2 Area -->
        <MainPageEnService2 />
        <!-- Service 2 Area end-->
        <!-- testimonial-area -->
        <!-- <MainPageEnTestimonial/> -->
        <!-- testimonial-area-end -->

        <!-- consultation-area -->
        <MainPageEnConsultation />
        <!-- consultation-area-end -->

        <!-- blog-area -->

        <!-- blog-area-end -->

        <!-- newsletter-area -->
        <MainPageEnNewsLetter />
        <!-- newsletter-area-end -->
    </main>
    <!-- main-area-end -->

    <!-- footer-area -->
    <Footer />
    <!-- footer-area-end -->

    <!-- JS here -->

    <!-- <Script src="js/vendor/jquery-3.6.0.min.js" async defer></Script>
    <Script src="js/bootstrap.min.js" async defer></Script>
    <Script src="js/isotope.pkgd.min.js" async defer></Script>
    <Script src="js/imagesloaded.pkgd.min.js" async defer></Script>
    <Script src="js/jquery.magnific-popup.min.js" async defer></Script>
    <Script src="js/jquery.odometer.min.js" async defer></Script>
    <Script src="js/swiper-bundle.min.js" async defer></Script>
    <Script src="js/jquery.appear.js" async defer></Script>
    <Script src="js/slick.min.js" async defer></Script>
    <Script src="js/ajax-form.js" async defer></Script>
    <Script src="js/parallax.min.js" async defer></Script>
    <Script src="js/jquery.parallaxScroll.min.js" async defer></Script>
    <Script src="js/tween-max.js" async defer></Script>
    <Script src="js/wow.min.js" async defer></Script>
    <Script src="js/main.js" async defer></Script> -->
</template>
<!--
<style scoped>
@import "@/assets/css/bootstrap.min.css";
@import "@/assets/css/animate.min.css";
@import "@/assets/css/fontawesome-all.min.css";
@import "@/assets/css/swiper-bundle.min.css";
@import "@/assets/css/magnific-popup.css";
@import "@/assets/css/slick.css";
@import "@/assets/css/default.css";
@import "@/assets/css/style.css";

</style> -->
