import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/home-view.vue')
        },
        {
            path: '/feed',
            name: 'feed',
            component: () => import('../views/feed-view.vue')
        },
        {
            path: '/space',
            name: 'space',
            component: () => import('../views/space-view.vue')
        }
    ]
})

export default router
