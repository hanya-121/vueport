<!-- 코 재수술 -->

<template>
<v-container fluid class="en_sec_1">
    <v-row>
      <!-- 섹션 1 질문 타이틀 -->
      <v-col cols="12" class="en_sec_title nose_title">
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
          <v-col cols="12" class="nose_title">
            <div class="title_font">기능성 코성형</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_subtitle nose_sec_2_subtitle">
            <div class="font_b">“불편함을 해소하면서 이쁜 코면 좋겠어요.”</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_imgbox">
            <div class="en_sec_2_img nose_sec_2_img" alt="이미지"></div>
          </v-col>
          <div class="en_sec_2_text font_r">
            기능성 코성형은 코막힘, 비염 등의 코의 기능적인 문제와 미용적인 코의 모양을 함께 개선하는 수술입니다.
            코막힘은 여러 합병증을 유발하기 때문에 초기에 치료하는 것이 중요합니다.
            다양한 원인으로 발생하는 비염수술은 전문의의 진단과 수술이 꼭 필요합니다.
            정밀 검사가 진행되며 증상 및 실비 보장 내역에 따라 보험 실비 청구가 가능합니다.</div>
        </v-row>
  </v-container>
  
<!-- 섹션 3 수술방법 타이틀 -->
  <v-container fluid class="en_sec_3">
    <v-row class="">
      <v-col cols="12" class="en_sec_title">
        <div class="title_font">수술 방법</div>
      </v-col>
      <!-- 수술방법 박스 4단계 과정 -->
      <v-col cols="12" class="">
      <div class="en_sec_3_contents">
        <div class="en_sec_3_box">
          <div class="en_sec_3_img1 nose_sec_3_img11"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 1</div>
            <div class="en_sec_3_text font_r">휘어지고 약해진 비중격을<br>제대로 개선</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img2 nose_sec_3_img22"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 2</div>
            <div class="en_sec_3_text font_r">비중격을 단단하게 지지해<br>콧대 쏠림 및 변형 예방</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img3 nose_sec_3_img33"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 3</div>
            <div class="en_sec_3_text font_r">비중격연골을 비밸브에 삽입<br>숨쉴 공간 확보</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img4 nose_sec_3_img44"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 4</div>
            <div class="en_sec_3_text font_r">정상적인 공기흐름으로<br>편해진 호흡 및 예뻐진 코 </div>
          </div>
        </div>
      </div>
      </v-col>
    </v-row>
  </v-container>


  <v-container fluid>
    <!-- 수술정보 -------------------------------------------------------------------------- -->
    <div class="info">
      <h2 class="title_font text-center">수술 정보</h2>

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
    
  <!-- 수술효과 -------------------------------------------------------------------------- -->
  <v-container fluid>
    <v-row class="effect justify-content-center"> 
      <v-col cols="12" class="text-center">
        <h2 class="title_font">수술 효과</h2>
        <div class="effect_img"></div>
      </v-col>
    </v-row> 
  </v-container>

  <!-- 주의사항 -------------------------------------------------------------------------- -->
  <v-container fluid>
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
    full: "코 수술 결과가<br/>만족스럽지 않으신가요?",
    compact: "코 수술 결과가 만족스럽지 않으신가요?"
  },
  {
    full: "보형물 위치가<br/>비뚤어졌나요?",
    compact: "보형물 위치가 비뚤어졌나요?"
  },
  {
    full: "코끝이 딱딱하거나<br/>부자연스러우신가요?",
    compact: "코끝이 딱딱하거나 부자연스러우신가요?"
  },
  {
    full: "염증 또는 구축이<br/>걱정되시나요?",
    compact: "염증 또는 구축이 걱정되시나요?"
  },
  {
    full: "수술 이후 코 라인이<br/>휘어져 보이나요?",
    compact: "수술 이후 코 라인이 휘어져 보이나요?"
  },
  {
    full: "코 수술 특유의<br/>인위적인 느낌이 드나요?",
    compact: "코 수술 특유의 인위적인 느낌이 드나요?"
  }
]

const infoItems = [
  { icon: 'mdi-clock-outline', title: '수술시간', detail: '1~2시간' },
  { icon: 'mdi-needle', title: '마취방법', detail: '수면마취' },
  { icon: 'mdi-bed', title: '입원여부', detail: '없음' },
  { icon: 'mdi-content-cut', title: '실밥제거', detail: '5~7일 후' },
  { icon: 'mdi-account-heart', title: '일상복귀', detail: '실밥제거 후<br> 바로 가능' },
  { icon: 'mdi-hospital-box-outline', title: '내원치료', detail: '약 2회 내원' },
];

const noticeList = [
  '외부 충격에 조심해야 합니다.',
  '금주 및 금연을 권장합니다.',
  '수술 후 한달 간 잘 때 엎드리지 말아주세요.',
  '약 한 달 정도 절대 코 풀지 말아주세요.',
  '격렬하고 강도 높은 운동은 피해주세요.',
  '코가 건조하지 않게 적정 습도를 권장합니다.'
]
</script>

<style> /* style scoped */
@import "../styles/_nose6.scss";
</style>
