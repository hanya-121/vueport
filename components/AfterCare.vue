<template>
  <v-container class="aftercare" fluid>
    <h2 class="title_font text-center">AFTER CARE</h2>
    <div class="image-wrapper mt-6 text-center">
      <v-img :src="getResponsiveImage()" class="aftercare-img" contain />
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";

const screenWidth = ref(window.innerWidth);

function getResponsiveImage() {
  if (screenWidth.value <= 480) {
    return "/images/aftercare.png"; // 모바일
  } else if (screenWidth.value <= 768) {
    return "/images/aftercare_tb.png"; // 태블릿
  } else {
    return "/images/aftercare_pad.png"; // 패드 & 피시
  }
}

onMounted(() => {
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
  });
});
</script>

<style scoped>
.aftercare {
  margin-top: 100px;
  padding: 0 10%;
}

.title_font {
  font-size: 64px;
  margin-bottom: 40px;
}

.aftercare-img {
  max-width: 1500px;
  width: 100%;
  height: auto;
}

/* ============================================
   🟡 패드 (769px ~ 1024px)
============================================ */
@media (min-width: 769px) and (max-width: 1024px) {
  .aftercare {
    margin-top: 90px;
    padding: 0 10%;
  }

  .title_font {
    font-size: 64px;
    margin-bottom: 40px;
  }
}

/* ============================================
   🟢 태블릿 (480px ~ 768px)
============================================ */
@media (min-width: 480px) and (max-width: 768px) {
  .aftercare {
    margin-top: 70px;
    padding: 0 10%;
  }

  .title_font {
    font-size: 48px;
    margin-top: 30px;
  }
}

/* ============================================
   🔵 모바일 (최대 479px)
============================================ */
@media (max-width: 479px) {
  .aftercare {
    margin-top: 70px;
    padding: 0 10%;
  }

  .title_font {
    font-size: 24px;
    margin-top: 30px;
  }
}
</style>
