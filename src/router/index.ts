import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
            behavior: 'smooth'
        }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/layouts/HomeLayout.vue'),
            children: [
                {
                    path: '/',
                    component: () => import('@/views/HomeView.vue')
                }
            ]
        },
        {
            path: '/editor',
            name: 'editor',
            component: () => import('@/layouts/EditorLayout.vue'),
            children: [
                {
                    path: '/',
                    component: () => import('@/views/EditorView.vue')
                }
            ]
        }
    ]
})

export default router