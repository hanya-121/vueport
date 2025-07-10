<template>
<h1 class="title_font ba-title">Before&After</h1>
  <v-card flat>
    <!-- 탭 메뉴 -->
    <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
      <v-tab v-for="(title, index) in tabTitles" :key="index" :value="index + 1">
        {{ title }}
      </v-tab>
    </v-tabs>

    <!-- 탭 콘텐츠 -->
    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        v-for="(categoryItems, tabIndex) in tabContents"
        :key="tabIndex"
        :value="tabIndex + 1"
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="(item, i) in categoryItems"
              :key="i"
              cols="12"
              md="6"
              class="d-flex justify-center"
            >
              <v-card width="100%" class="pa-2">
                <v-row no-gutters>
                  <v-col cols="6">
                    <v-img
                      :src="item.img1"
                      aspect-ratio="1"
                    ></v-img>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      :src="item.img2"
                      aspect-ratio="1"
                    ></v-img>
                  </v-col>
                </v-row>
                <v-card-text class="text-center ba-text-subtitle font_b py-3 bg-sec">
                  {{ item.text }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>


<script setup>
import { ref } from 'vue'

//사진삽입
import nbf1 from '@/assets/img/ba/nose/b1.jpg'; import naf1 from '@/assets/img/ba/nose/a1.jpg';
import nbf2 from '@/assets/img/ba/nose/b2.jpg'; import naf2 from '@/assets/img/ba/nose/a2.jpg';
import nbf3 from '@/assets/img/ba/nose/b3.jpg'; import naf3 from '@/assets/img/ba/nose/a3.jpg'; 
import nbf4 from '@/assets/img/ba/nose/b4.jpg'; import naf4 from '@/assets/img/ba/nose/a4.jpg';
import nbf5 from '@/assets/img/ba/nose/b5.jpg'; import naf5 from '@/assets/img/ba/nose/a5.jpg';
import nbf6 from '@/assets/img/ba/nose/b6.jpg'; import naf6 from '@/assets/img/ba/nose/a6.jpg';
import ebf1 from '@/assets/img/ba/eyes/b1.jpg'; import eaf1 from '@/assets/img/ba/eyes/a1.jpg';
import ebf2 from '@/assets/img/ba/eyes/b2.jpg'; import eaf2 from '@/assets/img/ba/eyes/a2.jpg';
import ebf3 from '@/assets/img/ba/eyes/b3.jpg'; import eaf3 from '@/assets/img/ba/eyes/a3.jpg';
import ebf4 from '@/assets/img/ba/eyes/b4.jpeg'; import eaf4 from '@/assets/img/ba/eyes/a4.jpeg';
import ebf5 from '@/assets/img/ba/eyes/b5.jpeg'; import eaf5 from '@/assets/img/ba/eyes/a5.jpeg';
import ebf6 from '@/assets/img/ba/eyes/b6.jpg'; import eaf6 from '@/assets/img/ba/eyes/a6.jpg';
import bbf1 from '@/assets/img/ba/body/b1.jpg'; import baf1 from '@/assets/img/ba/body/a1.jpeg';
import bbf2 from '@/assets/img/ba/body/b2.jpeg'; import baf2 from '@/assets/img/ba/body/a2.jpeg';
import bbf3 from '@/assets/img/ba/body/b3.jpeg'; import baf3 from '@/assets/img/ba/body/a3.jpg';
import bbf4 from '@/assets/img/ba/body/b4.jpg'; import baf4 from '@/assets/img/ba/body/a4.jpeg';
import bbf5 from '@/assets/img/ba/body/b5.jpg'; import baf5 from '@/assets/img/ba/body/a5.jpg';
import bbf6 from '@/assets/img/ba/body/b6.jpg'; import baf6 from '@/assets/img/ba/body/a6.jpg';
import fbf1 from '@/assets/img/ba/face/b1.jpg'; import faf1 from '@/assets/img/ba/face/a1.jpg';
import fbf2 from '@/assets/img/ba/face/b2.jpg'; import faf2 from '@/assets/img/ba/face/a2.jpg';
import fbf3 from '@/assets/img/ba/face/b3.jpg'; import faf3 from '@/assets/img/ba/face/a3.jpg';
import fbf4 from '@/assets/img/ba/face/b4.jpg'; import faf4 from '@/assets/img/ba/face/a4.jpg';
import fbf5 from '@/assets/img/ba/face/b5.jpg'; import faf5 from '@/assets/img/ba/face/a5.jpg';
import fbf6 from '@/assets/img/ba/face/b6.jpg'; import faf6 from '@/assets/img/ba/face/a6.jpg';

const tab = ref(1)

const tabTitles = ['코성형', '눈성형', '동안성형', '체형성형']


// 탭별 콘텐츠 (4개의 카테고리)
const tabContents = [
  [
    //코성형
    {img1: nbf1, img2: naf1, text: '콧대 + 코끝 성형 (수술 후 1개월)'},
    {img1: nbf2, img2: naf2, text: '콧대 + 코끝 성형 (수술 후 2개월)'},
    {img1: nbf3, img2: naf3, text: '코 재수술 (수술 후 1개월)'},
    {img1: nbf4, img2: naf4, text: '콧대 + 코끝 성형 (수술 후 1개월)'},
    {img1: nbf5, img2: naf5, text: '콧대 + 코끝 성형 (수술 후 3개월)'},
    {img1: nbf6, img2: naf6, text: '콧대 + 코끝 성형 (수술 후 2개월)'},
    
  ],
  [
    //눈성형
    {img1: ebf1, img2: eaf1, text: '하안검플러스 + 외안각고정술 (수술 후 1개월)'},
    {img1: ebf2, img2: eaf2, text: '자연유착 (수술 후 5개월)'},
    {img1: ebf3, img2: eaf3, text: '눈두덩이 지방이식 + 절개쌍꺼풀 (수술 후 2개월)'},
    {img1: ebf4, img2: eaf4, text: '하안검플러스 + 외안각고정술 (수술 후 3개월)'},
    {img1: ebf5, img2: eaf5, text: '눈매교정 + 앞트임 + 듀얼트임 (수술 후 1개월)'},
    {img1: ebf6, img2: eaf6, text: '눈밑지방 재배치 (수술 후 4개월)'},
  ],
  [
    //동안성형
    {img1: fbf1, img2: faf1, text: '3D 실리프팅 (수술 후 1개월)'},
    {img1: fbf2, img2: faf2, text: '3D 실리프팅 (수술 후 1개월)'},
    {img1: fbf3, img2: faf3, text: '하안검플러스+외안각고정술 (수술 후 3개월)'},
    {img1: fbf4, img2: faf4, text: '눈밑지방재배치 (수술 후 1개월)'},
    {img1: fbf5, img2: faf5, text: '스마스거상술 + 목 포함 (수술 후 3개월)'},
    {img1: fbf6, img2: faf6, text: '하안검플러스 + 외안각고정술 (수술 후 1년)'},
  ],
  [
    //체형성형
    {img1: bbf1, img2: baf1, text: '지방이식 (수술후 5개월)'},
    {img1: bbf2, img2: baf2, text: '팔뚝 지방흡입 (수술 후 3주)'},
    {img1: bbf3, img2: baf3, text: '복부 지방흡입 (수술 후 1개월)'},
    {img1: bbf4, img2: baf4, text: '허벅지 지방흡입 (수술 후 3개월)'},
    {img1: bbf5, img2: baf5, text: '피코셀 지방이식 (수술 후 1개월)'},
    {img1: bbf6, img2: baf6, text: '복부 지방흡입[전체] (수술 후 1개월)'},
  ],
]
</script>

<style>
.ba-title{
  font-size: 64px;
  width: 96%;
  margin: 0 auto;
  margin-bottom: 64px;
}

.ba-text-subtitle{
  font-size: 20px;
}

/* ----------------------------------- 미디어쿼리 */

/* 아이패드 프로 */
@media screen and (max-width: 1024px) and (min-width:769px){
  .ba-title{
    margin-bottom: 40px;
  }
}

/* 아이패드 미니 */
@media screen and (max-width: 768px) and (min-width:376px){
  .ba-title{
    font-size: 48px;
    text-align: center;
    margin-bottom: 30px;
  }
  .ba-text-subtitle{
    font-size: 18px;
  }
}

/* 모바일 */
@media screen and (max-width: 375px){
  .ba-title{
    font-size: 32px;
    text-align: center;
    margin-bottom: 30px;
  }
  .ba-text-subtitle{
    font-size: 14px;
  }
}
</style>