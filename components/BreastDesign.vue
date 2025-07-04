<template>
  <v-container class="text-center custom-container">
    <h1 class="title_font">가슴성형 디자인</h1>
    <v-row class="d-flex justify-center" align="center" justify="center">
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="6"
        sm="4"
        md="4"
        lg="2"
        class="my-1"
      >
        <v-sheet
          color="#e7d6f3"
          rounded="circle"
          class="d-flex align-center justify-center text-center circle"
        >
          <span class="item_txt font_b">{{ item }}</span>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const items = [
  "전체체형",
  "가슴크기",
  "전체적인\n이미지",
  "처짐여부",
  "가슴 밑선\n길이",
  "환자 희망\n모양/크기",
];
</script>

<style scoped>
.custom-container {
  max-width: 80%;
}

.title_font {
  font-size: 64px;
  margin-bottom: 30px;
}

.item_txt {
  font-size: 32px;
  white-space: pre-line;
}

/* ============================================
   🔴 피씨 (1025px 이상)
============================================ */
@media (min-width: 1025px) {
  .custom-container {
    margin-top: 100px;
  }

  .title_font {
    font-size: 64px;
  }
  .font_b {
    font-size: 32px;
  }
  .circle {
    width: 230px;
    height: 230px;
  }
}

/* ============================================
   🟡 패드 (769px ~ 1024px)
============================================ */
@media (min-width: 769px) and (max-width: 1024px) {
  .custom-container {
    margin-top: 90px;
  }

  .title_font {
    font-size: 64px;
  }
  .font_b {
    font-size: 24px;
  }
  .circle {
    width: 200px;
    height: 200px;
  }
}

/* ============================================
   🟢 태블릿 (480px ~ 768px)
============================================ */
@media (min-width: 480px) and (max-width: 768px) {
  .custom-container {
    margin-top: 70px;
  }

  .title_font {
    font-size: 32px;
  }
  .font_b {
    font-size: 20px;
  }
  .circle {
    width: 180px;
    height: 180px;
  }
}

/* ============================================
   🔵 모바일 (최대 479px)
============================================ */
@media (max-width: 479px) {
  .custom-container {
    margin-top: -20px;
  }

  .title_font {
    font-size: 24px;
  }
  .font_b {
    font-size: 14px;
  }
  .circle {
    width: 100px;
    height: 100px;
  }
}
</style>
