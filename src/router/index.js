// router/index.ts
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes as autoRoutes } from 'vue-router/auto-routes'

// 수동 라우트 import
import Main from '../include/Main.vue';
import FAQ from '../components/FAQ.vue';
import BA from '../components/B&A.vue';

import Eye1 from '@/components/eye/Eye1.vue'
import Eye2 from '@/components/eye/Eye2.vue'
import Eye3 from '@/components/eye/Eye3.vue'
import Eye4 from '@/components/eye/Eye4.vue'
import Eye5 from '@/components/eye/Eye5.vue'
import Eye6 from '@/components/eye/Eye6.vue'

import About from '@/components/About.vue'

import Nose1 from '@/components/Nose1.vue'
import Nose2 from '@/components/Nose2.vue'

import Face from '@/components/Face.vue'
import Fat from '@/components/Fat.vue'
import Breast from '@/components/Breast.vue'


// 수동 라우트 정의
const manualRoutes = [
  { path: '/', component: Main },
  { path: '/main', component: Main },
  { path: '/faq', component: FAQ },
  { path: '/ba', component: BA },

  { path: '/about', component: About }, 

  { path: '/nose1', component: Nose1 },
  { path: '/nose2', component: Nose2 },

  { path: '/eye1', name: 'Eye1', component: Eye1 },
  { path: '/eye2', name: 'Eye2', component: Eye2 },
  { path: '/eye3', name: 'Eye3', component: Eye3 },
  { path: '/eye4', name: 'Eye4', component: Eye4 },
  { path: '/eye5', name: 'Eye5', component: Eye5 },
  { path: '/eye6', name: 'Eye6', component: Eye6 },

  { path: '/face', name: 'face', component: Face },
  { path: '/fat', name: 'fat', component: Fat },
  { path: '/Breast', name: 'breast', component: Breast },
]

// 병합
const routes = [
  ...autoRoutes,
  ...manualRoutes,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// dynamic import error 대응 코드 그대로 유지
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
