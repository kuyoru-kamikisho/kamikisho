import { createRouter, createWebHistory } from 'vue-router'
import KHomePage from "@/views/KHomePage.vue";
import KComponentsPage from "@/views/KComponentsPage.vue";

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
      component: KComponentsPage
    }
  ]
})

export default router
