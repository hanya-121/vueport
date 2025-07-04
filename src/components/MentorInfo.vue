<template>
  <v-container class="mentor-implant" fluid>
    <h2 class="title_font text-center">멘토 보형물 특징</h2>

    <!-- 이미지 가운데 정렬 + 크게 -->
    <div class="image-wrapper">
      <v-img src="/images/mentor.jpg" class="mentor-img" />
    </div>

    <div class="desc-wrapper text-center mt-4">
      <p class="font_m">
        충전율이 높은 겔, 다양한 사이즈 선택 가능<br />
        정밀한 기술로 체형·취향 반영, <br class="mb_only" />자연스럽고 풍만한
        볼륨 연출 가능
      </p>
    </div>
  </v-container>
</template>

<script>
//
</script>

<style scoped>
.mentor-implant {
  margin-top: 100px;
  padding: 0 10%;
}

.title_font {
  font-size: 64px;
  margin-bottom: 40px;
}

.font_m {
  font-size: 32px;
}

.image-wrapper {
  display: flex;
  justify-content: center;
}

.mentor-img {
  max-width: 1500px;
  width: 100%;
  height: auto;
}

/* ============================================
   🔴 피시 (1025px 이상)
============================================ */
@media (min-width: 1025px) {
  .mentor-implant {
    margin-top: 100px;
  }

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
  .mentor-implant {
    margin-top: 90px;
  }

  .title_font {
    font-size: 64px;
  }

  .font_m {
    font-size: 30px;
  }

  .mb_only {
    display: none;
  }
}

/* ============================================
   🟢 태블릿 (480px ~ 768px)
============================================ */
@media (min-width: 480px) and (max-width: 768px) {
  .mentor-implant {
    margin-top: 70px;
  }

  .title_font {
    font-size: 48px;
  }

  .font_m {
    font-size: 22px;
  }

  .mb_only {
    display: none;
  }
}

/* ============================================
   🔵 모바일 (최대 479px)
============================================ */
@media (max-width: 479px) {
  .mentor-implant {
    margin-top: 70px;
  }

  .title_font {
    font-size: 24px;
  }

  .font_m {
    font-size: 14px;
  }

  .mb_only {
    display: inline;
  }
}
</style>
