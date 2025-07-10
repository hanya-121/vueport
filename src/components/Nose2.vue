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
            <div class="title_font">코 재수술</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_subtitle nose_sec_2_subtitle">
            <div class="font_b">“코수술을 했는데 마음에 들지 않아요.”</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_imgbox">
            <div class="en_sec_2_img nose_sec_2_img" alt="이미지"></div>
          </v-col>
          <div class="en_sec_2_text font_r">
            1차 수술로 인해 염증, 구축, 조직의 변화 등의 이유로 코재수술은 난도가 높은 수술 중 하나입니다. 
            코 재수술은 실패 원인을 정확하게 진단하고 분석해 그에 맞는 수술을 설계 해야 합니다.</div>
        </v-row>
  </v-container>
  
  <!-- 코 재수술 시기 -->
  <v-container fluid class="re">
    <v-row>
        <v-col cos="12" class="nose_title text-center">
            <div class="title_font ">코 재수술 시기</div>
        </v-col>
        <v-col cols="12" class="re_imgbox">
            <div class="re_img" alt="코재수술시기"></div>
        </v-col>
        <div class="re_text font_r">
            최소 6개월 ~ 1년이 지난 후 재수술을 권장합니다. 조직이 안정화되어야 성공적인 재수술을 기대할 수 있습니다. 
            개인에 따라 차이가 있으므로 충분한 상담을 통해 적절한 시기를 정해야 합니다. 
            단순히 콧등만 높이는 융비술을 한 경우라면 수술 후 3개월이 지난 후에도 재수술이 가능합니다. 
            수술 부위에 염증이나 보형물이 삐뚤어진 경우, 콧등의 피부가 심하게 빨갛게 변해 뚫릴 위험이 있는 경우라면 
            바로 재수술을 시행하여 문제를 바로 잡아야 합니다.
        </div>
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
@import "../styles/_nose_re.scss";
</style>
