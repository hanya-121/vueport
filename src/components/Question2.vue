<template>
  <v-container fluid class="face">
    <v-row>
      <!-- 섹션 질문 타이틀 -->
      <v-col cols="12" class="face_title face_sec_title text-center">
        <div class="title_font">얼굴에 대한 고민은 모두 다릅니다.</div>
      </v-col>
      <!-- 6개 박스 반복 -->
      <v-col
        v-for="(question, index) in questions"
        :key="index"
        cols="12"
        md="4"
        class="face_box"
      >
        <div class="face_textwrap">
          <div class="face_question_box">
            <v-icon class="face_icon" color="#8A75B8"
              >mdi-check-circle-outline</v-icon
            >
            <div
              class="face_question font_m"
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
    full: "거울 속 얼굴,<br/>예전 같지 않으신가요?",
    compact: "거울 속 얼굴, 예전 같지 않으신가요?",
  },
  {
    full: "노안처럼 보인다는 말<br/>들어보셨나요?",
    compact: "노안처럼 보인다는 말 들어보셨나요?",
  },
  {
    full: "어떤 시술이<br/>좋을지 모르겠나요?",
    compact: "어떤 시술이 좋을지 모르겠나요?",
  },
  {
    full: "자연스럽게<br/>변하고 싶으신가요?",
    compact: "자연스럽게 변하고 싶으신가요?",
  },
  {
    full: "주름·볼륨·탄력<br/>다 고민되시나요?",
    compact: "주름·볼륨·탄력 다 고민되시나요?",
  },
  {
    full: "얼굴 분위기가<br/>달라졌으면 하시나요?",
    compact: "얼굴 분위기가 달라졌으면 하시나요?",
  },
];
</script>

<style scoped>
.face_title {
  font-size: 64px;
  margin-bottom: 20px;
}

/* 섹션 별 마진값 */
.face {
  max-width: 80%;
  margin: 0 auto;
}

/* 질문대상 */
.face {
  margin-top: 50px;
  margin-bottom: 100px;
  box-sizing: border-box;
}

.face_box {
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

.face_icon {
  width: 40px;
  height: 40px;
  margin-bottom: 16px;
  font-size: 40px;
}

.face_question {
  font-size: 32px;
}

/* ============================================
   🟡 패드 (769px ~ 1024px)
============================================ */
@media screen and (max-width: 1024px) and (min-width: 769px) {
  .face {
    margin-bottom: 90px !important;
  }
  .face_box {
    max-width: 240px !important;
    height: 150px !important;
  }
  .face_icon {
    width: 25px;
    height: 25px;
    font-size: 25px;
    margin-bottom: 10px;
  }
  .face_question {
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
  .face {
    margin-bottom: 70px !important;
  }
  .face_box {
    max-width: 100% !important;
    height: 50px !important;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 10%;
  }
  .face_question_box {
    display: flex;
    flex-direction: row !important; /* 모바일에선 가로 정렬 */
    align-items: flex-start;
    gap: 12px; /* 아이콘과 텍스트 사이 간격 */
  }
  .face_question {
    font-size: 20px !important;
  }
  .face_icon {
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
  .face_title {
    font-size: 21px !important;
    margin-bottom: 0px !important;
  }
  .title_font{
    padding: 0 10%;
  }
  .face .v-row {
    gap: 15px;
  }
  .face {
    margin-bottom: 70px !important;
  }
  .face_box {
    max-width: 100% !important;
    height: 40px !important;
    justify-content: flex-start !important;
  }
  .face_question_box {
    display: flex;
    align-items: center;
    gap: 10px; /* 아이콘과 텍스트 사이 간격 */
  }
  .face_icon {
    width: 16px;
    height: 16px;
    font-size: 16px;
    padding-top: 13px;
  }
  .face_question {
    font-size: 11px !important;
    text-align: left;
  }
}
</style>