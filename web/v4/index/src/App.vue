<template>
  <v-app id="app">

    <Background></Background>

    <CursorCollimator/>

    <NavigationBar/>

    <v-main>

      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <HomePage v-show="this.$store.state.navbar[0]"></HomePage>
      </transition>

      <transition enter-active-class="k-animated k-fadeInRight" leave-active-class="k-animated k-fadeOutRight">
        <LoginPage v-show="this.$store.state.navbar[4]"></LoginPage>
      </transition>

      <transition enter-active-class="k-animated k-bounceInDown" leave-active-class="k-animated k-bounceOutUp">
        <ExtraPage v-show="this.$store.state.homepageExtra"></ExtraPage>
      </transition>

    </v-main>

  </v-app>
</template>

<script>
import "./assets/global/css-less/global.less"
import "./assets/global/js-effects/sakura-float"
import NavigationBar from "@/components/index/NavigationBar";
import LoginPage from "@/components/index/LoginPage";
import CursorCollimator from "@/components/global/CursorCollimator";
import SearchBar from "@/components/index/SearchBar";
import HomePage from "@/components/index/HomePage";
import ExtraPage from "@/components/index/ExtraPage";
import Background from "@/components/index/Background";

export default {
  name: 'App',
  components: {
    NavigationBar,
    LoginPage,
    CursorCollimator,
    SearchBar,
    HomePage,
    ExtraPage,
    Background
  },

  data: () => ({
    myInfo: "App.vue"
  }),
};
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