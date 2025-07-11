<!-- 트임 앞/뒤/밑 -->
<template>
  <v-container fluid class="en_sec_1">
    <v-row class="">
      <!-- 섹션 1 질문 타이틀 -->
      <v-col cols="12" class="en_sec_title eye_sec_title">
            <div class="title_font">눈에 대한 고민은 모두 다릅니다.</div>
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
    <div class="title_font text-center en_display_none">트임성형</div>
  </v-col>

  <v-container fluid class="en_sec_2 en_sec_2_acodian">
    <v-row class="">
      <!-- 좌측 박스 -->
      <v-col cols="12" md="6" class="en_sec2_leftbox">
        <div class="en_acodian_leftbox">
          <div class="title_font text-center en_display_block">트임성형</div>
          <div class="font_b en_ac_left_title">“눈이 막혀있는 모양이라
          <br>답답해보여요.”</div>
          <div class="en_ac_left_img eye6_ac_left_img"></div>
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

  <!-- 섹션 4 수술정보 타이틀 -->
  <v-container fluid class="en_sec_4">
        <v-row class="">
          <v-col cols="12" class="en_sec_title">
            <div class="title_font en_sec_4_title">수술 정보</div>
          </v-col>
        </v-row>

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
              <span class="font_b en_sec4_text" v-html="item.detail"></span>
            </p>
          </v-col>     
        </v-row>
  </v-container>
  
  <!-- 섹션 5 수술효과 타이틀 -->
 <v-container fluid class="en_sec_5">
  <v-row class="justify-content-center">
    <!-- 기존 타이틀 유지 -->
    <v-col cols="12" class="en_sec_title">
      <div class="title_font">수술 효과</div>
    </v-col>
    <!-- 수술 효과 이미지 영역 추가 -->
    <v-col cols="12" class="en_sec5_imgbox">
      <div class="eye_effect_img eye5_effect_img"></div>
    </v-col>
  </v-row>
</v-container>
  
  <!-- 섹션 6 수술 후 주의사항 타이틀 -->
  <v-container fluid class="en_sec_6">
  <v-row class="">
    <!-- 타이틀 부분 유지
    <v-col cols="12" class="en_sec_title">
      <div class="title_font ">수술 후<br/>주의사항</div>
    </v-col>
    -->

    <!-- 주의사항 내용 영역 -->
    <v-col cols="12">
      <v-row class="notice" dense>
        <!-- 왼쪽 타이틀 (md 이상에서 3칸) -->
        <v-col
          cols="12" md="3"
          class="notice_title text-md-left text-center"
          align="start"
        >
          <div class="title_font en_sec6_title notice_t">수술 후 <br>주의사항</div>
        </v-col>

        <!-- 오른쪽 리스트 (md 이상에서 9칸) -->
        <v-col cols="12" md="9" class="notice_box">
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
    </v-col>

  </v-row>
</v-container>

</template>


<script setup>
import { useDisplay } from 'vuetify'
import { ref } from 'vue'

const { smAndDown } = useDisplay()

const questions = [
  {
    full: "눈 사이 거리가<br/>멀어보이시나요?",
    compact: "눈 사이 거리가 멀어보이시나요?"
  },
  {
    full: "눈꼬리가 답답하게<br/>막혀 있으신가요?",
    compact: "눈꼬리가 답답하게 막혀 있으신가요?"
  },
  {
    full: "또렷하고 시원한<br/>눈매를 원하시나요?",
    compact: "또렷하고 시원한 눈매를 원하시나요?"
  },
  {
    full: "눈이 작아 화장이<br/>원하는대로 안되시나요?",
    compact: "눈이 작아 화장이 원하는대로 안되시나요?"
  },
  {
    full: "시원하게 트인 눈매를<br/>원하시나요?",
    compact: "시원하게 트인 눈매를 원하시나요?"
  },
  {
    full: "트임 후 흉터가<br/>걱정되시나요?",
    compact: "트임 후 흉터가 걱정되시나요?"
  }
]

// 수술설명 아코디언
const expandedPanels = ref([0])  // 첫 번째 아코디언 열림 유지

import eye6_acodian_1 from '@/assets/img/eyes/eye6_1.png';
import eye6_acodian_2 from '@/assets/img/eyes/eye6_2.png';
import eye6_acodian_3 from '@/assets/img/eyes/eye6_3.png';

const accordionItems = [
  {
    title: '앞트임',
    content:
      '몽고주름으로 인해 가려진 눈의 앞쪽을 절개해, 눈매를 시원하게 열어주는 수술입니다. 눈 사이 간격이 넓거나 답답한 인상을 개선하는 데 효과적입니다.',
    image: eye6_acodian_1,
  },
  {
    title: '뒤트임',
    content:
      '눈꼬리 바깥쪽을 절개하여 가로폭을 넓히고, 막힌 느낌을 개선하는 수술입니다. 눈이 짧아 보이거나 눈꼬리가 올라간 경우에 적합합니다.',
    // 이미지 없는 항목은 image 속성 생략 가능
    image:  eye6_acodian_2,
  },
  {
    title: '밑트임',
    content:
      '눈 아래 라인을 살짝 아래로 확장시켜 세로폭을 키우는 수술입니다. 눈매가 날카로워 보이는 인상을 부드럽고 또렷하게 바꾸는 데 도움이 됩니다.',
    image:  eye6_acodian_3,
  }
];


const infoItems = [
  { icon: 'mdi-clock-outline', title: '수술시간', detail: '약 30분' },
  { icon: 'mdi-needle', title: '마취방법', detail: '국소마취' },
  { icon: 'mdi-bed', title: '입원여부', detail: '없음' },
  { icon: 'mdi-content-cut', title: '실밥제거', detail: '5일 후' },
  { icon: 'mdi-account-heart', title: '일상복귀', detail: '2~3일 후' },
  { icon: 'mdi-hospital-box-outline', title: '내원치료', detail: '약 1회 내원' },
]

const noticeList = [
  '1주간 냉찜질, 이후 온찜질로 전환해주세요.',
  '콘택트렌즈 및 눈화장은 2주 후 가능합니다.',
  '흡연·음주 1개월 간 자제해주세요.',
  '콘택트렌즈 및 눈화장은 실밥 제거 후 2주 후 권장드려요',
  '자외선 노출에 예민하니, 주의해주세요.',
  '격렬하고 강도 높은 운동 자제해주세요.'
]
</script>

