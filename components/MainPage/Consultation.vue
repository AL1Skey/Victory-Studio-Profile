
<template>
    <section class="consultation-area pt-120 pb-120">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7">
                    <div class="consultation-content">
                        <h1 class="tw-text-3xl tw-font-bold tw-text-blue-950 tw-mb-5">
                            Kami adalah tim pengembang profesional yang berdedikasi untuk membantu bisnis Anda tumbuh melalui teknologi.
                        </h1>
                        <p data-aos="zoom-in-right">
                            Kami menawarkan layanan pengembangan aplikasi web dan mobile yang komprehensif untuk memastikan bisnis Anda dapat diakses dengan mudah di berbagai platform.
                        </p>
                        <div class="consultation-list">
                            <ul class="list-wrap">
                                <li data-aos="zoom-in-right">
                                    <PhoneIcon />
                                    <h6 class="title tw-ml-2">0819-3045-6886</h6>
                                </li>
                                <li data-aos="zoom-in-right">
                                    <MailIcon />
                                    <h6 class="title tw-ml-2">hello@victorystudio.co.id</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5" data-aos="flip-left">
                    <div class="consultation-form-wrap">
                        <h4 class="title">Free Consultation</h4>
                        <form @submit.prevent="handleSubmit">
                            <div class="form-grp">
                                <input v-model="name" type="text" placeholder="Name" />
                            </div>
                            <div class="form-grp">
                                <input v-model="email" type="email" placeholder="Email Address" />
                            </div>
                            <div class="form-grp">
                                <input v-model="phone" type="text" placeholder="Phone Number" />
                            </div>
                            <div class="form-grp">
                                <select v-model="subject" id="subjectSelect" name="select" class="form-select">
                                    <option value="">Subject</option>
                                    <option value="Design UI/UX">Design UI/UX</option>
                                    <option value="Company Profile">Company Profile</option>
                                    <option value="Website Custom">Website Custom</option>
                                    <option value="Aplikasi Mobile">Aplikasi Mobile</option>
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
    </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// Data binding for form
const name = ref('');
const email = ref('');
const phone = ref('');
const subject = ref('');

// Function to handle form submission
const handleSubmit = () => {
    // Construct the email body
    const body = `
        Name: ${name.value}
        Email: ${email.value}
        Phone: ${phone.value}
        Subject: ${subject.value}
    `.trim();

    // Send email using backend
    fetch('https://victorystudio.co.id/mail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            phone: phone.value,
            subject: subject.value,
            message: body
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Email sent successfully!');
        } else {
            alert('Failed to send email.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the email.'+error);
    });
};
</script>

<style scoped>
/* Add your styles here, if needed */
</style>
