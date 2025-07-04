<template>
  <v-container fluid class="lifting">
    <!-- ===== 탭 메뉴 영역 ===== -->
    <div class="tab-lifting">
      <v-tabs v-model="tab" centered grow>
        <v-tab
          v-for="(item, index) in tabs"
          :key="item.title"
          class="font_b custom-tab"
          :class="{ 'v-tab--selected': tab === index }"
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </div>

    <!-- ===== 탭 콘텐츠 영역 ===== -->
    <div class="tab-content-lifting">
      <v-window v-model="tab">
        <v-window-item
          v-for="(item, index) in tabs"
          :key="item.title"
          :value="index"
        >
          <div class="content-inner text-center">
            <!-- 상단 텍스트 -->
            <h2
              class="top-text"
              v-html="isMobile ? item.topText.mobile : item.topText.desktop"
            ></h2>

            <!-- 이미지 -->
            <div class="image-lifting">
              <v-img :src="item.img" class="tab-image" cover />
            </div>

            <!-- 하단 텍스트 -->
            <p
              class="bottom-text"
              v-html="
                isMobile ? item.bottomText.mobile : item.bottomText.desktop
              "
            ></p>
          </div>

          <!-- ✅ 수술정보 (리프팅 탭 제외하고만 보여줌) -->
          <SurgeryInfo v-if="tab !== 0" :type="tabs[tab].title" />
        </v-window-item>
      </v-window>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SurgeryInfo from "./SurgeryInfo1.vue";

// 현재 선택된 탭
const tab = ref(0);

// 모바일 여부 판단용
const isMobile = ref(false);
onMounted(() => {
  const checkWidth = () => {
    isMobile.value = window.innerWidth <= 1023;
  };
  checkWidth();
  window.addEventListener("resize", checkWidth);
});

// 탭 내용 정의
const tabs = [
  {
    title: "리프팅",
    topText: {
      desktop: "탄력있고 매끈한 얼굴라인이 되기 위해서",
      mobile: "탄력있고 매끈한<br/>얼굴라인이 되기 위해서",
    },
    bottomText: {
      desktop:
        "근막층까지 쫙 당겨 더 깊이 더 많이 더 확실하게 피부 안쪽부터 처진 피부 탄력까지",
      mobile:
        "근막층까지 쫙 당겨<br/>더 깊이 더 많이 더 확실하게<br/>피부 안쪽부터 처진 피부 탄력까지",
    },
    img: "/images/lifting.png",
  },
  {
    title: "지방이식",
    topText: {
      desktop: "줄어든 얼굴의 볼륨을 회복하여 동안이 되기 위해",
      mobile: "줄어든 얼굴의 볼륨을<br/>회복하여 동안이 되기 위해",
    },
    bottomText: {
      desktop:
        "본인의 지방을 이용하여 부작용이 낮아지고, 줄기세포 효과로 피부까지 좋아지게",
      mobile:
        "본인의 지방을 이용하여<br/>부작용이 낮아지고,<br/>줄기세포 효과로 피부까지 좋아지게",
    },
    img: "/images/fat.png",
  },
  {
    title: "보톡스/필러",
    topText: {
      desktop: "처진 라인, 깊어진 주름을 자연스럽게 개선하기 위해",
      mobile: "처진 라인, 깊어진 주름을<br/>자연스럽게 개선하기 위해",
    },
    bottomText: {
      desktop:
        "근육을 이완시켜 표정주름을 완화하고, 꺼진 부위에 볼륨을 채워 탄력있는 얼굴!",
      mobile:
        "근육을 이완시켜 표정주름을 완화하고,<br/>꺼진 부위에 볼륨을 채워 탄력있는 얼굴!",
    },
    img: "/images/botox.png",
  },
  {
    title: "귀족수술",
    topText: {
      desktop: "꺼진 팔자 부위를 입체감 있고 어려보이는 얼굴",
      mobile: "꺼진 팔자 부위를 <br/>입체감 있고 어려보이는 얼굴",
    },
    bottomText: {
      desktop:
        "자연스러운 실리콘 보형물로 볼륨을 채워 무표정이어도 생기 있는 인상",
      mobile:
        "자연스러운 실리콘 보형물로 볼륨을 채워<br/>무표정이어도 생기 있는 인상",
    },
    img: "/images/aristocrat.png",
  },
];
</script>

<style scoped>
.lifting {
  max-width: 80%;
}

.tab-content-lifting {
  background-color: var(--color-light);
  padding: 24px 0;
  overflow: hidden;
}

.image-lifting {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.tab-image {
  width: 70%;
  max-width: 1536px;
  height: auto;
  aspect-ratio: 2 / 1;
  object-fit: cover;
  object-position: center;
}

.custom-tab {
  flex: 1 1 0;
  white-space: normal;
  overflow: visible;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
  display: flex;
}

.v-tab.v-tab--selected {
  background-color: var(--color-primary) !important;
  color: var(--color-white) !important;
}

.top-text {
  font-size: 32px;
  font-weight: bold;
  margin: 32px 10%;
  white-space: normal !important;
  padding-top: 16px;
}

.bottom-text {
  font-size: 20px;
  margin: 32px 10%;
  white-space: normal !important;
}

/* ============================================
   🔴 피씨 (1025px 이상)
============================================ */
@media (min-width: 1025px) {
  .tab-image {
    max-width: 1536px;
  }

  .custom-tab {
    font-size: 32px;
    padding: 12px 16px !important;
  }

  .top-text {
    font-size: 32px;
  }

  .bottom-text {
    font-size: 20px;
  }
}

/* ============================================
   🟡 패드 (769px ~ 1024px)
============================================ */
@media (min-width: 769px) and (max-width: 1024px) {
  .lifting {
    margin-top: 90px;
  }
  .tab-image {
    max-width: 820px;
    aspect-ratio: auto;
  }

  .custom-tab {
    font-size: 24px;
    padding: 12px 16px;
  }

  .top-text {
    font-size: 28px;
  }

  .bottom-text {
    font-size: 18px;
  }
}

/* ============================================
   🟢 태블릿 (480px ~ 768px)
============================================ */
@media (min-width: 480px) and (max-width: 768px) {
  .lifting {
    margin-top: 70px;
  }

  .tab-image {
    max-width: 614px;
    height: 335px;
  }

  .custom-tab {
    font-size: 18px;
    padding: 10px 14px;
  }

  .top-text {
    font-size: 22px;
  }

  .bottom-text {
    font-size: 16px;
  }
}

/* ============================================
   🔵 모바일 (최대 479px)
============================================ */
@media (max-width: 479px) {
  .lifting {
    margin-top: 70px;
  }

  .v-tabs {
    gap: 0 !important;
    justify-content: center;
    flex-wrap: nowrap;
  }

  .custom-tab {
    font-size: 13px;
    padding: 10px 5px;
  }

  .tab-image {
    max-width: 220px;
    height: auto;
  }

  .top-text {
    font-size: 13px;
  }

  .bottom-text {
    font-size: 10px;
  }
}
</style>
