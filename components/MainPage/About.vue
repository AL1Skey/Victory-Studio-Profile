<script lang="ts" setup>
import about from '@/assets/json/aboutus.json'
import { ref } from 'vue'
const data = about
</script>

<template>
    <section class="about-area" id="about-area">
      <div class="container custom-container">
        <div class="about-inner">
          <div class="row align-items-center justify-content-center">
            <div class="col-46 order-0 order-lg-2">
              <div class="about-img text-end">
                <img src="assets/img/images/about_img.jpg" alt="" />
              </div>
            </div>
            <div class="col-54">
              <div class="about-content">
                <div class="section-title mb-25">
                  <span class="sub-title">About Company</span>
                  <h2 class="title">
                    {{ data[0].title }}
                  </h2>
                </div>
                <p>
                  {{ data[0].description }}
                </p>
                <ul class="list-wrap">
                  <li>
                    <div class="icon">
                      <img src="assets/img/icon/about_icon01.png" alt="" />
                    </div>
                    <div class="content">
                      <h4 class="title">Visi</h4>
                      <p>
                        {{ data[0].visi }}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <img src="assets/img/icon/about_icon02.png" alt="" />
                    </div>
                    <div class="content">
                      <h4 class="title">Misi</h4>
                      <p>
                        {{ data[0].misi }}
                      </p>
                    </div>
                  </li>
                </ul>
                <div class="about-content-bottom">
                  <span>{{ data[0].additional_info }}</span>
                  <div class="read-more-btn">
                    <a href="about-us.html" class="btn"
                      >Contact Us <span></span
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
