<template>
  <v-container fluid>
    <!-- 타이틀 -->
    <div class="caution-wrapper">
      <div class="caution-title title_font">주의사항</div>
    </div>

    <!-- 표 영역 -->
    <div class="caution-table">
      <!-- 모바일/태블릿용: 세로 정렬 -->
      <div class="caution-mobile-layout">
        <div class="caution-subtitle font_b">수술 전</div>
        <div
          v-for="(item, index) in beforeList"
          :key="'mobile-before-' + index"
          class="caution-cell text-center font_m"
        >
          {{ item }}
        </div>

        <div class="caution-subtitle font_b">수술 후</div>
        <div
          v-for="(item, index) in afterList"
          :key="'mobile-after-' + index"
          class="caution-cell text-center font_m"
        >
          {{ item }}
        </div>
      </div>

      <!-- PC/패드용: 2단 구조 -->
      <div class="caution-pc-layout">
        <div class="caution-header-row">
          <div class="caution-header-cell text-center font_b">수술 전</div>
          <div class="caution-header-cell text-center font_b">수술 후</div>
        </div>

        <div class="caution-content-row">
          <div class="caution-column left">
            <div
              v-for="(item, index) in beforeList"
              :key="'before-' + index"
              class="caution-cell text-center font_m"
            >
              {{ item }}
            </div>
          </div>
          <div class="caution-column right">
            <div
              v-for="(item, index) in afterList"
              :key="'after-' + index"
              class="caution-cell text-center font_m"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
const beforeList = [
  "일주일전부터 비타민 등의 약물 복용을 중단해주세요",
  "2주 전부터 금주·금연을 해주세요",
  "수술 8시간 전 금식을 해주세요 (물 포함)",
  "단추가 있는 옷, 편한 복장을 착용해주세요",
  "생리 기간은 피해주세요",
];

const afterList = [
  "당일 가벼운 활동과 세안이 가능합니다",
  "다음날부터 머리감기 및 하반신 샤워가 가능합니다",
  "7일 후 팔을 사용할 수 있고 전신 샤워가 가능합니다",
  "3주 후 운동, 사우나, 음주, 흡연이 가능합니다",
];
</script>

<style>
.caution-wrapper {
  margin: 0 10%;
  text-align: center;
  justify-content: center;
}

.caution-title {
  width: 100%;
  max-width: 1536px;
  height: 100px;
  font-size: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px 0 0px;
}

.caution-table {
  margin: 0 10%;
  display: flex;
  flex-direction: column;
}

/* 모바일, 태블릿용 (1단 구조) */
.caution-mobile-layout {
  display: none;
  flex-direction: column;
}

.caution-subtitle {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin: 24px 0 8px;
}

/* PC/패드용 (2단 구조) */
.caution-pc-layout {
  display: none;
  flex-direction: column;
  gap: 20px;
}

.caution-header-row {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 20px;
}

.caution-header-cell {
  flex: 1;
  font-size: 32px;
}

.caution-content-row {
  display: flex;
  gap: 24px;
}

.caution-column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.caution-column.left {
  gap: 30px;
}

.caution-column.right {
  gap: 30px;
}

.caution-cell {
  padding: 20px 24px;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 10px;
  font-size: 32px;
  color: #111;
  text-align: left;
  word-break: keep-all;
}

/* ============================================
   🔴 피씨 (1025px 이상)
============================================ */
@media (min-width: 1025px) {
  .caution-title {
    height: 100px;
    font-size: 64px;
    margin: 100px 0 40px;
  }

  .caution-pc-layout {
    display: flex;
  }

  .caution-header-cell {
    font-size: 32px;
  }

  .caution-column.left {
    gap: 30px;
  }

  .caution-column.right {
    gap: 30px;
  }

  .caution-cell {
    font-size: 32px;
    padding: 20px 24px;
  }
}

/* ============================================
   🟡 패드 (769px ~ 1024px)
============================================ */
@media (min-width: 769px) and (max-width: 1024px) {
  .caution-title {
    height: 80px;
    font-size: 64px;
    margin: 90px 0 30px;
  }

  .caution-pc-layout {
    display: flex;
  }

  .caution-header-cell {
    font-size: 32px;
  }

  .caution-column.left,
  .caution-column.right {
    gap: 30px;
  }

  .caution-cell {
    font-size: 24px;
    padding: 20px 55px;
  }
}

/* ============================================
   🟢 태블릿 (480px ~ 768px)
============================================ */
@media (min-width: 480px) and (max-width: 768px) {
  .caution-title {
    height: 70px;
    font-size: 32px;
    margin: 40px 0 10px;
  }

  .caution-mobile-layout {
    display: flex;
    gap: 20px;
  }

  .caution-subtitle {
    font-size: 20px;
    margin-top: 20px;
  }

  .caution-cell {
    font-size: 18px;
    padding: 16px 20px;
  }
}

/* ============================================
   🔵 모바일 (최대 479px)
============================================ */
@media (max-width: 479px) {
  .caution-title {
    height: 60px;
    font-size: 32px;
    margin: 70px 0 10px;
  }

  .caution-mobile-layout {
    display: flex;
    gap: 14px;
  }

  .caution-subtitle {
    font-size: 24px;
    margin-top: 20px;
  }

  .caution-cell {
    font-size: 10px;
    padding: 14px 45px;
  }
}
</style>