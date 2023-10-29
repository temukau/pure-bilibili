// 首页子路由

export const HomeChildrenRouters = [
  {
    path: '/home/recommend',
    name: 'HomeRecommend',
    component: () => import('@/views/home/home-recommend-view.vue')
  },

  {
    path: '/home/hot',
    name: 'HomeHot',
    component: () => import('@/views/home/home-hot-view.vue')
  }
]
