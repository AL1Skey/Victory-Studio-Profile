<script lang="ts" setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { MailIcon, PhoneIcon } from "lucide-vue-next";

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
                        <h1
                            class="tw-text-3xl tw-font-bold tw-text-blue-950 tw-mb-5"
                        >
                            Kami adalah tim pengembang profesional yang
                            berdedikasi untuk membantu bisnis Anda tumbuh
                            melalui teknologi.
                        </h1>
                        <p data-aos="zoom-in-right">
                            Kami menawarkan layanan pengembangan aplikasi web
                            dan mobile yang komprehensif untuk memastikan bisnis
                            Anda dapat diakses dengan mudah di berbagai
                            platform. Dari pembuatan aplikasi yang responsif dan
                            user-friendly hingga solusi mobile yang inovatif,
                            kami menyediakan semua yang Anda butuhkan untuk
                            menghadirkan pengalaman digital yang optimal bagi
                            pengguna Anda. Dengan pendekatan yang terfokus pada
                            kualitas dan fungsionalitas, kami membantu Anda
                            menciptakan aplikasi yang tidak hanya menarik secara
                            visual tetapi juga andal dan efisien.
                        </p>
                        <div class="consultation-list">
                            <ul class="list-wrap">
                                <li data-aos="zoom-in-right">
                                    <PhoneIcon />

                                    <h6 class="title tw-ml-2">
                                        0819-3045-6886
                                    </h6>
                                </li>
                                <li data-aos="zoom-in-right ">
                                    <MailIcon />
                                    <h6 class="title tw-ml-2">
                                        hello@victorystudio.co.id
                                    </h6>
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
