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
            <div class="title_font">윤곽 코성형</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_subtitle nose_sec_2_subtitle">
            <div class="font_b">“코가 얼굴과 조화롭지 않아서 스트레스에요.”</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_imgbox">
            <div class="en_sec_2_img nose_sec_2_img" alt="이미지"></div>
          </v-col>
          <div class="en_sec_2_text font_r">
            콧등에 보형물을 삽입하고, 좌우 코뼈를 좁혀주며, 코끝을 안정적이고 자연스럽게 올려주는 수술을 동시에 진행합니다.</div>
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
          <div class="en_sec_3_img1 nose_sec_3_img1"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 1</div>
            <div class="en_sec_3_text font_r">코 안쪽 연골 가장자리 절개</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img2 nose_sec_3_img2"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 2</div>
            <div class="en_sec_3_text font_r">연골 위를 박리 후<br>골막을 들어 코뼈와 분리</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img3 nose_sec_3_img3"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 3</div>
            <div class="en_sec_3_text font_r">보형물 삽입</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img4 nose_sec_3_img4"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 4</div>
            <div class="en_sec_3_text font_r">보형물이 움직이지 않도록<br>특수테이프로 테이핑 </div>
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
    full: "정면에서 코가<br/>납작해 보이시나요?",
    compact: "정면에서 코가 납작해 보이시나요?"
  },
  {
    full: "코와 얼굴 윤곽이<br/>어울리지 않으신가요?",
    compact: "코와 얼굴 윤곽이 어울리지 않으신가요?"
  },
  {
    full: "옆모습 코 높이가<br/>아쉬우신가요?",
    compact: "옆모습 코 높이가 아쉬우신가요?"
  },
  {
    full: "입체감 없는 코가<br/>고민이신가요?",
    compact: "입체감 없는 코가 고민이신가요?"
  },
  {
    full: "자연스러운 라인을<br/>원하시나요?",
    compact: "자연스러운 라인을 원하시나요?"
  },
  {
    full: "코와 이마의 연결이<br/>예쁘지 않으신가요?",
    compact: "코와 이마의 연결이 예쁘지 않으신가요?"
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
@import "../styles/_nose.scss";
</style>
