<template>
  <v-container class="incision-wrapper" fluid>
    <h1 class="title_font text-center">맞춤 절개위치</h1>
    <p class="font_m text-center">
      가슴 모양, 크기, 보형물 크기를 종합해 <br class="mb_only" />
      가장 적합한 절개 위치를 선택
    </p>

    <!-- 📌 PC & PAD : 통합 이미지 -->
    <div class="incision-image-full d-none d-md-flex justify-center">
      <v-img src="/images/incision_pad.png" max-width="1500" contain />
    </div>

    <!-- 📌 태블릿 & 모바일 : 개별 카드 -->
    <div class="incision-cards d-flex d-md-none flex-wrap justify-center mt-3">
      <div
        v-for="item in incisionList"
        :key="item.title"
        class="incision-card text-center mx-2 my-4"
      >
        <v-img :src="item.img" class="card-image mb-2" contain />
        <h3 class="card-title title_b">{{ item.title }}</h3>
        <p class="card-desc font_r" v-html="item.desc" />
      </div>
    </div>
  </v-container>
</template>

<script setup>
const incisionList = [
  {
    title: "겨드랑이 절개",
    img: "/images/transaxillary.png",
    desc: "최소 절개로 내시경을 삽입해 충분한 시야확보<br>혈관, 신경, 근육 등 유방 조직 상처 최소화<br>정확한 보형물 삽입을 위해 숙련된 집도 실력<br>유관 보존으로 수유 가능",
  },
  {
    title: "가슴밑 절개",
    img: "/images/inframammary.png",
    desc: "정교한 가슴 교정 가능<br>원활한 싱확보로 가슴 재수술 시 용이<br>가슴밑 주름에 절개흉터가 숨겨짐",
  },
  {
    title: "유륜 절개",
    img: "/images/periareolar.png",
    desc: "모든 종류의 보형물 삽입 가능<br>시야확보가 좋아 박리, 보형물 삽입 용이<br>유륜이 너무 작은 경우 수술 불가",
  },
];
</script>

<style scoped>
.incision-wrapper {
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 10%;
}

.title_font {
  font-size: 64px;
  margin-bottom: 30px;
}

.font_m {
  font-size: 32px;
}

.incision-image-full {
  margin-top: 48px;
}

.card-image {
  width: 200px;
  height: auto;
  margin: 0 auto;
}

.incision-card {
  max-width: 300px;
}

.card-title {
  font-size: 20px;
  margin-bottom: 12px;
}

.card-desc {
  font-size: 16px;
  line-height: 1.6;
  white-space: pre-line;
}

/* ============================================
   🔴 피씨 (1025px 이상)
============================================ */
@media (min-width: 1025px) {
  .title_font {
    font-size: 64px;
  }

  .font_m {
    font-size: 32px;
  }

  .mb_only {
    display: none;
  }
}

/* ============================================
   🟡 패드 (769px ~ 1024px)
============================================ */
@media (min-width: 769px) and (max-width: 1024px) {
  .title_font {
    font-size: 64px;
  }

  .font_m {
    font-size: 32px;
  }

  .mb_only {
    display: inline;
  }
}

/* ============================================
   🟢 태블릿 (480px ~ 768px)
============================================ */
@media (min-width: 480px) and (max-width: 768px) {
  .title_font {
    font-size: 48px;
  }
  .card-title {
    margin-bottom: 2px; /* 더 촘촘하게 */
  }

  .font_m {
    font-size: 24px;
  }

  .title_b {
    font-size: 20px;
  }

  .font_r {
    font-size: 15px;
  }

  .incision-cards {
    background-color: var(--color-light);
    padding: 24px 0;
  }

  .card-image {
    width: 350px;
  }

  .mb_only {
    display: inline;
  }
}

/* ============================================
   🔵 모바일 (최대 479px)
============================================ */
@media (max-width: 479px) {
  .incision-wrapper {
    margin: 0 auto;
    margin-top: 40px;
    padding: 0 10%;
  }

  .title_font {
    font-size: 24px;
  }

  .font_m {
    font-size: 14px;
  }

  .title_b {
    font-size: 14px;
  }

  .font_r {
    font-size: 11px;
  }

  .incision-cards {
    background-color: var(--color-light);
    padding: 24px 0;
  }

  .card-image {
    width: 160px;
  }

  .mb_only {
    display: inline;
  }
}
</style>
