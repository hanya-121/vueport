<!-- 눈썹거상 -->
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
  
  <!-- 섹션 2 수술정보 타이틀 -->
  <v-container fluid class="en_sec_2">
        <v-row class="">
          <v-col cols="12" class="en_sec_title eye_sec2">
            <div class="title_font">눈썹거상수술</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_subtitle eye_sec_2_subtitle">
            <div class="font_b">"피곤하지도 않은데 자꾸 힘들어 보인다는 말을 들어요."</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_imgbox">
            <div class="en_sec_2_img eye_sec_2_img" alt="이미지"></div>
          </v-col>
          <div class="en_sec_2_text eye1_sec_2_text font_r">처진 눈꺼풀이나 눈썹 위치를 교정하여 시야를 확보하고, 이마 주름을 완화시키는 수술입니다.  
            주로 눈썹 위 피부를 절개하거나 이마 내시경을 통해 눈썹을 위로 당겨 고정합니다.
          </div>
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
          <div class="en_sec_3_img1 eye_sec_3_img1"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 1</div>
            <div class="en_sec_3_text font_r">처지고 주름진 눈꺼풀</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img2 eye_sec_3_img2"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 2</div>
            <div class="en_sec_3_text font_r">증상에 맞게 절개 라인 디자인</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img3 eye_sec_3_img3"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 3</div>
            <div class="en_sec_3_text font_r">흉터를 최소화하기 위해 <br>눈썹 아래 절개</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img4 eye_sec_3_img4"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 4</div>
            <div class="en_sec_3_text font_r">처지고 주름진 눈꺼풀 교정 </div>
          </div>
        </div>
      </div>
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
      <div class="effect_img eye_effect_img eye1_effect_img"></div>
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

const { smAndDown } = useDisplay()

const questions = [
  {
    full: "눈 위가 처져<br/>시야가 답답하신가요?",
    compact: "눈 위가 처져 시야가 답답하신가요?"
  },
  {
    full: "늘 피곤해 보인다는<br/>말을 듣나요?",
    compact: "늘 피곤해 보인다는 말을 듣나요?"
  },
  {
    full: "눈썹이 내려앉아<br/>화장이 번지나요?",
    compact: "눈썹이 내려앉아 화장이 번지나요?"
  },
  {
    full: "주름진 이마와 <br/>눈매가 고민인가요?",
    compact: "주름진 이마와 눈매가 고민인가요?"
  },
  {
    full: "이마를 치켜뜨는<br/>습관이 있나요?",
    compact: "이마를 치켜뜨는 습관이 있나요?"
  },
  {
    full: "어두운 인상이<br/>고민이신가요?",
    compact: "어두운 인상이 고민이신가요?"
  }
]

const infoItems = [
  { icon: 'mdi-clock-outline', title: '수술시간', detail: '40~50분' },
  { icon: 'mdi-needle', title: '마취방법', detail: '국소마취<br>수면마취' },
  { icon: 'mdi-bed', title: '입원여부', detail: '없음' },
  { icon: 'mdi-content-cut', title: '실밥제거', detail: '5~7일 후' },
  { icon: 'mdi-account-heart', title: '일상복귀', detail: '2~3일 후' },
  { icon: 'mdi-hospital-box-outline', title: '내원치료', detail: '약 2회 내원' },
]

const noticeList = [
  '수술 후 머리를 심장보다 높이, 반듯하게 누워주세요.',
  '초기 2~3일은 냉찜질, 이후에는 온찜질으로 전환해주세요.',
  '격한 운동은 2~4주간 자제해주세요.',
  '눈·이마 문지르기 및 머리 숙이기 자제해주세요.',
]
</script>
