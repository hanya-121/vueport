<!-- 절개성형 -->
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
            <div class="title_font">절개성형</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_subtitle eye3_sec_2_subtitle">
            <div class="font_b">"거울 볼 때마다 조금 더 또렷했으면 좋겠다는 생각이 자꾸 들어요."</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_imgbox">
            <div class="en_sec_2_img eye234_sec_2_img" alt="이미지"></div>
          </v-col>
          <div class="en_sec_2_text eye3_sec_2_text font_r">눈꺼풀을 절개해 지방이나 늘어진 피부를 제거한 후, 쌍꺼풀 라인을 고정하는 수술입니다. 
            확실하고 또렷한 라인을 원하거나 눈꺼풀이 두껍고 처진 경우에 적합합니다.</div>
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
          <div class="en_sec_3_img1 eye3_sec_3_img1"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 1</div>
            <div class="en_sec_3_text font_r">맞춤형 디자인에 맞추어<br/>눈꺼풀라인 절개</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img2 eye3_sec_3_img2"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 2</div>
            <div class="en_sec_3_text font_r">불필요한 지방, 피부, 근육 등을 제거</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img3 eye3_sec_3_img3"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 3</div>
            <div class="en_sec_3_text font_r">절개한 부위를 봉합하여 고정</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img4 eye3_sec_3_img4"></div>
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
      <div class="eye_effect_img eye3_effect_img"></div>
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
    full: "쌍꺼풀이 잘 풀리는<br/>눈이신가요?",
    compact: "쌍꺼풀이 잘 풀리는 눈이신가요?"
  },
  {
    full: "눈꺼풀에 지방이 많아<br/>답답해 보이시나요?",
    compact: "눈꺼풀에 지방이 많아 답답해 보이시나요?"
  },
  {
    full: "확실한 라인을<br/>원하시나요?",
    compact: "확실한 라인을 원하시나요?"
  },
  {
    full: "또렷한 눈매로 인상이<br/>달라지고 싶으신가요?",
    compact: "또렷한 눈매로 인상이 달라지고 싶으신가요?"
  },
  {
    full: "한 번의 수술로<br/>오래 유지하고 싶으신가요?",
    compact: "한 번의 수술로 오래 유지하고 싶으신가요?"
  },
  {
    full: "매몰법으로<br/>효과를 못 보셨나요?",
    compact: "매몰법으로 효과를 못 보셨나요?"
  }
]

const infoItems = [
  { icon: 'mdi-clock-outline', title: '수술시간', detail: '1시간' },
  { icon: 'mdi-needle', title: '마취방법', detail: '국소마취<br>수면마취' },
  { icon: 'mdi-bed', title: '입원여부', detail: '없음' },
  { icon: 'mdi-content-cut', title: '실밥제거', detail: '5~7일 후' },
  { icon: 'mdi-account-heart', title: '일상복귀', detail: '실밥제거 후<br> 2~3일 후' },
  { icon: 'mdi-hospital-box-outline', title: '내원치료', detail: '약 2회 내원' },
]

const noticeList = [
  '실밥 제거 전까지 샤워 시 봉합선을 주의해주세요.',
  '첫 1주는 냉찜질, 이후는 온찜질로 전환해주세요.',
  '격한 운동과 음주 2~4주간 자제해주세요.',
  '콘택트렌즈 및 눈 화장은 2주 후부터 가능합니다.',
  '자외선 노출에 예민하니, 주의해주세요.',
]
</script>
