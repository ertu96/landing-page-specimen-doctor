import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/leistungen',
            name: 'services',
            component: () => import('@/views/ServicesView.vue'),
        },
        {
            path: '/team',
            name: 'team',
            component: () => import('@/views/TeamView.vue'),
        },
        {
            path: '/praxis',
            name: 'practice',
            component: () => import('@/views/PracticeView.vue'),
        },
        {
            path: '/kontakt',
            name: 'contact',
            component: () => import('@/views/ContactView.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('@/views/PageNotFoundView.vue'),
        },
    ],
})

export default router
