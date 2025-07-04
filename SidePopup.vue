<template>
  <!-- Top 버튼 -->
  <div class="floating-top"  
  :class="{ 'hide-floating': (chatOpen || overlay) && isMobile }">
    <v-btn icon class="floating-btn" color="#8a75b8" @click="scrollToTop">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </div>

  <div class="floating-bar"
  :class="{ 'hide-floating': (chatOpen || overlay) && isMobile }">
    <!-- 위챗 버튼 -->
    <v-btn icon class="floating-btn b_nav" color="#8a75b8" @click="chatOpen = true">
      <v-icon>mdi-wechat</v-icon>
    </v-btn>
   <!-- 위챗 상담 팝업 -->
    <v-overlay v-model="chatOpen" class="chat-popup-overlay">
      <div class="chat-popup-card">
        <!-- 닫기 버튼 -->
        <v-btn icon class="chat-close-btn" @click="chatOpen = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <!-- 타이틀 영역 -->
        <div class="chat-header">
          <div class="chat-title">미드림성형외과</div>
          <div class="chat-subtitle">내일 오전 10시부터 운영해요</div>
        </div>

        <!-- 본문 -->
        <div class="chat-body">
          <!-- 로고 + 문의 -->
          <v-avatar size="64" class="chat-logo">
            <img :src="logo" alt="로고" />
          </v-avatar>
          <div class="chat-label">미드림성형외과에 문의하기</div>
          <div class="chat-hours">운영시간 보기</div>

          <!-- 메시지 + 프로필 -->
          <div class="chat-message-wrap">
            <v-avatar size="32" class="chat-profile">
              <img :src="logo" />
            </v-avatar>
            <div class="chat-message">
              <strong>미드림성형외과</strong><br />
              <div v-html="currentMessage"></div>
            </div>
          </div>

          <!-- 버튼 -->
          <div class="chat-buttons">
            <v-btn class="chat-btn" color="#8a75b8" variant="outlined" @click="updateMessage('map')">✨ 오시는길</v-btn>
            <v-btn class="chat-btn" color="#8a75b8" variant="outlined" @click="updateMessage('consult')">😊 상담안내</v-btn>
            <v-btn class="chat-btn" color="#8a75b8" variant="outlined" @click="updateMessage('reserve')">📅 예약하기</v-btn>
            <v-btn class="chat-btn" color="#8a75b8" variant="outlined" @click="updateMessage('call')">📞 전화문의</v-btn>
            <v-btn class="chat-btn" color="#8a75b8" variant="outlined" @click="updateMessage('kakao')">💗 카톡문의</v-btn>
          </div>
        </div>
      </div>
    </v-overlay>

    <!-- 전화 팝업 -->
    <v-btn icon class="floating-btn b_nav" color="#8a75b8" @click="overlay = true">
      <v-icon>mdi-phone</v-icon>
    </v-btn>

    <!-- 상단 고정 전화상담 팝업 -->
    <v-overlay v-model="overlay" class="custom-overlay" persistent>

      <!-- 모바일용 -->
      <div v-if="isMobile" class="mobile-call-ui">
      <!-- 전화 버튼 -->
      <v-btn
        block
        color="#8a75b8"
        class="mobile-call-btn"
        height="50"
        @click="callNow"
      >
        <v-icon start size="24">mdi-phone</v-icon>
        <span class="side_call" style="font-size: 16px;">02-515-0022</span>
      </v-btn>

      <!-- 취소 버튼 -->
      <v-btn
        block
        color="#8a75b8"
        class="mobile-cancel-btn"
        height="50"
        @click="overlay = false"
      >
        취소하기
      </v-btn>
    </div>

      <!-- 태블릿~피씨 전용 -->
      <div v-else class="popup-wrapper">
        <v-card class="popup-card">
          <!-- 닫기 버튼만 상단 오른쪽 -->
          <v-btn @click="overlay = false" class="close-btn" icon variant="text" size="small">
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>

          <!-- 중앙 정렬된 제목 + 번호 -->
          <div class="popup-title-area">
            <div class="popup-title">미드림성형외과 전화상담</div>
            <div class="popup-subtitle">02-515-0022</div>
          </div>

          <!-- 입력폼 -->
          <v-row class="mt-4" dense>
            <v-col cols="4">
              <v-text-field density="comfortable" label="이름" variant="outlined" bg-color="white" />
            </v-col>
            <v-col cols="4">
              <v-text-field density="comfortable" label="연락처" variant="outlined" bg-color="white" />
            </v-col>
            <v-col cols="4">
              <v-select
                label="상담부위"
                :items="['눈', '코', '동안', '쁘띠', '체형']"
                variant="outlined"
                density="comfortable"
                bg-color="white"
              />
            </v-col>
          </v-row>

          <!-- 신청 버튼 -->
          <v-btn
            class="mb-2"
            block
            color="white"
            style="color: #000; font-weight: 700; height: 48px;"
            rounded="xl"
            @click="submitConsultation"
          >
            전화 상담 신청
          </v-btn>

          <!-- 개인정보 수집 동의 -->
          <div class="consent-wrap">
            <v-checkbox
              v-model="agree"
              density="compact"
              hide-details
              color="primary"
              class="consent-checkbox"
            />
            <span class="consent-text">
              개인정보 수집 및 이용에 관한 사항에 동의 [필수]
              <u>자세히보기</u>
            </span>
          </div>
        </v-card>
      </div>
    </v-overlay>

    <!-- 유튜브 -->
    <v-btn
      icon
      class="floating-btn b_nav"
      color="#8a75b8"
      tag="a"
      href="https://www.youtube.com/@meedreamBAEK"
      target="_blank"
    >
      <v-icon>mdi-youtube</v-icon>
    </v-btn>

    <!-- 비포애프터 -->
    <v-btn
      icon
      class="floating-btn b_nav"
      color="#8a75b8"
    >
      <v-icon>mdi-image-multiple</v-icon>
    </v-btn>

  </div>

  

  <!-- 상담완료 v-dialog 팝업 추가 -->
  <v-dialog v-model="confirmDialog" max-width="300">
    <v-card class="pa-4 text-center">
      <v-card-text class="text-subtitle-1 font-weight-medium">
        상담 신청이 완료되었습니다.
      </v-card-text>
      <v-card-actions class="justify-center mt-2">
        <v-btn color="#8a75b8" variant="flat" @click="confirmDialog = false">확인</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, onMounted  } from 'vue'
