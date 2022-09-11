<template>
  <section id="section1">
    <p
        class="k-p1 text-sm-h5 text-md-h5 text-lg-h4 white--text">
      玖夜 Commission Platform
    </p>
    <p
        class="k-p2 text-sm-subtitle-1 text-md-subtitle-1 text-lg-h6 deep-purple--text text--lighten-5 font-weight-light">
      玖夜委托平台是一个高度私人定制的专门用于为数字<br>绘画交易提供服务的线上交易平台。<br>
      不需要重复询问 —— 创建委托、催稿进度、不透明交稿，约稿所需要的一切信息都触手可及。
    </p>

    <v-sheet width="80%" color="transparent" class="mx-auto">
      <v-row justify="center">
        <v-col align-self="center">
          <v-btn
              height="48px"
              block color="indigo darken-1"
              dark
              class="font-weight-bold k-btn-text"
              @click="rule"
          >
            <v-icon class="mr-2">mdi-cart-arrow-down</v-icon>
            查看规则
          </v-btn>
        </v-col>
        <v-col>
          <v-btn height="48px"
                 block
                 class="font-weight-bold k-btn-text"
                 outlined
                 color="rgb(249 244 244 / 93%)"
                 @click="query"
          >
            <v-icon class="mr-2">mdi-speedometer</v-icon>
            查询进度
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
              href="https://github.com/kuyoru-kamikisho/beta"
              height="48px"
              block
              dark
              class="font-weight-bold k-btn-text">
            <v-icon class="mr-2">mdi-github</v-icon>
            GITHUB
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
  </section>
</template>

<script>
export default {
  name: "Section1",
  methods: {
    rule() {
      this.$store.commit({
        type:'nav',
        navchoose:1
      })
    },
    query(){
      this.$store.commit({
        type:'nav',
        navchoose:4
      })
      this.$store.commit('showLogin')
    }
  }
}
</script>

<style scoped lang="less">
.k-p1 {
  text-align: center;
}

@media screen and (max-width: 600px) {
  .k-p1 {
    text-align: center;
    font-weight: bold;
  }
}

.k-p2 {
  text-align: center;
}

.k-btn-text {
  letter-spacing: 0.3em;
  font-size: 15px;
}

@media screen and (min-width: 960px) and (max-width: 1264px) {
  .k-btn-text {
    letter-spacing: 0.3em;
    font-size: 14px;
  }
}
@media screen and (min-width: 600px) and (max-width: 960px) {
  .k-btn-text {
    letter-spacing: 0.3em;
    font-size: 14px;
    height: 42px!important;
  }
}
@media screen and (max-width: 600px) {
  .k-btn-text {
    letter-spacing: 0.3em;
    font-size: 12px;
    height: 36px!important;
  }
}
</style>