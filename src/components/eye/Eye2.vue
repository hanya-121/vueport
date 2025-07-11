<!-- 매몰성형 -->
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
          <v-col cols="12" class="en_sec_title">
            <div class="title_font">매몰성형</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_subtitle eye2_sec_2_subtitle">
            <div class="font_b">"쌍꺼풀이 매일 다르게 생겨요.. 있다가 없다가 모양도 가끔 달라요."</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_imgbox">
            <div class="en_sec_2_img eye234_sec_2_img" alt="이미지"></div>
          </v-col>
          <div class="en_sec_2_text eye2_sec_2_text font_r">피부를 절개하지 않고 실로 쌍꺼풀 라인을 잡아주는 수술로, 
            흉터가 거의 없고 자연스럽게 회복이 빠른 것이 특징입니다. 
            피부가 얇고 탄력 있는 경우에 적합합니다.</div>
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
          <div class="en_sec_3_img1 eye2_sec_3_img1"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 1</div>
            <div class="en_sec_3_text font_r">맞춤형 디자인에 맞추어<br/>미세구멍 확보</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img2 eye2_sec_3_img2"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 2</div>
            <div class="en_sec_3_text font_r">미세구멍을 통해<br/>피부와 근육간의 유착 유도</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img3 eye2_sec_3_img3"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 3</div>
            <div class="en_sec_3_text font_r">피부 결막을 통해 실을<br/>통과시켜 라인을 고정</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img4 eye2_sec_3_img4"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 4</div>
            <div class="en_sec_3_text font_r">자연스러운 쌍꺼풀 라인 완성</div>
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
      <div class="eye_effect_img eye2_effect_img"></div>
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
    full: "눈매에 또렷함을<br/>주고 싶으신가요?",
    compact: "눈매에 또렷함을 주고 싶으신가요?"
  },
  {
    full: "쌍꺼풀이 풀려<br/>자주 손보시나요?",
    compact: "쌍꺼풀이 풀려 자주 손보시나요?"
  },
  {
    full: "눈매가 밋밋해<br/>답답해 보이시나요?",
    compact: "눈매가 밋밋해 답답해 보이시나요?"
  },
  {
    full: "자연스러운<br/>쌍꺼풀을 원하시나요?", 
    compact: "자연스러운 쌍꺼풀을 원하시나요?"
  },
  {
    full: "절개 없이 빠른<br/>회복을 원하시나요?",
    compact: "절개 없이 빠른 회복을 원하시나요?"
  },
  {
    full: "비대칭 눈이<br/> 스트레스이신가요?",
    compact: "비대칭 눈이 스트레스이신가요?"
  }
]

const infoItems = [
  { icon: 'mdi-clock-outline', title: '수술시간', detail: '약 20분' },
  { icon: 'mdi-needle', title: '마취방법', detail: '국소마취' },
  { icon: 'mdi-bed', title: '입원여부', detail: '없음' },
  { icon: 'mdi-content-cut', title: '실밥제거', detail: '없음' },
  { icon: 'mdi-account-heart', title: '일상복귀', detail: '3~5일 후' },
  { icon: 'mdi-hospital-box-outline', title: '내원치료', detail: '약 1회 내원' },
]

const noticeList = [
  '직접적으로 눈을 만지는 행동은 자제해주세요.',
  '콘택트렌즈 & 눈 화장 2주간 자제해주세요.',
  '수술 후 머리를 심장보다 높이, 반듯하게 누워주세요.',
  '초기 2~3일은 냉찜질로 붓기 완화해주세요.',
  '격한 운동과 음주 2~4주간 자제해주세요.'
]
</script>
