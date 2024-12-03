<script lang="ts" setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
    AOS.init({
        duration: 600, // Durasi animasi dalam milidetik
        once: false, // Mengizinkan animasi diulang saat scroll
        easing: "ease-in-out", // Easing untuk animasi yang halus
        anchorPlacement: "top-bottom", // Posisi awal animasi
    });
});
</script>

<template>
    <section class="services-area pt-35 pb-95 tw-pt-36" id="services-area">
        <div class="container">
            <div class="row justify-content-center">
                <!-- Card 1: UI/UX Design -->
                <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-10"
                    data-aos="zoom-in"
                >
                    <div
                        class="services-item wow fadeInUp"
                        data-wow-delay=".2s"
                    >
                        <div class="services-icon">
                            <img
                                src="assets/img/icon/services_icon01.png"
                                alt="UI/UX Design Icon"
                            />
                        </div>
                        <div
                            class="services-content"
                            data-aos="zoom-in"
                            data-aos-duration="300"
                        >
                            <h4 class="title">
                                <a href="services-details.html"
                                    >Desain UI/UX Profesional</a
                                >
                            </h4>
                            <p>
                                Kami menyediakan solusi desain UI/UX yang
                                inovatif untuk menciptakan pengalaman pengguna
                                yang intuitif dan menarik. Produk Anda akan
                                memiliki desain yang estetis, mudah digunakan,
                                dan memberikan dampak positif.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Company Profile -->
                <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-10"
                    data-aos="zoom-in"
                >
                    <div
                        class="services-item wow fadeInUp"
                        data-wow-delay=".4s"
                    >
                        <div class="services-icon">
                            <img
                                src="assets/img/icon/inner_services_icon02.png"
                                alt="Company Profile Icon"
                            />
                        </div>
                        <div
                            class="services-content"
                            data-aos="zoom-in"
                            data-aos-duration="400"
                        >
                            <h4 class="title">
                                <a href="services-details.html"
                                    >Website Company Profile</a
                                >
                            </h4>
                            <p>
                                Tingkatkan citra bisnis Anda dengan profil
                                perusahaan yang elegan dan profesional. Kami
                                menciptakan materi yang mencerminkan identitas
                                brand Anda, memperkuat kepercayaan klien dan
                                mendorong pertumbuhan bisnis.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Custom Website -->
                <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-10"
                    data-aos="zoom-in"
                >
                    <div
                        class="services-item wow fadeInUp"
                        data-wow-delay=".6s"
                    >
                        <div class="services-icon">
                            <img
                                src="assets/img/icon/h3_services_icon02.png"
                                alt="Custom Website Icon"
                            />
                        </div>
                        <div
                            class="services-content"
                            data-aos="zoom-in"
                            data-aos-duration="500"
                        >
                            <h4 class="title">
                                <a href="services-details.html"
                                    >Pembuatan Website Kustom</a
                                >
                            </h4>
                            <p>
                                Kami menghadirkan layanan pembuatan website
                                responsif dan modern. Desain kami memastikan
                                pengalaman pengguna yang optimal di berbagai
                                perangkat dan memastikan bahwa website akan
                                menarik perhatian pengunjung
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Mobile App -->
                <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-10"
                    data-aos="zoom-in"
                >
                    <div
                        class="services-item wow fadeInUp"
                        data-wow-delay=".8s"
                    >
                        <div class="services-icon">
                            <img
                                src="assets/img/icon/edit.png"
                                alt="Mobile App Icon"
                            />
                        </div>
                        <div
                            class="services-content"
                            data-aos="zoom-in"
                            data-aos-duration="600"
                        >
                            <h4 class="title">
                                <a href="services-details.html"
                                    >Pengembangan Aplikasi Mobile</a
                                >
                            </h4>
                            <p>
                                Kami menawarkan layanan pengembangan aplikasi
                                mobile yang intuitif dan inovatif. Fokus kami
                                adalah menciptakan aplikasi dengan pengalaman
                                pengguna yang luar biasa. sehingga ramah untuk
                                digunakan dan lebih efesient
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
