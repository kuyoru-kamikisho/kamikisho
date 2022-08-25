<template>
  <v-app id="app">

    <CursorCollimator/>

    <NavigationBar/>

    <v-main>

      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <HomePage v-show="this.$store.state.navbar[0]"></HomePage>
      </transition>

      <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
        <LoginPage v-show="this.$store.state.navbar[5]"></LoginPage>
      </transition>

    </v-main>

  </v-app>
</template>

<script>
import "./assets/global/css-less/global.less"
import "./assets/global/css-less/effects.less"
import NavigationBar from "@/components/index/NavigationBar";
import LoginPage from "@/components/index/LoginPage";
import CursorCollimator from "@/components/global/CursorCollimator";
import SearchBar from "@/components/index/SearchBar";
import HomePage from "@/components/index/HomePage";
import "./assets/global/js-effects/sakura-float"

export default {
  name: 'App',
  components: {
    NavigationBar,
    LoginPage,
    CursorCollimator,
    SearchBar,
    HomePage
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