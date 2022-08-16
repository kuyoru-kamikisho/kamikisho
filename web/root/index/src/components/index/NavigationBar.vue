<template>
  <div id="NavigationBar">
    <v-app-bar
        class="px-4"
        short
        tile
        app
        clipped-left
        hide-on-scroll
        fixed
        fade-img-on-scroll
    >

      <v-app-bar-nav-icon>
        <v-img
            class="k-absolute k-cursor-pointer"
            width="46px" src="../../assets/index/navbar/imgs/nav-bar-avtar.png"
        />
      </v-app-bar-nav-icon>

      <v-tabs show-arrows class="" background-color="transparent" color="red accent-3" centered align-with-title>
        <v-tab @click="navCommit(0)">首页</v-tab>
        <v-tab @click="navCommit(1)">规则与流程</v-tab>
        <v-tab @click="navCommit(2)">往期作品</v-tab>
        <v-tab href="https://www.pixiv.net/users/17723835">Pixiv</v-tab>
        <v-tab href="https://twitter.com/kuyoru_illust">Twitter</v-tab>
        <v-tab href="https://bcy.net/u/1477268">半次元</v-tab>
        <v-tab href="https://space.bilibili.com/85638760">Bilibili</v-tab>
        <v-tab @click="navCommit(3)">联系方式</v-tab>
        <v-tab @click="navCommit(4)">加入我们</v-tab>
        <v-tab @click="navCommit(5)">
          <v-icon
              color="red accent-3"
          >mdi-coffee</v-icon>
          排单
        </v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {},
  data: () => ({
    myInfo: "NavigationBar.vue",
  }),
  methods: {
    navCommit(n){
      this.$store.commit({
        type: 'nav',
        navchoose:n
      })
    }
  }
}
</script>

<style scoped lang="less">
.img-clip {
  clip-path: polygon(0 0, 74% 0, 76% 100%, 0% 100%);
}

.no-padding-top-bottom {
  padding-top: 0;
  padding-bottom: 0;
}

.nav-bar-btn-effects {
  position: relative;

  &:hover {
    ::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 3px;
      background-color: #f51414;
    }
  }
}
</style>
