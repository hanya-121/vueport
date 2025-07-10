<template>
    
<v-app-bar app>
    <v-toolbar-title>
        <div class="logo-header" @click="goToMain"></div>
    </v-toolbar-title>

    <!-- 햄버거 메뉴 (모바일 전용) -->
    <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <!-- 데스크탑 전용 메뉴 -->
    <div class="d-none d-md-flex">
         <!-- 병원소개 -->
        <v-menu offset-y>
            <template #activator="{ props }">
                <v-btn v-bind="props" text>병원소개
                    <v-icon end>mdi-menu-down</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(about, index) in aboutItems"
                :key="index"
                @click="navigate(about.link)"
                >
                    <v-list-item-title>{{ about.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- 코성형센터 -->
        <v-menu offset-y>
            <template #activator="{ props }">
                <v-btn v-bind="props" text>코성형센터
                    <v-icon end>mdi-menu-down</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(nose, index) in noseItems"
                :key="index"
                @click="navigate(nose.link)"
                >
                    <v-list-item-title>{{ nose.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- 눈성형센터 -->
        <v-menu offset-y>
            <template #activator="{ props }">
                <v-btn v-bind="props" text>눈성형센터
                    <v-icon end>mdi-menu-down</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(eyes, index) in eyesItems"
                :key="index"
                @click="navigate(eyes.link)"
                >
                    <v-list-item-title>{{ eyes.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- 동안성형센터 -->
        <v-menu offset-y>
            <template #activator="{ props }">
                <v-btn v-bind="props" text>동안성형센터
                    <v-icon end>mdi-menu-down</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(child, index) in childItems"
                :key="index"
                @click="navigate(child.link)"
                >
                    <v-list-item-title>{{ child.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- 체형성형센터 -->
        <v-menu offset-y>
            <template #activator="{ props }">
                <v-btn v-bind="props" text>체형성형센터
                    <v-icon end>mdi-menu-down</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(body, index) in bodyItems"
                :key="index"
                @click="navigate(body.link)"
                >
                    <v-list-item-title>{{ body.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- 커뮤니티 -->
        <v-menu offset-y>
            <template #activator="{ props }">
                <v-btn v-bind="props" text>커뮤니티
                    <v-icon end>mdi-menu-down</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(community, index) in communityItems"
                :key="index"
                @click="navigate(community.link)"
                >
                    <v-list-item-title>{{ community.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</v-app-bar>

<!-- 오른쪽에서 나오는 드로어 (모바일 전용) -->
<v-navigation-drawer
v-model="drawer"
location="right"
temporary
class="d-md-none"
>
    <v-expansion-panels multiple>
        <v-expansion-panel title="병원소개">
            <v-expansion-panel-text>
                <v-list>
                    <v-list-item
                    v-for="(about, index) in aboutItems"
                    :key="'about-' + index"
                    @click="navigate(about.link)"
                    >
                        <v-list-item-title>{{ about.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel title="코성형센터">
            <v-expansion-panel-text>
                <v-list>
                    <v-list-item
                    v-for="(nose, index) in noseItems"
                    :key="'nose-' + index"
                    @click="navigate(nose.link)"
                    >
                        <v-list-item-title>{{ nose.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel title="눈성형센터">
            <v-expansion-panel-text>
                <v-list>
                    <v-list-item
                    v-for="(eyes, index) in eyesItems"
                    :key="'eyes-' + index"
                    @click="navigate(eyes.link)"
                    >
                    <v-list-item-title>{{ eyes.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel title="동안성형센터">
            <v-expansion-panel-text>
                <v-list>
                    <v-list-item
                    v-for="(child, index) in childItems"
                    :key="'child-' + index"
                    @click="navigate(child.link)"
                    >
                        <v-list-item-title>{{ child.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel title="체형성형센터">
            <v-expansion-panel-text>
                <v-list>
                    <v-list-item
                    v-for="(body, index) in bodyItems"
                    :key="'body-' + index"
                    @click="navigate(body.link)"
                    >
                    <v-list-item-title>{{ body.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel title="커뮤니티">
            <v-expansion-panel-text>
                <v-list>
                    <v-list-item
                    v-for="(community, index) in communityItems"
                    :key="'community-' + index"
                    @click="navigate(community.link)"
                    >
                        <v-list-item-title>{{ community.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-expansion-panel-text>
        </v-expansion-panel>

    </v-expansion-panels>
</v-navigation-drawer>


    <!-- <v-main>
        <router-view/>
    </v-main> -->
</template>



<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

//햄버거
const drawer = ref(false)

//라우터
const router = useRouter()
function navigate(link) {
  router.push(link)
}

function goToMain() {
  router.push('/main')
}
const aboutItems = ref([
    {title: '병원소개', link:'/about'}
])

const noseItems = ref([
    {title:'윤곽코성형', link:'/nose1'},
    {title:'코 재수술', link:'/nose2'},
    {title:'쁘띠코성형', link:'/nose3'},
    {title:'맞춤코성형', link:'/nose4'},
    {title:'남자코성형', link:'/nose5'},
    {title:'기능성 코성형', link:'/nose6'},
])

const eyesItems = ref([
    {title:'눈썹거상', link:'/eye1'},
    {title:'매몰성형', link:'/eye2'},
    {title:'절개성형', link:'/eye3'},
    {title:'안검하수', link:'/eye4'},
    {title:'눈밑지방', link:'/eye5'},
    {title:'트임성형', link:'/eye6'},
])

const childItems = ref([
    {title:'동안성형', link:'/face'},
])

const bodyItems = ref([
    {title:'가슴성형', link:'/breast'},
    {title:'지방흡입', link:'/fat'},
])

const communityItems = ref([
    {title:'자주 묻는 질문', link:'/faq'},
    {title:'전후사진', link:'/ba'},
])

</script>


<style>
.v-main {
  --v-layout-top: 0px !important;
}

.v-app-bar{
    position: statik !important;
    margin-bottom: 50px;
}

.logo-header{
    cursor: pointer;
    width: 40px; height: 30px;
    background: url(../assets/img/logo/logo-height.svg) no-repeat center center/cover;
}

@media screen and (min-width: 960px){
    .logo-header{
        width: 200px; height: 40px;
        background: url(../assets/img/logo/logo-width.svg) no-repeat center center/cover;
    }
}
</style>