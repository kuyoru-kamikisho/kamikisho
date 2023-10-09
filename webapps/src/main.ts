import {createApp} from 'vue'
import {createPinia} from 'pinia'
import KRipple from "@/apis/KRipple/k-ripple";

import App from './App.vue'
import router from './router'
import '@/assets/style/index.scss'

const app = createApp(App)

app.directive('ripple', KRipple)
app.use(createPinia())
app.use(router)

app.mount('#app')
