<template>
  <v-container fluid class="fat">
    <v-row class="">
      <!-- 섹션 질문 타이틀 -->
      <v-col cols="12" class="en_sec_title fat_sec_title text-center">
        <div class="title_font">
          살에 대한 고민은<br class="mb_only" />
          모두 다릅니다.
        </div>
      </v-col>
      <!-- 6개 박스 반복 -->
      <v-col
        v-for="(question, index) in questions"
        :key="index"
        cols="12"
        md="4"
        class="fat_box"
      >
        <div class="fat_textwrap">
          <div class="fat_question_box">
            <v-icon class="fat_icon" color="#8A75B8"
              >mdi-check-circle-outline</v-icon
            >
            <div
              class="fat_question font_m"
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
    full: "특정 부위만<br/>왜 안 빠질까요?",
    compact: "특정 부위만 왜 안 빠질까요?",
  },
  {
    full: "살은 빠졌는데<br/>핏은 그대로인가요?",
    compact: "살은 빠졌는데 핏은 그대로인가요?",
  },
  {
    full: "군살 때문에<br/>옷 고르기 힘드신가요?",
    compact: "군살 때문에 옷 고르기 힘드신가요?",
  },
  {
    full: "운동·식단 다 해봤지만<br/>부족하셨나요?",
    compact: "운동·식단 다 해봤지만 부족하셨나요?",
  },
  {
    full: "라인 다듬기<br/>막막하신가요?",
    compact: "라인 다듬기 막막하신가요?",
  },
  {
    full: "지방흡입<br/>고민만 하고 계신가요?",
    compact: "지방흡입 고민만 하고 계신가요?",
  },
];
</script>

<style scoped>
.en_sec_title {
  font-size: 64px;
  margin-bottom: 20px;
}

/* 섹션 별 마진값 */
.fat {
  max-width: 80%;
  margin: 0 auto;
}

/* 섹션1_질문대상 */
.fat {
  margin-top: 50px;
  margin-bottom: 100px;
  box-sizing: border-box;
}

.fat_box {
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

.fat_icon {
  width: 40px;
  height: 40px;
  margin-bottom: 16px;
  font-size: 40px;
}

.fat_question {
  font-size: 32px;
}

.mb_only {
  display: none;
}

/* ============================================
   🟡 패드 (769px ~ 1024px)
============================================ */
@media screen and (max-width: 1024px) and (min-width: 769px) {
  .fat {
    margin-bottom: 90px !important;
  }
  .fat_box {
    max-width: 240px !important;
    height: 150px !important;
  }
  .fat_icon {
    width: 25px;
    height: 25px;
    font-size: 25px;
    margin-bottom: 10px;
  }
  .fat_question {
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
  .fat {
    margin-bottom: 50px !important;
  }
  .fat_box {
    max-width: 100% !important;
    height: 50px !important;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 10%;
  }
  .fat_question_box {
    display: flex;
    flex-direction: row !important; /* 모바일에선 가로 정렬 */
    align-items: flex-start;
    gap: 12px; /* 아이콘과 텍스트 사이 간격 */
  }
  .fat_question {
    font-size: 20px !important;
  }
  .fat_icon {
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
  .fat .v-row {
    gap: 15px;
  }
  .fat {
    margin-bottom: 70px !important;
  }
  .fat_box {
    max-width: 100% !important;
    height: 40px !important;
    justify-content: flex-start !important;
  }
  .fat_question_box {
    display: flex;
    align-items: center;
    gap: 10px; /* 아이콘과 텍스트 사이 간격 */
  }
  .fat_icon {
    width: 16px;
    height: 16px;
    font-size: 16px;
    padding-top: 13px;
  }
  .fat_question {
    font-size: 12px !important;
    text-align: left;
  }

  .mb_only {
    display: inline;
  }
}
</style>