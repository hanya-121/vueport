<template>

  <!-- Slider Start -->
  <v-carousel
  v-model="current"
  :height="carouselHeight"
  hide-delimiter-background
  cycle
  :show-arrows="false"
  class="responsive-carousel"
  >
      <v-carousel-item
      v-for="(slider, index) in sliders"
      :key="slider.id"
      >
          <v-sheet class="slider-wrap d-flex flex-column align-center justify-center" height="100%">
          <v-img
          :src="slider.poster_path"
          width="100%"
          cover
          ></v-img>
          <div class="slider-text">
              <h2 class="text-h6 mb-2 text-center text-white"> {{ slider.title }} </h2>
              <v-btn class="slider-btn" variant="outlined" color="white" @click="showTrailer(slider.id)">
                  <v-icon left>mdi-play</v-icon>
                  Watch Trailer
              </v-btn>
          </div>
          </v-sheet>
      </v-carousel-item>
  </v-carousel>
  <!-- Slider end -->



  <!-- info start -->
  <div class="main-sec1">
      <div class="main-sec1-container">
          <div class="main-sec1-img"></div>
          <div class="main-sec1-textbox">
            <h1 class="title_font main-sec1-title">
              일류에 대한 고집이<br>
              명품을 만들 수 있습니다.
            </h1>
            <p class="main-sec1-text font_m">
              성형수술이 세상에 존재하는 이유는<br>
              자기 자신에 대한 사랑을 완성하기 위함입니다.<br>
              저희 병원은 자연스러 아름다움을 추구하며<br>
              병원을 방문하는 고객의 만족이 최종적인 목표입니다.<br>
            </p>
          </div>
      </div>
  </div>
  <!-- info end -->



  <!-- menu start -->
  <v-container fluid class="main-sec2 pa-0">
    <v-row>
      <v-col
        v-for="(card, index) in cards"
        :key="index"
        cols="12"
        sm="6"
      >
        <v-card class="pa-8 text-center" :style="card.bgStyle">
          <v-card-title class="font_b text-white">{{ card.title }}</v-card-title>
          <v-btn variant="outlined" color="white">View</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- menu end -->



  <!-- Selfie start -->
  <div class="main-sec3">
    <div class="slide-content">
        <h1 class="title_font slide-content-title">MEEDREAM SELFIES.</h1>
        <h3 class="font_b slide-content-sub">미드림 셀피.</h3>
    </div>
    <v-container fluid class="main-sec3-container">
      <Swiper
        :breakpoints="{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }"
        :initial-slide="2"
        :space-between="16"
        :loop="true"
        :centered-slides="true"
        :speed="1000"
        :grab-cursor="true"
        :mousewheel="true"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true
        }"
        class="my-swiper"
      >
        <SwiperSlide
          v-for="(slide, index) in slides"
          :key="index"
          class="custom-slide"
        >
          <div
            v-if="slide.type === 'image'"
            class="slide-image"
            :style="{ backgroundImage: `url(${slide.src})` }"
          ></div>
        </SwiperSlide>

        <div class="swiper-pagination"></div>
      </Swiper>
    </v-container>
  </div>
  <!-- Selfie end -->



  <!-- Youtube Start -->
  <v-container fluid class="main-sec4">
    <h1 class="title_font main-sec4-title">MEEDREAM YOUTUBE</h1>
    <v-row class="ytb-main-row">
      <v-col cols="12" md="6" class="ytb-main">
        <div class="ytb-main-video-container">
          <iframe class="ytb-main-video" src="https://www.youtube.com/embed/VuMTcbJ0wQI" title="20대 30대도 눈썹거상이 필요할까? - 의학박사 백승준" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </v-col>

      <v-col cols="12" md="6" class="ytb-sub">
        <v-row class="ytb-sub-container">
          <v-col cols="12" class="pa-2 ytb-sub-box">
            <div class="ytb-sub-video-container">
              <iframe class="ytb-sub-video" src="https://www.youtube.com/embed/XiaRigxP9G8" title="코 수술 대신 코 필러? 당신에게 맞는 선택은? - 의학박사 백승준" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h1 class="ytb-sub-title font_b">코 수술 대신 코 필러? 당신에게 맞는 선택은? - 의학박사 백승준</h1>
          </v-col>
          <v-col cols="12" class="pa-2 ytb-sub-box">
            <div class="ytb-sub-video-container">
              <iframe class="ytb-sub-video" src="https://www.youtube.com/embed/3wosz7806ZQ" title="비싼 시술 없이도 피부 처짐 막을 수 있는 간단한 습관! 지금 바로 시작하세요! - 의학박사 백승준" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h1 class="ytb-sub-title font_b">비싼 시술 없이도 피부 처짐 막을 수 있는 간단한 습관! 지금 바로 시작하세요! - 의학박사 백승준</h1>
          </v-col>
          <v-col cols="12" class="pa-2 ytb-sub-box">
            <div class="ytb-sub-video-container">
              <iframe class="ytb-sub-video" src="https://www.youtube.com/embed/nIcTYoqmWP0" title="얼굴 지방이식, 동안을 위한 필수 시술? - 의학박사 백승준" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h1 class="ytb-sub-title font_b">얼굴 지방이식, 동안을 위한 필수 시술? - 의학박사 백승준</h1>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <!-- Youtube end -->

