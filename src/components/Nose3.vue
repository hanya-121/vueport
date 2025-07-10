<!-- 윤곽 코성형 -->

<template>
<v-container fluid class="en_sec_1">
    <v-row class="">
      <!-- 섹션 1 질문 타이틀 -->
      <v-col cols="12" class="en_sec_title nose_sec_title">
            <div class="title_font">코에 대한 고민은 모두 다릅니다.</div>
      </v-col>
      <!-- 6개 박스 반복 -->
      <v-col
        v-for="(question, index) in questions"
        :key="index"
        cols="12"
        md="4"
        class="en_sec_1_box"
      >
        <div class="en_sec_1_textwrap">
          <div class="en_sec_1_question_box">
            <v-icon class="en_sec_1_icon" color="#8A75B8">mdi-check-circle-outline</v-icon>
            <div class="en_sec_1_question font_m"
             v-html="smAndDown ? question.compact : question.full">
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
  
  <!-- 섹션 2 수술설명 타이틀 -->
  <v-container fluid class="en_sec_2">
        <v-row class="">
          <v-col cols="12" class="en_sec_title">
            <div class="title_font">쁘띠 코성형</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_subtitle nose_sec_2_subtitle">
            <div class="font_b">“코 수술 말고 다른 방법은 없나요?”</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_imgbox">
            <div class="en_sec_2_img nose_sec_2_img" alt="이미지"></div>
          </v-col>
          <div class="en_sec_2_text font_r">
            기존 수술법에서 벗어나 주사제, 보톡스, 정제된 순수 지방 등을 이용하여 간편하면서 짧은 시간으로 효과를 보는 코성형 시술 방법 입니다.</div>
        </v-row>
  </v-container>
  

  <v-container fluid>
    <!-- 수술정보 -------------------------------------------------------------------------- -->
    <div class="info">
      <h2 class="title_font text-center">시술 정보</h2>

      <v-row class="info-list" justify="center">
        <v-col
          v-for="(item, index) in infoItems"
          :key="index"
          cols="6" md="2" sm="6" 
          class="info-item d-flex flex-column align-center"
        >
          <v-icon :icon="item.icon" class="mb-5 icon" />
          <p class="font_r">
            {{ item.title }}<br />
            <span class="font_b" v-html="item.detail"></span>
          </p>
        </v-col>
      </v-row>
    </div>
    </v-container>
    
    <v-container fluid>
    <!-- 수술효과 -------------------------------------------------------------------------- -->
    <v-row class="effect justify-content-center"> 
      <v-col cols="12" class="text-center">
        <h2 class="title_font">수술 효과</h2>
        <div class="effect_img"></div>
      </v-col>
    </v-row> 
    </v-container>

    <v-container fluid>
    <!-- 주의사항 -------------------------------------------------------------------------- -->
    <v-row class="notice">
      <!-- 타이틀 -->
      <v-col
        cols="12" md="3"
        class="notice_title text-md-left text-center" align="start">
        <h2 class="title_font notice_t">수술 후 <br>주의사항</h2>
      </v-col>

      <!-- 박스 리스트 -->
      <v-col
        cols="12" md="9"
        class="notice_box"
      >
        <v-row dense>
          <v-col
            cols="12"
            v-for="(text, i) in noticeList"
            :key="i"
            class="mb-4"
          >
            <div class="notice-box title-font font_m">
              {{ text }}
            </div>
          </v-col>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()

const questions = [
  {
    full: "빠른 코 라인 변화를<br/>원하시나요?",
    compact: "빠른 코 라인 변화를 원하시나요?"
  },
  {
    full: "수술 없이 콧대를<br/>높이고 싶으신가요?",
    compact: "수술 없이 콧대를 높이고 싶으신가요?"
  },
  {
    full: "코 수술에 거부감이<br/>있으신가요?",
    compact: "코 수술에 거부감이 있으신가요?"
  },
  {
    full: "자연스러운 코 라인을<br/>원하시나요?",
    compact: "자연스러운 코 라인을 원하시나요?"
  },
  {
    full: "부담 없는 비용으로<br/>개선 원하시나요?",
    compact: "부담 없는 비용으로 개선 원하시나요?"
  },
  {
    full: "주사 시술 후<br/>유지기간이 궁금하신가요?",
    compact: "주사 시술 후 유지기간이 궁금하신가요?"
  }
]

const infoItems = [
  { icon: 'mdi-clock-outline', title: '시술시간', detail: '20~30분' },
  { icon: 'mdi-needle', title: '마취방법', detail: '국소 및 <br/>수면마취' },
  { icon: 'mdi-bed', title: '입원여부', detail: '없음' },
  { icon: 'mdi-content-cut', title: '실밥제거', detail: '없음' },
  { icon: 'mdi-account-heart', title: '일상복귀', detail: '바로 가능' },
  { icon: 'mdi-hospital-box-outline', title: '내원치료', detail: '없음' },
];

const noticeList = [
  '외부 충격에 조심해야 합니다.',
  '금주 및 금연을 권장합니다.',
  '시술 부위를 과하게 문지르지 않아야 합니다.',
  '시술 후 약 1주 간 사우나는 피해주세요.',
  '격렬하고 강도 높은 운동은 피해주세요.',
  '코가 건조하지 않게 적정 습도를 권장합니다.'
]
</script>

<style> /* style scoped */
@import "../styles/_nose_petite.scss";
</style>
