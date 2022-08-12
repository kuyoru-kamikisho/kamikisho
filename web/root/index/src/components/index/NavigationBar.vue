<template>
  <div id="NavigationBar">
    <v-app-bar app clipped-left collapse-on-scroll fixed fade-img-on-scroll>
      <v-spacer></v-spacer>
      <v-card class="k-cursor-pointer mr-2 k-absolute k-display-inline-block" elevation="0" color="transparent" width="42">
        <v-img src="../../assets/index/navbar/imgs/nav-bar-avtar.png"></v-img>
      </v-card>

      <v-card class="k-absolute k-display-inline-block" elevation="0" color="transparent">
        <v-tabs show-arrows class="" background-color="transparent" color="red accent-3" centered align-with-title>
          <v-tab>首页</v-tab>
          <v-tab>规则与流程</v-tab>
          <v-tab>往期作品</v-tab>
          <v-tab href="https://www.pixiv.net/users/17723835">Pixiv</v-tab>
          <v-tab href="https://twitter.com/kuyoru_illust">Twitter</v-tab>
          <v-tab href="https://bcy.net/u/1477268">半次元</v-tab>
          <v-tab href="https://space.bilibili.com/85638760">Bilibili</v-tab>
          <v-tab>联系方式</v-tab>
          <v-tab>加入我们</v-tab>
          <v-tab>
            <v-icon color="red accent-3">mdi-account</v-icon>
            登录
          </v-tab>
        </v-tabs>
      </v-card>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {},
  data: () => ({
    myInfo: "NavigationBar.vue"
  }),
  methods: {}
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
