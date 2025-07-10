<template>
    <!-- 병원 소개 섹션 -->
    <v-container fluid class="clinic_sec">
        <v-row align="center" justify="center" class="flex-wrap">
            <v-col cols="12"><h2 class="title_font about_title">미드림성형외과</h2></v-col>
            
            <!-- 이미지 -->
            <v-col cols="12" md="6" class="clinic_img"></v-col>

            <!-- 텍스트 -->
            <v-col cols="12" md="6" class="clinic-text">
                <ul class="clinic_list">
                <li class="font_b about_sub">1. 원장 상담 진료로 정확한 진단 <br/>
                <p class="font_r about_text">원장이 직접 환자와의 상담을 주관하고, 상담실장은 이를 보완해주는 상담시스템이기 때문에 정확한
                                진단을 받고 수술 결과를 예측할 수 있습니다.</p></li>
                <li class="font_b about_sub">2. 절차와 주치의 개별의 진료 <br/>
                <p class="font_r about_text">원장이 직접 수술 중 환자의 몸 상태를 확인하기 때문에, 
                    수술 전 환자가 상담한 내용과 오차 없이 결과로 나타날 수 있도록 합니다.</p></li>
                <li class="font_b about_sub">3. 하루 진료 인원 제한 <br/>
                <p class="font_r about_text">환자 한 분 한 분에 대한 충분한 진료 시간의 확보가 곧 좋은 치료결과로 연결된다는 신념 아래, 
                    환자만족도가 높은 진료서비스를 진행하고 있습니다.</p></li>
                <li class="font_b about_sub">4. 가장 안전하고 필요한 수술만 <br/>
                <p class="font_r about_text">반드시 필요한 수술만, 가장 안전한 조건 하에서 검증된 방식으로 수술하는 것이 원칙입니다. 
                    미드림 성형외과에서는 비록 시간이 걸리더라도 한 명 한 명에게 최선을 다하는 진료를 하고 있습니다.</p></li>
                </ul>
            </v-col>
        </v-row>
    </v-container>


    <!-- 의료진 소개 섹션 -->
    <v-container fluid class="doctor_sec" >
        <v-row align="center" justify="center">
            <v-col cols="12" class="doc_title">
                <h2 class="title_font">의료진 소개</h2>
            </v-col>

            <v-col cols="12" md="6" class="doc_text">
                <p class="font_m doc_sub">성형외과 전문의 의학박사</p>
                <p class="doc_name font_b">백승준 <span class="font_m">대표원장</span></p>

                <div class="doc_wrap">
                    <!-- 이미지1 -->
                    <div class="doc_img1"></div>

                    <ul class="doc_history" >
                        <li class="font_r">서울대학교 의과대학 졸업</li>
                        <li class="font_r">성형외과 전문의 취득</li>
                        <li class="font_r">대학 성형외과 외래 교수</li>
                        <li class="font_r">서울 백병원 성형외과 외래 교수</li>
                        <li class="font_r">성형 재건 안면 기형 연구소 연구원</li>
                        <li class="font_r">대한 성형외과 학회 회원</li>
                        <li class="font_r">미용 성형외과 학회 회원</li>
                        <li class="font_r">성형외과 개원 협의회 회원</li>
                        <li class="font_r">전 B&K성형외과 대표원장</li>
                        <li class="font_r">전 세민성형외과 대표원장</li>
                    </ul>
                </div>

                
            </v-col>

            <!-- 이미지2 -->
            <v-col cols="12" md="6" class="doc_img2"></v-col>
        </v-row>
    </v-container>


    <!-- 운영 시간 섹션 -->
    <v-container fluid class="contact_sec">
        <v-row justify="center">
            <v-col cols="12" class="title_font contact_title">오시는 길</v-col>
            <v-col cols="12" class="contact_img"></v-col>
        </v-row>
    </v-container>


    <!-- 지도 섹션 -->
    <v-container fluid class="map_sec">
        <v-row justify="center">
            <v-col cols="12" class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.
                2807151904543!2d127.02097567175514!3d37.51673256722566!2m3!1f0!2f0!3f0!3m2!
                1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e9131a5e19%3A0x502aa58c6730b8d5!2z66-
                465Oc66a87ISx7ZiV7Jm46rO87J2Y7JuQ!5e0!3m2!1sko!2skr!4v1751594331084!5m2!1sko!2skr" 
                width="100%" height="400" style="border:0;" 
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </v-col>
        </v-row>
    </v-container>


    <!-- 교통 섹션 -->
    <v-container class="transport_sec">
        <v-row dense justify="center">
            <!-- 왼쪽 2개 -->
            <v-col cols="12" md="6">
                <!-- 지하철 -->
                <div class="transport-block">
                    <h3 class="transport-title font_b">지하철</h3>
                    <div class="label-line">
                        <span class="label-box orange font_r">3호선</span>
                        <span class="font_r">신사역 1번 출구, 도보 1분</span>
                    </div>
                    <p class="desc font_r">신사역 1번 출구 30m 직진 > 브로드웨이 극장 > 1층 에메랄드 약국 건물</p>
                </div>

                <!-- 버스 -->
                <div class="transport-block mt-15 bus">
                    <h3 class="transport-title font_b ">버스</h3>
                    <div class="label-line">
                        <span class="label-box blue font_r">간선버스</span>
                        <span class="font_r">142번, 145번, 148번, 240번, 4212번</span>
                    </div>
                    <div class="label-line">
                        <span class="label-box green font_r">지선버스</span>
                        <span class="font_r">4312번, 4412번, 4422번, 4424번</span>
                    </div>
                    <div class="label-line">
                        <span class="label-box red font_r">광역버스</span>
                        <span class="font_r">9711번</span>
                    </div>
                </div>
            </v-col>

            <!-- 오른쪽 2개 -->
            <v-col cols="12" md="6">
                <!-- 자가용 -->
                <div class="transport-block">
                    <h3 class="transport-title font_b">자가용</h3>
                    <p class="desc font_r">
                        빌딩 내 무료 주차 가능<br/>
                        일반 승용차는 상시 가능하나 SUV차량은 주차 불가능<br/>
                        에메랄드 약국 골목에서 우회전 하시면 주차장 입구가 보입니다.
                    </p>
                </div>

                <!-- 비행기 -->
                <div class="transport-block mt-15 air">
                    <h3 class="transport-title font_b">비행기</h3>
                    <span class="desc font_r label-box sky">인천공항</span>
                    <p class="desc font_r">
                        제1여객터미널/제2여객터미널 > 1층 4번 승차장<br/>
                        지하1층 15번 승차장 > 6009번 리무진 버스 탑승 > 신사역에서 하차
                    </p>
                    <span class="desc font_r label-box sky">김포공항</span>
                    <p class="desc font_r">
                        공항터미널까지 셔틀버스 이용 > 택시 혹은 버스로<br/>
                        강남 신사동 사거리까지 이동
                    </p>
                    <span class="desc font_r label-box beige">지하철 9호선</span>
                    <p class="desc font_r">
                        이용 시 고속터미널역에서 3호선으로 환승 > 신사역 하차
                    </p>
                </div>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
</script>

<style>
@import '../styles/_About.scss'
</style>