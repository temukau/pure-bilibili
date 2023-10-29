import { createRouter, createWebHistory } from 'vue-router'
import { HomeChildrenRouters } from '@/router/home-child'
import { DynamicChildRouters } from '@/router/dynamic-child'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      children: HomeChildrenRouters,
      redirect: '/home/recommend',
      component: () => import('../views/home/home-view.vue')
    },
    {
      path: '/dynamic',
      name: 'Dynamic',
      children: DynamicChildRouters,
      redirect: '/dynamic/hot',
      component: () => import('@/views/dynamic/dynamic-view.vue')
    },
    {
      path: '/space/:id?',
      name: 'Space',
      component: () => import('../views/space/space-view.vue')
    }
  ]
})

export default router
