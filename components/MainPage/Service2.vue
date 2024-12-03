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
                        <img
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
                                Tahukah anda, bahwa tingkat kepercayaan
                                pelanggan terhadap suatu perusahaan atau
                                organisasi lebih meningkat jika memiliki website
                            </p>
                        </div>

                        <p data-aos="fade-right tw-text-justify">
                            Mungkin anda pernah berpikir dapat membangun brand
                            dari microsite atau social media. Namun tetap saja
                            tidak maksimal. Karena sosial media tidak bisa
                            mewakili brand anda. Selain itu, dengan memiliki
                            website akan mengoptimalkan promosi. Website akan
                            memperkenalkan usaha yang anda jalani ke seluruh
                            dunia kapanpun, dimanapun. Website seperti alat
                            marketing yang tak henti-hentinya berpromosi,
                            meskipun anda sedang tidur. Kami mengerti akan hal
                            itu, dan kami hadir untuk membantu mengembangkan
                            usaha anda. Paket jasa pembuatan website kami adalah
                            paket all in one. Anda tidak perlu memikirkan
                            desain, domain, hosting, atau teknik pembuatan dan
                            perawatan website. Semua sudah dirangkum dalam paket
                            yang lengkap. Cukup berikan kami materi untuk
                            website anda dalam bentuk company profile, brosur
                            atau apapun mengenai usaha anda. Kami akan buatkan
                            websitenya, merawat dan mengoptimalkannya.
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