import logo from '@/assets/img/logo/logo-height.svg' 

const chatOpen = ref(false)

const currentMessage = ref(`
  안녕하세요<br/>
  아름다움을 드리는<br />
  미드림성형외과입니다.<br /><br />
  고객님의 소중한 정보를 남겨주시면<br />
  전문 상담사가<br />
  직접 컨설팅을 해드릴테니<br />
  해당되는 사항을<br />
  부담없이 이야기 해주세요!
`)

function updateMessage(type) {
  const messages = {
    map: `
      📍 저희 병원은 서울 강남구에<br />
      위치해 있어요.<br /><br />
      자세한 위치는 아래 링크에서<br />
      확인해주세요!<br />
      <a href="https://map.kakao.com/link/map/미드림성형외과,37.517236,127.047325" 
         target="_blank" 
         style="color: #8a75b8; font-weight: bold;">
         🗺️ 카카오맵 안내
      </a>
    `,
    consult: `
      😊 성형 상담은<br />
      매일 오전 10시부터 오후 6시까지<br />
      가능해요.<br /><br />
      상담을 원하시는 부위를<br />
      말씀해 주세요!
    `,
    reserve: `
      📅 예약을 원하시면<br />
      원하시는 날짜와 시간을<br />
      남겨주세요.<br /><br />
      담당자가 확인 후<br />
      빠르게 연락드릴게요.
    `,
    call: `
      📞 전화상담은<br />
      02-515-0022로 주시면<br />
      빠르게 응대해 드려요!
    `,
    kakao: `
      💗 카카오톡 문의는<br />
      카톡 Id: meedream1004를<br />
      추가하시고,<br /><br />
      메시지 주시면<br />
      친절하게 도와드릴게요!
    `
  }

  currentMessage.value = messages[type]
}


const menu1 = ref(false)
const overlay = ref(false)
const confirmDialog = ref(false)
const agree = ref(false)

//전화 모바일용 스크립트
const isMobile = ref(false)

const callNow = () => {
  window.location.href = 'tel:025150022'
}

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 375
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)
})


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const submitConsultation = () => {
  confirmDialog.value = true
}
</script>

<style scoped>
.hide-floating {
  display: none !important;
}

.floating-top {
  position: fixed;
  right: 1%;
  bottom: 3%;
  z-index: 9999;
}

.floating-bar {
  position: fixed;
  bottom: 10.5%;
  right: 1%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 9999;
}

.floating-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.floating-btn:hover {
  color: #8a75b8  !important;
  background-color: #eee9f0 !important;
}

/* 채팅팝업 */
.chat-popup-overlay {
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0;
  background-color: transparent;
}

.chat-popup-card {
  width: 360px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  padding: 24px 16px;
  position: fixed;
  bottom: 80px;
  right: 130px;
}

.chat-close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  color: gray;
}

.chat-header {
  text-align: center;
  margin-bottom: 16px;
}

.chat-title {
  font-weight: bold;
  font-size: 16px;
}

.chat-subtitle {
  font-size: 13px;
  color: #666;
}

