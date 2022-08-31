import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        displayRegister: true,
        displayLogin: false,

        navbar: [true, false, false, false, false],

        homepageExtra: false,
    },

    mutations: {
        nav(state, payload) {
            if (state.navbar[payload.navchoose] === false) {
                state.navbar = [false, false, false, false, false]
                state.navbar[payload.navchoose] = true
            }
        },
        homepageInit(state,payload){
          if (payload.k_home===true){
              state.homepageExtra=true
          }else {
              state.homepageExtra=false
          }
        },
        homepageEx(state) {
            state.homepageExtra = !state.homepageExtra
        },
        showLogin(state) {
            state.displayLogin = true
            state.displayRegister = false
        },
        showRegister(state) {
            state.displayLogin = false
            state.displayRegister = true
        }
    }
})
export default store