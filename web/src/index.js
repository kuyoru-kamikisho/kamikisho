import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from "axios";
import VueAxios from "vue-axios";
import store from "./plugins/vuex";
import 'animate.css'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
    vuetify,
    store: store,
    render: h => h(App)
}).$mount('#app')
