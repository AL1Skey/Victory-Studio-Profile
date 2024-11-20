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
    <section class="services-area pt-35 pb-95" id="services-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10" data-aos="zoom-in"
                >
                    <div
                        class="services-item wow fadeInUp"
                        data-wow-delay=".2s"
                    >
                        <div class="services-icon">
                            <img
                                src="assets/img/icon/services_icon01.png"
                                alt=""
                            />
                        </div>
                        <div class="services-content" data-aos="zoom-in" data-aos-duration="300"
>
                            <h4 class="title" >
                                <a href="services-details.html">UIUX Design</a>
                            </h4>
                            <p >
                                Kami menyediakan layanan desain UI/UX yang
                                komprehensif untuk menciptakan pengalaman
                                pengguna yang intuitif dan menarik. Tim kami
                                memastikan bahwa produk Anda tidak hanya menarik
                                secara visual tetapi juga mudah digunakan.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10" data-aos="zoom-in"
                >
                    <div
                        class="services-item wow fadeInUp"
                        data-wow-delay=".4s"
                    >
                        <div class="services-icon">
                            <img
                                src="assets/img/icon/services_icon02.png"
                                alt=""
                            />
                        </div>
                        <div class="services-content" data-aos="zoom-in" data-aos-duration="400"
                        >
                            <h4 class="title">
                                <a href="services-details.html"
                                    >Product Design</a
                                >
                            </h4>
                            <p>
                                Kami menawarkan layanan desain produk yang
                                inovatif dan fungsional. Tim kami bekerja sama
                                dengan Anda untuk mengembangkan produk yang
                                tidak hanya memenuhi kebutuhan pasar tetapi juga
                                memberikan nilai tambah bagi pengguna.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10" data-aos="zoom-in"
                >
                    <div
                        class="services-item wow fadeInUp"
                        data-wow-delay=".6s"
                    >
                        <div class="services-icon">
                            <img
                                src="assets/img/icon/services_icon03.png"
                                alt=""
                            />
                        </div>
                        <div class="services-content" data-aos="zoom-in" data-aos-duration="500"
                        >
                            <h4 class="title">
                                <a href="services-details.html"
                                    >Website Design</a
                                >
                            </h4>
                            <p >
                                Kami menyediakan layanan desain website yang
                                responsif dan menarik. Tim kami memastikan bahwa
                                website Anda tidak hanya terlihat profesional
                                tetapi juga memberikan pengalaman pengguna yang
                                optimal di berbagai perangkat.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10" data-aos="zoom-in"
                >
                    <div
                        class="services-item wow fadeInUp"
                        data-wow-delay=".8s"
                    >
                        <div class="services-icon">
                            <img
                                src="assets/img/icon/services_icon04.png"
                                alt=""
                            />
                        </div>
                        <div class="services-content" data-aos="zoom-in" data-aos-duration="600"
                        >
                            <h4 class="title">
                                <a href="services-details.html"
                                    >Branding Design</a
                                >
                            </h4>
                            <p>
                                Kami menawarkan layanan desain branding yang
                                membantu Anda menciptakan identitas merek yang
                                kuat dan konsisten. Tim kami bekerja untuk
                                memastikan bahwa merek Anda memiliki daya tarik
                                visual yang kuat dan dapat dikenali di berbagai
                                platform.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
