<template>
  <v-container :class="['mentor-point', { 'light-bg': isNarrowScreen }]" fluid>
    <h2 class="title_font text-center">멘토 가슴성형 포인트</h2>

    <!-- 탭 (PC/패드) -->
    <div v-if="!isNarrowScreen" class="tab-wrapper d-flex justify-center">
      <div
        v-for="(tab, index) in tabContents"
        :key="tab.label"
        :class="['tab-button font_b', { active: activeTab === index }]"
        @click="handleTabClick(index)"
      >
        {{ tab.label }}
      </div>
    </div>

    <!-- 📱 narrow-screen: 카드 5개 전부 -->
    <div v-if="isNarrowScreen" class="narrow-content mt-6 text-center">
      <div
        v-for="(item, index) in tabContents"
        :key="index"
        class="point-card"
      >
        <h3 class="point-title font_b">{{ item.label }}</h3>
        <v-img :src="`/images/${item.img}`" class="point-image" contain />
        <p class="sub-desc font_sb mb-2">{{ item.subtitle }}</p>
        <p class="desc font_r" v-html="item.text.replace(/\n/g, '<br>')" />
      </div>
    </div>

    <!-- PC/패드용 이미지 단독 -->
    <div v-else class="image-wrapper mt-6">
      <v-img :src="getImageSrc(activeTab)" class="point-image" contain />
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isNarrowScreen = ref(false);
const activeTab = ref(0);

// 통합된 탭 데이터
const tabContents = [
  {
    label: "POINT_01",
    subtitle: "촉감과 볼륨 개선",
    img: "point01.png",
    text: "촉감은 자연스럽게, 볼륨은 풍성하게\n리플링(주름, 비침) 현상 최소화 설계\nSECRET EDGE 기술로 자연스러운 촉감과 외관 유지",
  },
  {
    label: "POINT_02",
    subtitle: "체형에 맞춘 다양한 사이즈",
    img: "point02.png",
    text: "모더레이트 플러스~하이 프로파일로 구성\n실리콘 충전량 조절로 가슴 둘레와 사이즈에 맞춤 가능",
  },
  {
    label: "POINT_03",
    subtitle: "작은 둘레에도 큰 볼륨감",
    img: "point03.png",
    text: "100%에 가까운 충전률로 안정된 형태 유지\n골고루 분포된 내용물로 더 큰 볼륨감 연출",
  },
  {
    label: "POINT_04",
    subtitle: "선택 가능한 질감",
    img: "point04.png",
    text: "스무스 타입: 부드럽고 자연스러운 촉감\n마이크로텍스처 타입: 균일하고 입체적인 질감\n취향에 따라 질감 선택 가능",
  },
  {
    label: "POINT_05",
    subtitle: "검증된 안전성과 평생 보증",
    img: "point05.png",
    text: "FDA 승인 완료된 실리콘/외피 사용\n수술 후 문제 발생 시 평생 무료 교체 보증",
  },
];

const getImageSrc = (index) => `/images/point0${index + 1}_pad.png`;

// 탭 클릭 시 모바일 UX 고려한 스크롤 이동
function handleTabClick(index) {
  activeTab.value = index;
  if (isNarrowScreen.value) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// 반응형 체크
const checkWidth = () => {
  isNarrowScreen.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkWidth();
  window.addEventListener("resize", checkWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkWidth);
});
</script>

<style scoped>
.mentor-point {
  margin-top: 100px;
  padding: 0 10%;
}

.light-bg {
  background-color: var(--light);
}

.title_font {
  font-size: 64px;
  margin-bottom: 40px;
}

.tab-wrapper {
  gap: 12px;
  flex-wrap: wrap;
}

.tab-button {
  font-size: 32px;
  padding: 25px 55px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: 0.2s;
}

.tab-button.active {
  border-bottom: 3px solid #8a75b8;
  color: #8a75b8;
}

.image-wrapper {
  display: flex;
  justify-content: center;
}

.point-image {
  max-width: 1300px;
  width: 100%;
  height: auto;
}

.desc {
  font-size: 16px;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
  white-space: pre-line;
}

/* ============================================
   🟡 패드 (769px ~ 1024px)
============================================ */
@media (min-width: 769px) and (max-width: 1024px) {
  .title_font {
    font-size: 64px;
    margin-top: 90px;
  }

  .tab-button {
    font-size: 24px;
    padding: 20px 50px;
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
    margin-bottom: 30px;
  }

  .font_b {
    font-size: 24px;
    color: #8a75b8;
  }

  .font_sb {
    font-size: 20px;
  }

  .font_r {
    font-size: 18px;
    margin-bottom: 50px;
  }

  .point-image{
    width: 70%;
    margin: 0 auto;
  }
}

/* ============================================
   🔵 모바일 (최대 479px)
============================================ */
@media (max-width: 479px) {
  .mentor-implant {
    margin-top: 32px;
  }

  .title_font {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .font_b {
    font-size: 18px;
    color: #8a75b8;
  }

  .font_sb {
    font-size: 16px;
  }

  .font_r {
    font-size: 12px;
    margin-bottom: 50px;
  }

  .point-image{
    width: 70%;
    margin: 0 auto;
  }
}

</style>
