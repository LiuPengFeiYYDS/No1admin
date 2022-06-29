import { createRouter, createWebHashHistory } from 'vue-router'
// 公共路由
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'profile',
    component: () => import('../layout/index.vue')
  }
]
// 私密路由

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
