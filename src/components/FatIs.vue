<template>
  <div class="fat-is">
    <!-- 소개 영역 -->
    <div class="fat-is-title title_font">지방흡입이란?</div>
    <div class="fat-is-desc font_b">
      지방세포의 숫자를 줄여 <br class="mb_only2" />
      <span>실질적 사이즈 감소 효과</span>
    </div>
    <div class="fat-is-text font_m">
      특정 부위에 과하게 축적된 지방을 제거해 <br class="mb_only" />균형 잡히고
      매끈한 몸매를 만드는 체형교정 수술
    </div>

    <!-- 이미지 영역 -->
    <div class="fat-is-subtitle title_font">지방흡입 적용부위</div>
    <img :src="bodyTargetImg" alt="지방흡입 적용부위" class="fat-is-image" />
  </div>
</template>

<script setup>
import bodyTargetImg from '@/assets/img/fat/body_target.png'
</script>

<style scoped>
.fat-is {
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
}

.fat-is-title {
  font-size: 64px;
  margin-bottom: 40px;
}

.fat-is-desc {
  font-size: 32px;
}

.fat-is-text {
  font-size: 20px;
  margin-bottom: 70px;
}

.fat-is-subtitle {
  font-size: 64px;
  margin-bottom: 30px;
}

span {
  color: #8a75b8;
}

.fat-is-image {
  width: 50%;
  height: 50%;
}

.mb_only,
.mb_only2 {
  display: none;
}

/* ============================================
   🔴 피씨 (1025px 이상)
============================================ */
@media (min-width: 1025px) {

  .fat-is-title,
  .fat-is-subtitle {
    font-size: 64px;
  }

  .fat-is-desc {
    font-size: 32px;
  }

  .fat-is-text {
    font-size: 20px;
  }

  .mb_only,
  .mb_only2 {
    display: none;
  }
}

/* ============================================
   🟡 패드 (769px ~ 1024px)
============================================ */
@media (min-width: 769px) and (max-width: 1024px) {
  .fat-is {
    margin-top: 90px;
    text-align: center;
  }

  .fat-is-title,
  .fat-is-subtitle {
    font-size: 64px;
  }

  .fat-is-desc {
    font-size: 32px;
  }

  .fat-is-text {
    font-size: 20px;
  }

  .mb_only,
  .mb_only2 {
    display: none;
  }
}

/* ============================================
   🟢 태블릿 (480px ~ 768px)
============================================ */
@media (min-width: 480px) and (max-width: 768px) {
  .fat-is {
    margin-top: 70px;
    text-align: center;
  }

  .fat-is-title,
  .fat-is-subtitle {
    font-size: 40px;
  }

  .fat-is-desc {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .fat-is-text {
    font-size: 18px;
  }

  .mb_only2 {
    display: none;
  }

  .mb_only {
    display: inline;
  }
}

/* ============================================
   🔵 모바일 (최대 479px)
============================================ */
@media (max-width: 479px) {

  .fat-is-title,
  .fat-is-subtitle {
    margin-bottom: 20px;
    font-size: 24px;
  }

  .fat-is {
    margin-top: 70px;
  }

  .fat-is-desc {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .fat-is-text {
    font-size: 12px;
  }

  .fat-is-image {
    width: 70%;
    height: 70%;
  }

  .mb_only,
  .mb_only2 {
    display: inline;
  }
}
</style>
