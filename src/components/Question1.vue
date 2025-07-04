<template>
  <v-container fluid class="breast">
    <v-row class="">
      <!-- 섹션 질문 타이틀 -->
      <v-col cols="12" class="en_sec_title breast_sec_title text-center">
        <div class="title_font">
          가슴에 대한<br class="mb_only" />고민은 모두 다릅니다.
        </div>
      </v-col>
      <!-- 6개 박스 반복 -->
      <v-col
        v-for="(question, index) in questions"
        :key="index"
        cols="12"
        md="4"
        class="breast_box"
      >
        <div class="breast_textwrap">
          <div class="breast_question_box">
            <v-icon class="breast_icon" color="#8A75B8"
              >mdi-check-circle-outline</v-icon
            >
            <div
              class="breast_question font_m"
              v-html="smAndDown ? question.compact : question.full"
            ></div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { useDisplay } from "vuetify";

const { smAndDown } = useDisplay();

const questions = [
  {
    full: "가슴이 체형보다<br/>작게 느껴지시나요?",
    compact: "가슴이 체형보다 작게 느껴지시나요?",
  },
  {
    full: "볼륨 있는 옷<br/>소화가 어렵나요?",
    compact: "볼륨 있는 옷 소화가 어렵나요?",
  },
  {
    full: "실루엣이 평범해보여<br/>고민되시나요?",
    compact: "실루엣이 평범해보여 고민되시나요?",
  },
  {
    full: "비대칭 때문에<br/>신경 쓰이시나요?",
    compact: "비대칭 때문에 신경 쓰이시나요?",
  },
  {
    full: "수술이 티날까<br/>걱정되시나요?",
    compact: "수술이 티날까 걱정되시나요?",
  },
  {
    full: "딱 내 몸 같은<br/>볼륨을 원하시나요?",
    compact: "딱 내 몸 같은 볼륨을 원하시나요?",
  },
];
</script>

<style scoped>
.en_sec_title {
  font-size: 64px;
  margin-bottom: 20px;
}

/* 섹션 별 마진값 */
.breast {
  max-width: 80%;
  margin: 0 auto;
}

/* 섹션1_질문대상 */
.breast {
  margin-top: 50px;
  margin-bottom: 100px;
  box-sizing: border-box;
}

.breast_box {
  max-width: 491px;
  height: 292px;
  border-radius: 10px;
  background: #eee9f0;
  box-sizing: border-box;
  display: flex;
  justify-content: center; /* 가로 정렬 (가운데 정렬) */
  align-items: center; /* 세로 정렬 (중앙 정렬) */
}

.v-row {
  gap: 20px; /* 질문박스 간격 */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

.breast_icon {
  width: 40px;
  height: 40px;
  margin-bottom: 16px;
  font-size: 40px;
}

.breast_question {
  font-size: 32px;
}

.mb_only {
  display: none;
}

/* ============================================
   🟡 패드 (769px ~ 1024px)
============================================ */
@media screen and (max-width: 1024px) and (min-width: 769px) {
  .breast {
    margin-bottom: 90px !important;
  }
  .breast_box {
    max-width: 240px !important;
    height: 150px !important;
  }
  .breast_icon {
    width: 25px;
    height: 25px;
    font-size: 25px;
    margin-bottom: 10px;
  }
  .breast_question {
    font-size: 20px;
  }
  .title_font {
    font-size: 54px;
  }
}

/* ============================================
   🟢 태블릿 (480px ~ 768px)
============================================ */
@media screen and (max-width: 768px) and (min-width: 480px) {
  .breast {
    margin-bottom: 50px !important;
  }
  .breast_box {
    max-width: 100% !important;
    height: 50px !important;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 10%;
  }
  .breast_question_box {
    display: flex;
    flex-direction: row !important; /* 모바일에선 가로 정렬 */
    align-items: flex-start;
    gap: 12px; /* 아이콘과 텍스트 사이 간격 */
  }
  .breast_question {
    font-size: 20px !important;
  }
  .breast_icon {
    width: 20px;
    height: 20px;
    padding-top: 10px;
    font-size: 20px;
  }
  .title_font {
    font-size: 40px;
  }
}

/* ============================================
   🔵 모바일 (최대 479px)
============================================ */
@media screen and (max-width: 479px) {
  .en_sec_title {
    font-size: 24px !important;
    margin-bottom: 0px !important;
  }
  .breast .v-row {
    gap: 15px;
  }
  .breast {
    margin-bottom: 70px !important;
  }
  .breast_box {
    max-width: 100% !important;
    height: 40px !important;
    justify-content: flex-start !important;
  }
  .breast_question_box {
    display: flex;
    align-items: center;
    gap: 10px; /* 아이콘과 텍스트 사이 간격 */
  }
  .breast_icon {
    width: 16px;
    height: 16px;
    font-size: 16px;
    padding-top: 13px;
  }
  .breast_question {
    font-size: 11px !important;
    text-align: left;
  }

  .mb_only {
    display: inline;
  }
}
</style>