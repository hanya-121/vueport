<template>
  <v-container fluid class="face">
    <!-- ===== 타이틀 영역 ===== -->
    <div class="chart-face">
      <div class="chart-title title_b">리프팅 실 종류</div>
    </div>

    <!-- ===== PC / 패드 (1024px 이상) : 전체 표 한 장 ===== -->
    <div class="chart-image-face only-pc">
      <v-img
        src="/images/lifting_pc.png"
        alt="리프팅 실 종류 표 (PC)"
        class="chart-image"
        cover
      />
    </div>

    <!-- ===== 태블릿 (768px ~ 1023px) : 카드 이미지 5장 세로 나열 ===== -->
    <div class="chart-image-face only-tablet">
      <template v-for="n in 5" :key="'tb-' + n">
        <v-img
          :src="`/images/lifting0${n}_tb.png`"
          :alt="`리프팅 실 종류 ${n}`"
          class="chart-image stack"
        />
        <hr class="divider" v-if="n < 5" />
      </template>
    </div>

    <!-- ===== 모바일 (최대 767px) : 카드 이미지 5장 세로 나열 ===== -->
    <div class="chart-image-face only-mobile">
      <template v-for="n in 5" :key="'mb-' + n">
        <v-img
          :src="`/images/lifting0${n}_mb.png`"
          :alt="`리프팅 실 종류 ${n}`"
          class="chart-image stack"
        />
        <hr class="divider" v-if="n < 5" />
      </template>
    </div>
  </v-container>
</template>

<script setup>
//
</script>

<style scoped>
.face {
  max-width: 80%;
}

.chart-title {
  width: 100%;
  max-width: 1536px;
  height: 100px;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 32px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0 30px;
}

.chart-image-face {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart-image {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}

/* 수동 높이 지정 (옵션) */
.chart-image-tablet {
  height: 200px;
}

.chart-image-mobile {
  height: 160px;
}

/* 이미지 사이 구분선 */
.divider {
  width: 100%;
  max-width: 640px;
  border: none;
  border-top: 1px solid #aaa;
  margin: 10px 0;
}

.only-tablet,
.only-mobile,
.only-pc {
  display: none;
}

/* ============================================
   🔴 피씨 (1025px 이상)
============================================ */
@media (min-width: 1025px) {
  .only-pc {
    display: flex;
  }
}

/* ============================================
   🟡 패드 (769px ~ 1024px)
      → PC와 동일하게 큰 표 한 장만 보여줌
============================================ */
@media (min-width: 769px) and (max-width: 1024px) {
  .only-pc {
    display: flex;
  }

  .chart-title {
    font-size: 32px;
    height: 70px;
    margin: 90px 0 30px;
  }
}

/* ============================================
   🟢 태블릿 (480px ~ 768px)
      → 카드형 이미지 5장 세로 배치
============================================ */
@media (min-width: 480px) and (max-width: 768px) {
  .only-tablet {
    display: flex;
  }

  .chart-title {
    height: 50px;
    font-size: 24px;
    margin: 70px 0 20px;
  }
}

/* ============================================
   🔵 모바일 (최대 479px)
      → 카드형 이미지 5장 세로 배치 (모바일 전용)
============================================ */
@media (max-width: 479px) {
  .only-mobile {
    display: flex;
  }

  .chart-title {
    height: 30px;
    font-size: 18px;
    margin: 70px 0 20px;
  }
}
</style>
