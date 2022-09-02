<template>
<section @dblclick="tamago" id="tamago" class="k-absolute k-top-0 k-left-0 k-tamago k-z-index-8">
<v-container>
  <v-card>
    <v-card-title class="k-title">
      你在无意间进入了一片完全陌生的世界！
    </v-card-title>
    <v-card-subtitle>
      这里是常人所不会发现的净土，
      在下面摆放着的，是可以前往不同世界的钥匙，每一把钥匙都有他独特的用处——现在，有缘人，你可以从中挑选一把钥匙
    </v-card-subtitle>
  </v-card>
  <v-btn icon large class="k-btn">
    <v-icon class="k-key">
      mdi-key-outline
    </v-icon>
  </v-btn>
</v-container>
</section>
</template>

<script>
export default {
  name: "Tamago",

  methods:{
    tamago(){
      this.$store.commit('tamago')
    }
  }
}
</script>

<style scoped>
.k-tamago{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #aeeeae;
  font-family: '汉仪文黑-85W', "Microsoft YaHei", sans-serif, YakuHanJP, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo;
}
.k-key{
  transform: rotate3d(0,0,1,-90deg);
  animation: 2s linear infinite forwards key;
}
@keyframes key {
  from{
    transform: rotate3d(0,0,1,-90deg) ;
  }
  to{
    transform: rotate3d(1,1,1,270deg);
  }
}
</style>