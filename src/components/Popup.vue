<template>
  <div class="popup-wrapper">
    <template v-for="(popup, i) in popupList" :key="i">
      <v-card v-if="popup.show" class="popup-box">
        <!-- 닫기 버튼 -->
     <v-btn icon class="popup-close" @click="closePopup(i)">  <!-- ✅ 바뀐 부분 -->
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <!-- 팝업 이미지 -->
        <img :src="popup.img" class="popup-img" />
      </v-card>
    </template>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

import pop1 from '../assets/img/popup/pop1.png'
import pop2 from '../assets/img/popup/pop2.png'
import notice1 from '../assets/img/popup/notice1.png'

import pop1_m from '../assets/img/popup/pop1_1.png'
import pop2_m from '../assets/img/popup/pop2_1.png'
import notice2_m from '../assets/img/popup/notice2.png'

const popupList = ref([])

const popupKeys = ['popup1', 'popup2', 'popup3']

const closePopup = (index) => {
  popupList.value[index].show = false
  sessionStorage.setItem(popupKeys[index], 'closed')  // ✅ 바뀐 부분
}

onMounted(() => {
  const isMobile = window.innerWidth <= 375

  const popupImages = [
    isMobile ? pop1_m : pop1,
    isMobile ? pop2_m : pop2,
    isMobile ? notice2_m : notice1,
  ]

  popupList.value = popupImages.map((img, i) => ({
    img,
    show: sessionStorage.getItem(popupKeys[i]) !== 'closed',  // ✅ 바뀐 부분
  }))
})
</script>

<style scoped>
.popup-wrapper {
  display: flex;
  gap: 20px;
  justify-content: center;
  position: fixed;
  top: 120px;
  left: 0;
  right: 0;
  z-index: 9999;
  pointer-events: none;
  /* 팝업 겹침 방지 */
}

.popup-box {
  width: 400px;
  max-width: 90vw;
  background-color: white;
  position: relative;
  pointer-events: all;
}

.popup-img {
  width: 100%;
  display: block;
}

.popup-close {
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 2;
  background-color: white;
}


/* 미디어 쿼리 */
@media (max-width: 1024px) {
  .popup-wrapper {
    display: block;
    /* flex 해제 */
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
  }

  .popup-box {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .popup-box:nth-child(1) {
    top: 100px;
  }

  .popup-box:nth-child(2) {
    top: 200px;
  }

  .popup-box:nth-child(3) {
    top: 300px;
  }
}

@media (max-width: 375px) {
  .popup-box:nth-child(1) {
    top: 30px;
  }

  .popup-box:nth-child(2) {
    top: 60px;
  }

  .popup-box:nth-child(3) {
    top: 90px;
  }
}
</style>
