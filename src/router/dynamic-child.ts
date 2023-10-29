export const DynamicChildRouters = [
    {
        path: "/dynamic/hot",
        name: "DynamicHot",
        component: () => import("@/views/dynamic/dynamic-hot-view.vue")
    },
    {
        path: "/dynamic/follow",
        name: "DynamicFollow",
        component: () => import("@/views/dynamic/dynamic-follow-view.vue")
    }
]