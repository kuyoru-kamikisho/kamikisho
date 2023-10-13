import {createRouter, createWebHistory} from 'vue-router'
import docssubpages from "@/router/docssubpages";

const KHomePage = () => import("@/views/homePage/KHomePage.vue");
const KComponentsPage = () => import("@/views/developPage/KComponentsPage.vue");

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: KHomePage
        },
        {
            path: '/docs/components',
            name: 'components',
            component: KComponentsPage,
            children: docssubpages
        }
    ]
})

export default router
