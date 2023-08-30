import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = () => import('@/views/HomePage.vue')

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: import.meta.env.BASE_URL,
    routes: [
        {path: '/', component: HomePage}
    ]
})

export default router
