import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from "./plugins/vuex";
import 'animate.css'

new Vue({
    vuetify,
    store: store,
    render: h => h(App)
}).$mount('#app')
