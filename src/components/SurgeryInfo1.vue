<template>
  <div class="surgery-info-wrapper">
    <div class="surgery-title title_font">수술정보</div>
    <div class="surgery-info-list">
      <div
        class="surgery-item"
        v-for="item in infoMap['가슴성형']"
        :key="item.label"
      >
        <v-icon :icon="item.icon" size="56" />
        <div class="label font_b">{{ item.label }}</div>
        <div class="value font_m">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const infoMap = {
  가슴성형: [
    {
      icon: "mdi-clock-time-four-outline",
      label: "수술시간",
      value: "1시간 30분",
    },
    { icon: "mdi-needle", label: "마취방법", value: "국소/수면" },
    { icon: "mdi-bed", label: "입원여부", value: "당일퇴원" },
    { icon: "mdi-content-cut", label: "실밥제거", value: "7~10일후" },
    {
      icon: "mdi-account-heart",
      label: "일상복귀",
      value: "3~5일후",
    },
    { icon: "mdi-hospital-box-outline", label: "내원치료", value: "2~3회" },
  ],
};
</script>

<style scoped>
.surgery-info-wrapper {
  margin: 100px 10% 0;
  text-align: center;
}

.surgery-title {
  font-size: 64px;
  margin-bottom: 40px;
}

.surgery-info-list {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.surgery-item {
  flex: 1;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.v-icon {
  font-size: 56px;
}

.label,
.value {
  font-size: 24px;
}

/* ============================================
   🟡 패드 (769px ~ 1024px)
============================================ */
@media (min-width: 769px) and (max-width: 1024px) {
  .surgery-info-wrapper {
    margin: 70px 0 40px;
    text-align: center;
    padding: 0 20px;
  }

  .surgery-title {
    font-size: 64px;
  }

  .surgery-info-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px 20px;
  }

  .surgery-item {
    width: calc(33.33% - 14px); /* 3개씩 정렬 (gap 고려) */
    flex: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .v-icon {
    font-size: 56px;
  }

  .label,
  .value {
    font-size: 20px;
  }
}

/* ============================================
   🟢 태블릿 (480px ~ 768px)
============================================ */
@media (min-width: 480px) and (max-width: 768px) {
  .surgery-info-wrapper {
    margin: 70px 10% 70px;
    text-align: center;
  }

  .surgery-title {
    font-size: 40px;
    margin-bottom: 24px;
  }

  .v-icon {
    font-size: 48px;
  }

  .label,
  .value {
    font-size: 14px;
  }

  .surgery-info-list {
    justify-content: center;
    gap: 30px 10px;
  }

  .surgery-item {
    width: 30%;
    flex: none;
    gap: 10px;
  }
}

/* ============================================
   🔵 모바일 (최대 479px)
============================================ */
@media (max-width: 479px) {
  .surgery-info-wrapper {
    margin: 40px 2% 30px;
    text-align: center;
  }
  .surgery-title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .v-icon {
    font-size: 40px;
  }

  .label,
  .value {
    font-size: 14px;
  }

  .surgery-info-list {
    justify-content: center;
    gap: 25px 5px;
  }

  .surgery-item {
    width: 30%;
    flex: none;
    gap: 10px;
  }
}
</style>
