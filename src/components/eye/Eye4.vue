<!-- 안검하수 -->
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
            <div class="title_font">안검하수</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_subtitle eye4_sec_2_subtitle">
            <div class="font_b">"눈을 제대로 뜬 건데, 자꾸 졸려 보인대요. 눈꺼풀이 눈을 덮어요.”</div>
          </v-col>
          <v-col cols="12" class="en_sec_2_imgbox">
            <div class="en_sec_2_img eye234_sec_2_img" alt="이미지"></div>
          </v-col>
          <div class="en_sec_2_text eye4_sec_2_text font_r">눈뜨는 근육의 힘이 약한 경우, 이를 강화하여 졸려 보일 수 있어, 이러한 눈매를 교정하는 수술입니다.
            단순 미용 목적뿐 아니라 기능적인 시야 확보에도 효과적입니다.</div>
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
          <div class="en_sec_3_img1 eye4_sec_3_img1"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 1</div>
            <div class="en_sec_3_text font_r">눈꺼풀에 맞는 적합한 눈매 디자인</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img2 eye4_sec_3_img2"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 2</div>
            <div class="en_sec_3_text font_r">쌍꺼풀 아래 피부를 절개한</br>불필요한 조직을 제거</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img3 eye4_sec_3_img3"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 3</div>
            <div class="en_sec_3_text font_r">눈꺼풀 피부와 근육을 묶어</br>라인을 형성하고 봉합</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img4 eye4_sec_3_img4"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 4</div>
            <div class="en_sec_3_text font_r">눈꺼풀이 뚜렷해 보이는 눈매 완성</div>
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
      <div class="eye_effect_img eye4_effect_img"></div>
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
    full: "눈을 떠도 졸려<br/>보인다는 말을 듣나요?",
    compact: "눈을 떠도 졸려 보인다는 말을 듣나요?"
  },
  {
    full: "이마힘으로 눈썹을<br/>치켜뜨셔야 하나요?",
    compact: "이마힘으로 눈썹을 치켜뜨셔야 하나요?"
  },
  {
    full: "눈꺼풀에 시야가<br/>가려 답답하신가요?",
    compact: "눈꺼풀에 시야가 가려 답답하신가요?"
  },
  {
    full: "눈 비대칭이 심해<br/>스트레스이신가요?",
    compact: "눈 비대칭이 심해 스트레스이신가요?"
  },
  {
    full: "인상이 무기력하고<br/>흐려 보이시나요?",
    compact: "인상이 무기력하고 흐려 보이시나요?"
  },
  {
    full: "눈매 고정과 쌍꺼풀을<br/>동시에 원하시나요?",
    compact: "눈매 고정과 쌍꺼풀을 동시에 원하시나요?"
  }
]

const infoItems = [
  { icon: 'mdi-clock-outline', title: '수술시간', detail: '1시간 내외' },
  { icon: 'mdi-needle', title: '마취방법', detail: '국소마취<br>수면마취' },
  { icon: 'mdi-bed', title: '입원여부', detail: '없음' },
  { icon: 'mdi-content-cut', title: '실밥제거', detail: '5~7일 후' },
  { icon: 'mdi-account-heart', title: '일상복귀', detail: '약 5일 후' },
  { icon: 'mdi-hospital-box-outline', title: '내원치료', detail: '약 2회 내원' },
]

const noticeList = [
  '초기 냉찜질 2~3일, 이후 온찜질로 교체해주세요.',
  '눈가 자극, 세안·샤워 주의해주세요.',
  '콘택트렌즈·화장 2주 후부터 가능합니다.',
  '흡연·음주 1개월간 자제해주세요.'
]
</script>
