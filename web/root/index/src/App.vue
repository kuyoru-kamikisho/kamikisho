<template>
  <v-app id="app">

    <CursorCollimator/>

    <NavigationBar/>

    <v-main>
      <LoginPage/>
    </v-main>

  </v-app>
</template>

<script>
import "./assets/global/css-less/global.less"
import "./assets/global/css-less/effects.less"
import NavigationBar from "@/components/index/NavigationBar";
import LoginPage from "@/components/index/LoginPage";
import CursorCollimator from "@/components/global/CursorCollimator";
import "./assets/global/js-effects/sakura-float"

export default {
  name: 'App',
  components: {
    NavigationBar,
    LoginPage,
    CursorCollimator
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
#app{
  font-family: sans-serif;
  color: black;
  -webkit-font-smoothing: antialiased;
}
</style>