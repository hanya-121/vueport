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

  
<!-- 섹션 2 수술정보 타이틀  아코디언 -->
<!-- 타이틀 -->
  <v-col cols="12" class="en_sec_title en_display_none">
    <div class="title_font text-center en_display_none">맞춤코성형</div>
  </v-col>

  <v-container fluid class="en_sec_2 en_sec_2_acodian">
    <v-row class="">
      <!-- 좌측 박스 -->
      <v-col cols="12" md="6" class="en_sec2_leftbox">
        <div class="en_acodian_leftbox">
          <div class="title_font text-center en_display_block">눈 밑 지방</div>
          <div class="font_b en_ac_left_title">“코 모양이 마음에 안 들어서 스트레스에요.”</div>
          <div class="en_ac_left_img eye_ac_left_img"></div>
        </div>
      </v-col>

      <!-- 우측 아코디언 -->
      <v-col cols="12" md="6" class="en_sec2_rightbox">
        <v-expansion-panels v-model="expandedPanels" multiple>
          <v-expansion-panel
            v-for="(item, i) in accordionItems"
            :key="i"
            class="en_acordian"
          >
            <v-expansion-panel-title class="h_en_acodian_box font_b">
              <div class="acodian_title_text">
                {{ item.title }}
              </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="en_acodian_contents">
              <img
              v-if="item.image"
              :src="item.image"
              alt="acodian image"
              class="en-acodian-image"
              />
              <div class="acodian_text">
                {{ item.content }}
              </div> 
            </v-expansion-panel-text>
          </v-expansion-panel>
      </v-expansion-panels>
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
import { ref } from 'vue' 
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()
const expandedPanels = ref([])

const questions = [
  {
    full: "낮은 콧대가<br/>콤플렉스이신가요?",
    compact: "낮은 콧대가 콤플렉스이신가요?"
  },
  {
    full: "메부리코로 날카로운<br/>인상을 받으시나요?",
    compact: "메부리코로 날카로운 인상을 받으시나요?"
  },
  {
    full: "짧은 코가 얼굴<br/>비율을 망치시나요?",
    compact: "짧은 코가 얼굴 비율을 망치시나요?"
  },
  {
    full: "코가 뭉툭하거나<br/>퍼져 보이시나요?",
    compact: "코가 뭉툭하거나 퍼져 보이시나요?"
  },
  {
    full: "코 모양이 얼굴과<br/>어울리지 않으신가요?",
    compact: "코 모양이 얼굴과 어울리지 않으신가요?"
  },
  {
    full: "고민에 맞는 코 성형을<br/>찾고 계신가요?",
    compact: "고민에 맞는 코 성형을 찾고 계신가요?"
  }
]

// 수술설명 아코디언 스크립트
import nose_low from '@/assets/img/nose/nose_low.png';
import nose_aquiline from '@/assets/img/nose/nose_aquiline.png';
import nose_short from '@/assets/img/nose/nose_short.png';
import nose_luck from '@/assets/img/nose/nose_luck.png';
import nose_curve from '@/assets/img/nose/nose_curve.png';
import nose_long from '@/assets/img/nose/nose_long.png';

const accordionItems = [
  {
    title: '낮은 코',
    content:
      '얼굴 전체의 조화를 고려하여 디자인으로 콧대와 코끝에 맞춤으로 제작된 보형물 삽입하는 수술입니다.',
    image: nose_low,
  },
  {
    title: '매부리 코',
    content:
      '콧등이 튀어나오고 코끝이 처진 매부리코는 사납고 남성적이며, 고집스럽고 나이 들어 보일 수 있습니다. 콧등의 튀어나온 부분을 제거하고 콧대 코끝 라인을 부드럽게 다듬어야 합니다.',
    // 이미지 없는 항목은 image 속성 생략 가능
    image:  nose_aquiline,
  },
  {
    title: '짧은 코',
    content:
      '코가 짧거나 들려 있어 정면에서 콧구멍이 과다하게 노출되어 보이는 짧은코는 콧구멍이 잘 보이지 않도록 교정해 주어야 합니다. 코뼈와 비중격 연골, 코끝 연골이 작고 코끝의 피부조직이 부족하므로 해당 부분을 늘려주고 길이를 유지할 수 있도록 교정 합니다',
    image:  nose_short,
  },
  {
    title: '복코',
    content:
      '복코는 코끝이 뭉툭하고 납작하게 퍼져 촌스러운 이미지가 강조됩니다. 복코의 원인을 파악하여 두꺼운 지방조직은 제거하고 퍼진 연골은 다듬고 모아주어 날렵하고 오똑한 코끝을 만들 수 있습니다.',
    image: nose_luck,
  },
  {
    title: '휜 코',
    content:
      '콧대와 코끝이 한쪽으로 휘어져 있는 휜코는 미관상으로 보기 안좋을 뿐 아니라 기능적인 부분에서도 문제가 발생할 수 있습니다. 휜코 교정술을 통해 기능과 미용적인 측면을 모두 교정하는 것이 좋습니다.',
    image: nose_curve,
  },
  {
    title: '긴 코',
    content:
      '코 자체가 길거나 코끝이 아래로 처져 화살촉처럼 보이는 긴코는 날개 연골의 잘못된 배치와 비중격 연골의 과한 발달로 생기게 됩니다. 처진 코끝을 위로 올려주는 방법으로 개선할 수 있습니다.',
    image: nose_long,
  },
];



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
@import "../styles/_nose4.scss";
</style>
