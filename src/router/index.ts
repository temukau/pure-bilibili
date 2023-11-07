import { createRouter, createWebHistory } from 'vue-router'
import { HomeChildrenRouters } from '@/router/home-child'
import { useUserStore } from '@/stores/user'
import { useModalStore } from '@/stores/modal'

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
      meta: {
        title: '动态',
        needLogin: true
      },
      component: () => import('@/views/dynamic/dynamic-view.vue')
    },
    {
      path: '/space/:id?',
      name: 'Space',
      meta: {
        title: '个人空间',
        needLogin: true
      },
      component: () => import('@/views/space/space-view.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const modalStore = useModalStore()
  if (to?.meta.title) {
    document.title = to.meta.title as string
  }
  if (to?.meta.needLogin && !userStore.isLogin) {
    if (!userStore.isLogin) {
      modalStore.openLoginModal()
      return next(false)
    }
  }
  next()
})

export default router
