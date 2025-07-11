<!-- 눈밑지방 -->
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
    <div class="title_font text-center en_display_none">눈 밑 지방</div>
  </v-col>

  <v-container fluid class="en_sec_2 en_sec_2_acodian">
    <v-row class="">
      <!-- 좌측 박스 -->
      <v-col cols="12" md="6" class="en_sec2_leftbox">
        <div class="en_acodian_leftbox">
          <div class="title_font text-center en_display_block">눈 밑 지방</div>
          <div class="font_b en_ac_left_title">“푹 자도 피곤해 보인대요. 
          <br>지워지지 않는 그늘같아요..”</div>
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
          <div class="en_sec_3_img1 eye5_sec_3_img1"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 1</div>
            <div class="en_sec_3_text font_r">처지고 주름진 눈꺼풀</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img2 eye5_sec_3_img2"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 2</div>
            <div class="en_sec_3_text font_r">증상에 맞게 절개 라인 디자인</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img3 eye5_sec_3_img3"></div>
          <div class="en_sec_3_textbox">
            <div class="en_sec_3_subtext font_b">#STEP 3</div>
            <div class="en_sec_3_text font_r">흉터를 최소화하기 위해 <br>눈썹 아래 절개</div>
          </div>
        </div>
        <div class="en_sec_3_box">
          <div class="en_sec_3_img4 eye5_sec_3_img4"></div>
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
import { useDisplay } from 'vuetify'//수술질문박스 용 
import { ref } from 'vue' //아코디언 용

const { smAndDown } = useDisplay()

const questions = [
  {
    full: "눈 밑이 불룩해<br/>피곤해 보이시나요?",
    compact: "눈 밑이 불룩해 피곤해 보이시나요?"
  },
  {
    full: "다크서클이 짙어<br/>고민이신가요?",
    compact: "다크서클이 짙어 고민이신가요?"
  },
  {
    full: "눈 밑 그림자가<br/>인상을 어둡게 하나요?",
    compact: "눈 밑 그림자가 인상을 어둡게 하나요?"
  },
  {
    full: "지방이 불규칙해<br/>울퉁불퉁 보이시나요?",
    compact: "지방이 불규칙해 울퉁불퉁 보이시나요?"
  },
  {
    full: "눈 밑 꺼짐과 튀어나옴이<br/>함께 하나요?",
    compact: "눈 밑 꺼짐과 튀어나옴이 함께 하나요?"
  },
  {
    full: "어려보이는<br/>동안 눈매를 원하시나요?",
    compact: "어려보이는 동안 눈매를 원하시나요?"
  }
]

// 수술설명 아코디언
const expandedPanels = ref([0])  // 첫 번째 아코디언 열림 유지

import eye5_acodian_1 from '@/assets/img/eyes/eye5_sec2_1.jpg';
import eye5_acodian_2 from '@/assets/img/eyes/eye5_sec2_2.jpg';

const accordionItems = [
  {
    title: '눈 밑 지방수술',
    content:
      '눈 밑 지방 수술은 불룩하게 튀어나온 지방 또는 지방이 없어 꺼져보이는 경우, 혹은 두 가지 혼합하여 울퉁불퉁한 눈 밑을 재배치 또는 제거, 이식을 해주며 밝은 인상을 만들어 줍니다.',
    image: eye5_acodian_1,
  },
  {
    title: '눈 밑 지방제거',
    content:
      '눈 밑이 불룩하게 튀어나온 경우, 원인이 되는 지방을 제거하여 깔끔하게 정리하는 수술입니다. 피부 처짐이 없고 지방만 많은 경우에 적합합니다.',
    // 이미지 없는 항목은 image 속성 생략 가능
    image:  eye5_acodian_2,
  },
  {
    title: '눈 밑 지방재배치',
    content:
      '튀어나온 눈밑 지방을 제거하지 않고 꺼진 부위로 이동시켜, 다크서클과 그림자를 완화하는 수술입니다. 불룩함과 꺼짐이 함께 있는 복합형 눈밑에 추천됩니다.',
    image:  eye5_acodian_2,
  }
];

// 수술정보
const infoItems = [
  { icon: 'mdi-clock-outline', title: '수술시간', detail: '30~40분' },
  { icon: 'mdi-needle', title: '마취방법', detail: '수면마취' },
  { icon: 'mdi-bed', title: '입원여부', detail: '없음' },
  { icon: 'mdi-content-cut', title: '실밥제거', detail: '5일 후<br>(외부절개 시)' },
  { icon: 'mdi-account-heart', title: '일상복귀', detail: '3~5일 후' },
  { icon: 'mdi-hospital-box-outline', title: '내원치료', detail: '약 2회 내원' },
]

// 수술 주의사항
const noticeList = [
  '초기 1~2일간 냉찜질, 이후 온찜질을 해주세요.',
  '눈가 압박·문지르기는 최소 2주간 자제해주세요.',
  '콘택트렌즈 및 눈화장은 실밥 제거 후 2주 후 권장드려요.',
  '자외선 노출에 예민하니, 주의해주세요.',
  '격렬하고 강도 높은 운동 자제해주세요.'
]
</script>
