<template>
  <v-app
      id="app"
  >

    <CursorCollimator></CursorCollimator>

    <Background></Background>

    <NavigationBar ref="Nav"></NavigationBar>

    <transition enter-active-class="k-animated bounceInRight" leave-active-class="k-animated bounceOutRight">
      <S2Plugin v-show="this.$store.state.s2p"></S2Plugin>
    </transition>

    <v-main>

      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <HomePage v-show="this.$store.state.navbar[0]"></HomePage>
      </transition>

      <transition enter-active-class="k-animated k-fadeInDown" leave-active-class="k-animated k-fadeOutUp">
        <Constrain v-show="this.$store.state.navbar[1]"></Constrain>
      </transition>

      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <Price v-show="this.$store.state.navbar[2]"></Price>
      </transition>

      <transition enter-active-class="k-animated k-fadeInDown" leave-active-class="k-animated k-fadeOutUp">
        <PreviousWorks v-show="this.$store.state.navbar[3]"></PreviousWorks>
      </transition>

      <transition enter-active-class="k-animated k-fadeInRight" leave-active-class="k-animated k-fadeOutRight">
        <LoginPage v-show="this.$store.state.navbar[4]"></LoginPage>
      </transition>

      <transition enter-active-class="k-animated k-bounceInDown" leave-active-class="k-animated k-bounceOutUp">
        <ExtraPage v-show="this.$store.state.homepageExtra"></ExtraPage>
      </transition>

    </v-main>

    <Tamago v-if="this.$store.state.tamago"></Tamago>

  </v-app>
</template>

<script>
import "./assets/global/css-less/global.less"
import "./assets/global/js-effects/sakura-float"
// import "./assets/global/js-effects/click-blast.js"
import NavigationBar from "@/components/index/NavigationBar";
import LoginPage from "@/components/index/LoginPage";
import SearchBar from "@/components/index/SearchBar";
import HomePage from "@/components/index/HomePage";
import ExtraPage from "@/components/index/ExtraPage";
import Background from "@/components/index/Background";
import S2Plugin from "@/components/index/S2-Plugin";
import Constrain from "@/components/index/ConstraintsInfo"
import Tamago from "@/components/index/Tamago";
import Price from "@/components/index/Price";
import PreviousWorks from "@/components/index/PreviousWorks";
import CursorCollimator from "@/components/global/CursorCollimator";

const app_main = {
  name: 'App',
  components: {
    NavigationBar,
    LoginPage,
    SearchBar,
    HomePage,
    ExtraPage,
    Background,
    S2Plugin,
    Constrain,
    Tamago,
    Price,
    PreviousWorks,
    CursorCollimator
  },

  data: () => ({
    myInfo: "App.vue",
  }),

  methods: {

    /**
     * Tab键调出搜索页
     * @param e
     */
    hp(e) {
      const _this = () => this.$refs.Nav.homepageExCommit()
      if (e.key === 'Tab') {
        e.preventDefault()
        e.stopPropagation()
        _this()
      }
    },

  },

  mounted() {
    document.addEventListener('keydown', (e) => this.hp(e))
  }
};

export default app_main
</script>

<style scoped lang="less">
@font-face {
  font-family: "汉仪文黑-85W";
  src: url("assets/global/font-family/汉仪文黑-85W.TTF");
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>