import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        navbar: [true, false, false, false, false],
        homepageExtra: true
    },
    mutations: {
        nav(state, payload) {
            if (state.navbar[payload.navchoose] == false) {
                state.navbar = [false, false, false, false, false, false]
                state.navbar[payload.navchoose] = true
            }
        },
        homepageEx(state) {
            state.homepageExtra = !state.homepageExtra
        }
    }
})
export default store