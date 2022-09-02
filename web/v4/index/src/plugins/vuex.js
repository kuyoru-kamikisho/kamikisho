import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        displayRegister: true,
        displayLogin: false,

        navbar: [true, false, false, false, false],
        tem: 0,

        homepageExtra: false,

        s2p:false,

        tamago:false
    },

    mutations: {
        tamago(state){
          state.tamago=!state.tamago
        },

        /**
         * 快捷导航按键组显示切换，对应有强制置0
         * @param state
         */
        s2p(state){
          state.s2p=!state.s2p
        },

        nav(state, payload) {
            state.homepageExtra = false
            state.tem = payload.navchoose
            if (state.navbar[payload.navchoose] === false) {
                state.navbar = [false, false, false, false, false]
                state.navbar[payload.navchoose] = true
            }
        },
        navCloseItem(state) {
            state.navbar = [false, false, false, false, false]
        },

        /**
         * 在本地初始化导航页的显示状态
         * @param state
         * @param payload
         */
        homepageInit(state, payload) {
            state.homepageExtra = payload.k_home
            if (payload.k_home === true) {
                state.navbar = [false, false, false, false, false]
            }
        },
        homepageEx(state) {
            state.homepageExtra = !state.homepageExtra
            if (state.homepageExtra === false) {
                state.navbar[state.tem] = true
            }
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