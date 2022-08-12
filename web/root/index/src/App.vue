<template>
  <v-app id="app">
    <NavigationBar/>
  </v-app>
</template>

<script>
import "./assets/global/css-less/global.less"
import NavigationBar from "@/components/index/NavigationBar";
export default {
  name: 'App',
  components: {
    NavigationBar,
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