.chat-logo {
  display: block;
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  margin: 50px auto 12px auto;
}

.chat-label {
  text-align: center;
  font-weight: bold;
  margin-top: 8px;
}

.chat-hours {
  text-align: center;
  font-size: 12px;
  color: #999;
  margin-bottom: 16px;
}

.chat-message-wrap {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-right: 50px;
  margin-bottom: 24px;
}

.chat-profile {
  flex-shrink: 0;
  margin-top: 4px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
}

.chat-message {
  background-color: #f2f2f2;
  padding: 12px 14px;
  border-radius: 12px;
  font-size: 14px;
  color: #333;
  max-width: 100%;
  line-height: 0.8;
  white-space: pre-line;
}

.chat-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 10px;
  margin-left: 120px;
}

.chat-btn {
  border-radius: 999px;
  font-size: 13px;
  justify-content: center;
}



/* 전화팝업 상단 고정 위치 */

/* 모바일 */
.mobile-simple-popup .v-card {
  border-radius: 12px 12px 0 0;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 태블릿~피씨 */
.custom-overlay {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10000;
}

.popup-wrapper {
  width: 500px;
}

.popup-card {
  padding: 40px 40px 30px;
  border-radius: 20px;
  background-color: #8a75b8;
  color: white;
  font-family: 'Pretendard', sans-serif;
  position: relative;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

/* 닫기 버튼: 상단 우측 */
.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  min-width: 24px;
  color: white;
}

/* 중앙 정렬된 타이틀 섹션 */
.popup-title-area {
  text-align: center;
  margin-top: 16px;
}

.popup-title {
  font-size: 24px;
  font-weight: bold;
}

.popup-subtitle {
  font-size: 18px;
  margin-top: 8px;
  font-weight: 500;
}

/* 체크박스 정렬 */
.consent-wrap {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
}

.consent-text {
  font-size: 12px;
  font-weight: bold;
  color: #fff;
}



/* 미디어쿼리 */


/* 패드 */
@media screen and (max-width: 1024px) and (min-width: 769px) {
.floating-bar {
  position: fixed;
  bottom: 8.3%;
  right: 1.1%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 9999;
}

.floating-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
}
/* 태블릿 */
@media screen and (max-width: 768px) and (min-width: 376px) {
.floating-bar {
  bottom: 10.2%;
}
}

/* 모바일 */
@media screen and (max-width: 375px) {

  .floating-top {
    right: 3%;
    bottom: 10%;
    z-index: 9999;
  }

  .floating-bar {
      height: 60px;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      flex-direction: row;
      gap: 0px !important;
      background-color: white;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    }

  .floating-btn{
    width: 50px;
    height: 50px;   
  }
  
  .b_nav {
    width: 94px;
    height: 50px;
    border-radius: 0%;
    color: #8a75b8 !important;
    background-color: #fff !important;
    box-shadow: none !important;
    font-size: larger;
    border-right: 1px solid #eee9f0;
  }

  .b_nav:hover {
    background-color: #8a75b8 !important;
    color: #fff !important;
  }



  /* 채팅팝업 풀스크린 */
  .chat-popup-overlay {
    padding: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3); /* 어두운 배경으로 전체 덮기 */
  }

  .chat-popup-card {
    width: 100vw;
    height: 100vh;
    border-radius: 0px;
    position: fixed;
    right: -187px;
    bottom: -333px;
    z-index: 19999; /* 네비게이션보다 위로 */
  }

  .chat-buttons {
    margin-left: 100px;
    grid-template-columns: 1fr 1fr;
  }





  /* 전화 */
  .mobile-call-ui {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 330px;
    position: fixed;
    bottom: -570px;
    left: -165px;
    z-index: 9999;
  }

  .hide-top-btn {
  display: none !important;
  }

  .side_call {
   font-weight: 300;
  }

  .mobile-cancel-btn{
    font-weight: 400;
    font-size: 16px;
  }
}


/* 320w 모바일 */
@media screen and (max-width: 320px) {
  .floating-top {
    right: 3%;
    bottom: 6% !important;
    z-index: 9999;
  }

  .b_nav {width: 80px;}

  .b_nav:hover {
    background-color: #8a75b8 !important;
    color: #fff !important;
  }

/* 채팅팝업 */
  .chat-popup-card {
    right: -160px;
    bottom: -333px;
  }

/* 전화 */
 .mobile-call-ui {
  width: 300px;
  position: fixed;
  left: -150px;
}
}



/* 아이콘 애니메이션 */
.b_nav:hover .v-icon {
  animation: shake-icon 0.6s ease-in-out;
}

@keyframes shake-icon {
  0%   { transform: rotate(0deg); }
  25%  { transform: rotate(-15deg); }
  50%  { transform: rotate(15deg); }
  75%  { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
}

</style>