</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import { computed } from 'vue'

//이미지 임포트
import slider1 from '../assets/img/slider/slider-1.png';
import slider2 from '../assets/img/slider/slider-2.png';
import slider3 from '../assets/img/slider/slider-3.png';
import slider4 from '../assets/img/slider/slider-4.png';
import menu1 from '@/assets/img/main-menu/menu1.png';
import menu2 from '@/assets/img/main-menu/menu2.png';
import menu3 from '@/assets/img/main-menu/menu3.png';
import menu4 from '@/assets/img/main-menu/menu4.png';
import selfie1 from '@/assets/img/main-selfie/selfie1.png';
import selfie2 from '@/assets/img/main-selfie/selfie2.png';
import selfie3 from '@/assets/img/main-selfie/selfie3.png';
import selfie4 from '@/assets/img/main-selfie/selfie4.png';
import selfie5 from '@/assets/img/main-selfie/selfie5.png';
import selfie6 from '@/assets/img/main-selfie/selfie6.png';
import selfie7 from '@/assets/img/main-selfie/selfie7.png';
import selfie8 from '@/assets/img/main-selfie/selfie8.png';


//캐러셀
const loading = ref(true)
const error = ref(false)
const sliders = ref([])
const current = ref(0)
const showModal = ref(false)
const videoSrc = ref('')

function showTrailer(sliderId) {
  videoSrc.value = `https://www.youtube.com/embed/dQw4w9WgXcQ`
  showModal.value = true
}

function fetchSliders() {
  setTimeout(() => {
    sliders.value = [
      { id: 'slide-1', backdrop_path: slider1, poster_path: slider1, title: '드디어 만난 내가 원하는 눈! 쌍꺼풀 자연유착' },
      { id: 'slide-2', backdrop_path: slider2, poster_path: slider2, title: '지방이식 얼굴성형 빅 이벤트!' },
      { id: 'slide-3', backdrop_path: slider3, poster_path: slider3, title: '남자 맞춤성형 미드림 성형외과의원' },
      { id: 'slide-4', backdrop_path: slider4, poster_path: slider4, title: '쳐지고 얇은 입술이 고민이라면? 입술필러' },
    ]
    loading.value = false
  }, 500)
}

onMounted(() => {
  fetchSliders()
})

//캐러셀 높이
const { width } = useDisplay()

const carouselHeight = computed(() => {
  if (width.value < 768) return 568       // 모바일
  if (width.value < 1024) return 950      // iPad mini
  if (width.value < 1280) return 1310      // iPad pro
  return 680                              // PC
})


// sec2
const cards = [
  {
    title: '코성형센터',
    bgStyle: `background-image: url(${menu1}); background-size: cover; background-position: center;`,
  },
  {
    title: '눈성형센터',
    bgStyle: `background-image: url(${menu2}); background-size: cover; background-position: center;`,
  },
  {
    title: '동안성형센터',
    bgStyle: `background-image: url(${menu3}); background-size: cover; background-position: center;`,
  },
  {
    title: '체형성형센터',
    bgStyle: `background-image: url(${menu4}); background-size: cover; background-position: center;`,
  },
]


//Swiper
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'

const slides = [
  { type: 'image', src: selfie1 },
  { type: 'image', src: selfie2 },
  { type: 'image', src: selfie3 },
  { type: 'image', src: selfie4 },
  { type: 'image', src: selfie5 },
  { type: 'image', src: selfie6 },
  { type: 'image', src: selfie7 },
  { type: 'image', src: selfie8 },
]
</script>