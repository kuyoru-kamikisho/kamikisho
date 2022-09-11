<template>
  <div id="NavigationBar">
    <v-app-bar
        short
        class="px-4"
        tile
        app
        clipped-left
        hide-on-scroll
        fixed
        fade-img-on-scroll
        color="rgb(242 243 245 / 90%)"
    >

      <v-app-bar-nav-icon @click="homepageExCommit">
        <img
            class="k-nav-icon k-absolute k-cursor-pointer k-nav-img k-z-index-1"
            src="../../assets/index/homepage/sitebar-icon.png"
        />
      </v-app-bar-nav-icon>

      <v-tabs
          show-arrows
          background-color="transparent"
          color="red accent-3"
          centered
          center-active
          align-with-title
      >
        <v-tab @click="navCommit(0)">
          首页
        </v-tab>
        <v-tab @click="navCommit(1)">
          <v-icon color="purple accent-3">
            mdi-language-xaml
          </v-icon>
          规则与流程
        </v-tab>
        <v-tab @click="navCommit(2)">
          <v-icon color="amber darken-1">
            mdi-percent
          </v-icon>
          定价
        </v-tab>
        <v-tab @click="navCommit(3)">
          往期作品
        </v-tab>
        <v-tab href="https://www.pixiv.net/users/17723835">
          Pixiv
        </v-tab>
        <v-tab href="https://twitter.com/kuyoru_illust">
          <v-icon color="primary">
            mdi-twitter
          </v-icon>
          Twitter
        </v-tab>
        <v-tab href="https://bcy.net/u/1477268">
          半次元
        </v-tab>
        <v-tab href="https://space.bilibili.com/85638760">
          Bilibili
        </v-tab>
        <v-tab @click="navCommit(4)">
          <v-icon color="red accent-3">
            mdi-coffee
          </v-icon>
          排单
        </v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data: () => ({
    myInfo: "NavigationBar.vue",
  }),
  methods: {
    navCommit(n) {
      this.$store.commit({
        type: 'nav',
        navchoose: n
      })
    },
    homepageExCommit() {
      if (this.$store.state.s2p===true){
        this.$store.commit('s2p')
      }
      this.$store.commit('navCloseItem')
      this.$store.commit('homepageEx')
      if (this.$store.state.homepageExtra === true) {
        localStorage.setItem('k_home', 'on')
      } else {
        localStorage.setItem('k_home', 'off')
      }
    },

  },

  /**
   * 记录是否已经切换过主页面的显示内容
   */
  beforeCreate() {
    if (localStorage.getItem('k_home') === 'on') {
      this.$store.commit({
        type: "homepageInit",
        k_home: true
      })
    } else {
      this.$store.commit({
        type: "homepageInit",
        k_home: false
      })
    }
  }
}
</script>

<style scoped lang="less">
.k-nav-icon {
  transform: translateX(48px);
  transition: clip-path .4s ease;
}

@media screen and (max-width: 1168px) {
  .k-nav-icon {
    transform: translateX(50px);
    clip-path: polygon(0 0, 33% 0, 33% 100%, 0% 100%);
    transition: clip-path .4s ease;
  }
}

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
.k-nav-img{
  width: 142px;
}
</style>
