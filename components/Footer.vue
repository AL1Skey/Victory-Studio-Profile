<!-- <script lang="ts" >
import footerData from "@/public/json/footer.json";
const data = footerData;
export default {
  data() {
    return {
      data: footerData,
    };
  },
};
</script> -->
<script lang="ts" setup>
import footerData from "@/public/json/footer.json";
const data = footerData;

</script>
<template>
 <footer id="footer-area">
    <div class="footer-area">
      <div class="footer-top">
        <div class="container" >
          <div class="row" style="justify-content: space-between !important;">
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget">
                <div class="logo">
                  <a href="/"
                    ><img src="/public/images/Logo/Artboard 1.png" alt=""
                  /></a>
                </div>
                <!-- <div class="footer-social">
                  <ul class="list-wrap">
                    <li>
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="active">
                      <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-google-plus-g"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div> -->
                <div class="footer-contact">
                  <span>For Support</span>
                  <h2 class="title">
                    <a href="https://api.whatsapp.com/send?phone=6281930456886&text=Halo%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website.">{{ data[0].phone }}</a>
                  </h2>
                </div>
              </div>
            </div>
            <!-- <div class="col-lg-3 col-sm-6">
              <div class="footer-widget">
                <h4 class="fw-title">Primary Pages</h4>
                <div class="fw-link">
                  <ul class="list-wrap">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about-area">About</a></li>
                    <li><a href="#services-area">Service</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget">
                <h4 class="fw-title">Pages</h4>
                <div class="fw-link">
                  <ul class="list-wrap">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about-area">About</a></li>
                    <li><a href="#services-area">Service</a></li>
                  </ul>
                </div>
              </div>
            </div> -->
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget">
                <h4 class="fw-title">About Store</h4>
                <div class="footer-about">
                  <ul class="list-wrap">
                    <li>
                      <img src="assets/img/icon/phone_icon.svg" alt="" /><a
                        href="https://api.whatsapp.com/send?phone=6281930456886&text=Halo%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website."
                        >{{ data[0].phone }}</a
                      >
                    </li>
                    <li>
                      <img src="assets/img/icon/mail_icon.svg" alt="" /><a
                        href="mailto:company@gmail.com"
                        >{{ data[0].email }}</a
                      >
                    </li>
                    <li>
                      <img src="assets/img/icon/loction_icon.svg" alt="" /><span
                        >{{ data[0].address }}</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row align-items-center">
            <!-- <div class="col-md-6">
              <div class="cart-img">
                <img src="assets/img/images/cart_img.png" alt="" />
              </div>
            </div> -->
            <div class="col-md-6">
              <div class="copyright-text text-end">
                <p>© 2024 Victory Studio. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>