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
    <section class="consultation-area pt-120 pb-120">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7">
                    <div class="consultation-content">
                        <div
                            class="section-title mb-25"
                            data-aos="zoom-in-right"
                        >
                            <img
                                src="assets/img/icon/consultation_icon01.png"
                                alt=""
                            />
                            <span class="sub-title">95% Accuracy</span>
                            <h2 class="title">
                                Agensi Pemasaran Digital Terbaik di Dunia
                            </h2>
                        </div>
                        <p data-aos="zoom-in-right">
                            Kami adalah agensi pemasaran digital yang
                            berdedikasi untuk membantu bisnis Anda tumbuh. Kami
                            menawarkan layanan pemasaran digital yang
                            komprehensif untuk membantu Anda mencapai tujuan
                            bisnis Anda. Dari desain web hingga strategi
                            pemasaran konten, kami memiliki semua yang Anda
                            butuhkan untuk mengembangkan bisnis Anda secara
                            online.
                        </p>
                        <div class="consultation-list">
                            <ul class="list-wrap">
                                <li data-aos="zoom-in-right">
                                    <div class="icon">
                                        <img
                                            src="assets/img/icon/consultation_icon02.png"
                                            alt=""
                                        />
                                        <span>12x</span>
                                    </div>
                                    <div class="content">
                                        <h6 class="title">
                                            Faster Order Processing
                                        </h6>
                                    </div>
                                </li>
                                <li data-aos="zoom-in-right">
                                    <div class="icon">
                                        <img
                                            src="assets/img/icon/consultation_icon03.png"
                                            alt=""
                                        />
                                        <span>95%</span>
                                    </div>
                                    <div class="content">
                                        <h6 class="title">
                                            Processing Accuracy
                                        </h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5" data-aos="flip-left">
                    <div class="consultation-form-wrap">
                        <h4 class="title">Free Consultation</h4>
                        <form action="#">
                            <div class="form-grp">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div class="form-grp">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div class="form-grp">
                                <input type="text" placeholder="Phone Number" />
                            </div>
                            <div class="form-grp">
                                <select
                                    id="shortBy"
                                    name="select"
                                    class="form-select"
                                    aria-label="Default select example"
                                >
                                    <option value="">Subject</option>
                                    <option>Subject One</option>
                                    <option>Subject Two</option>
                                    <option>Subject Three</option>
                                    <option>Subject Four</option>
                                </select>
                            </div>
                            <button class="btn" type="submit">
                                Consultation
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="consultation-shape-wrap">
            <img
                src="assets/img/images/consultation_shape01.png"
                alt=""
                class="shape-one ribbonRotate"
            />
            <img
                src="assets/img/images/consultation_shape02.png"
                alt=""
                class="shape-two float-bob-x"
            />
        </div>
    </section>
</template>
