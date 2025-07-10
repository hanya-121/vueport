<template>
  <v-container fluid class="fat">
    <div class="fat-target-wrapper">
      <!-- 타이틀 -->
      <div class="title-wrapper text-center">
        <h1 class="section-title title_font">부위별 지방흡입</h1>
      </div>

      <!-- 탭 메뉴 -->
      <div class="tab-wrapper">
        <v-tabs v-model="tab" centered>
          <v-tab v-for="(item, index) in tabs" :key="item.title" class="font_b custom-tab title_b"
            :class="{ 'v-tab--selected': tab === index }">
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </div>

      <!-- 탭 콘텐츠 -->
      <div class="tab-content-wrapper">
        <v-window v-model="tab">
          <v-window-item v-for="(item, index) in tabs" :key="item.title" :value="index">
            <div class="content-inner text-center">
              <h2 class="top-text font_m" v-html="isMobile ? item.mobileText : item.desktopText" />
              <div class="image-wrapper">
                <v-img :src="hoveredIndex === index ? item.hover : item.img" class="tab-image" contain
                  @mouseover="hoveredIndex = index" @mouseleave="hoveredIndex = null" />
              </div>
            </div>
          </v-window-item>
        </v-window>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import arm from "@/assets/img/fat/arm.png"
import armTarget from "@/assets/img/fat/arm_target.png"
import belly from "@/assets/img/fat/belly.png"
import bellyTarget from "@/assets/img/fat/belly_target.png"
import back from "@/assets/img/fat/back.png"
import backTarget from "@/assets/img/fat/back_target.png"
import thigh from "@/assets/img/fat/thigh.png"
import thighTarget from "@/assets/img/fat/thigh_target.png"
import flank from "@/assets/img/fat/flank.png"
import flankTarget from "@/assets/img/fat/flank_target.png"


const tab = ref(0);
const hoveredIndex = ref(null);

const isMobile = ref(false);
onMounted(() => {
  const updateDevice = () => {
    isMobile.value = window.innerWidth <= 479;
  };
  updateDevice();
  window.addEventListener("resize", updateDevice);
});

const tabs = [
  {
    title: "팔뚝",
    img: arm,
    hover: armTarget,
    desktopText: "민소매도 자신있게 탄력있는 슬림함",
    mobileText: "민소매도 자신있게 <br> 탄력있는 슬림함",
  },
  {
    title: "복부",
    img: belly,
    hover: bellyTarget,
    desktopText: "깊은 지방과 얕은 지방을 골고루 흡입하여 슬림한 복부",
    mobileText: "깊은 지방과 얕은 지방을 <br> 골고루 흡입하여 슬림한 복부",
  },
  {
    title: "등",
    img: back,
    hover: backTarget,
    desktopText: "울퉁불퉁한 등 라인, 뒷모습도 매끈하게",
    mobileText: "울퉁불퉁한 등 라인 <br> 뒷모습도 매끈하게",
  },
  {
    title: "허벅지",
    img: thigh,
    hover: thighTarget,
    desktopText: "전체 다리라인과 자연스럽게 이어지는 매끈함",
    mobileText: "전체 다리라인과 <br> 자연스럽게 이어지는 매끈함",
  },
  {
    title: "옆구리",
    img: flank,
    hover: flankTarget,
    desktopText: "튀어나온 옆구리살을 제거하여 S라인으로",
    mobileText: "튀어나온 옆구리살을 <br> 제거하여 S라인으로",
  },
];

</script>

<style scoped>
.fat {
  max-width: 80%;
}

.title-wrapper {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 64px;
  margin: 0;
}

.tab-content-wrapper {
  background-color: var(--color-light);
  height: 500px;
  padding: 24px 0;
  overflow: hidden;
}

.image-wrapper {
  display: flex;
  justify-content: center;
}

.tab-image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  object-position: center;
}

.custom-tab {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 16px 32px;
  text-align: center;
  white-space: nowrap;
  font-size: 32px;
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
}

/* ============================================
   🔴 피씨 (1025px 이상)
============================================ */
@media (min-width: 1025px) {
  .fat {
    margin-top: 100px;
  }

  .title_font {
    font-size: 64px;
  }

  .title_b {
    font-size: 32px;
  }

  .font_m {
    font-size: 32px;
  }
}

/* ============================================
   🟡 패드 (769px ~ 1024px)
============================================ */
@media (min-width: 769px) and (max-width: 1024px) {
  .fat {
    margin-top: 90px;
  }

  .title_font {
    font-size: 64px;
  }

  .title_b {
    font-size: 24px;
  }

  .font_m {
    font-size: 20px;
  }
}

/* ============================================
   🟢 태블릿 (480px ~ 768px)
============================================ */
@media (min-width: 480px) and (max-width: 768px) {
  .fat {
    margin-top: 70px;
  }

  .title_font {
    font-size: 48px;
  }

  .title_b {
    font-size: 20px;
  }

  .font_m {
    font-size: 18px;
  }
}

/* ============================================
   🔵 모바일 (최대 479px)
============================================ */
@media (max-width: 479px) {
  .fat {
    margin-top: 70px;
  }

  .title_font {
    font-size: 24px;
  }

  .title_b {
    font-size: 14px;
  }

  .font_m {
    font-size: 14px;
  }
}
</style>
