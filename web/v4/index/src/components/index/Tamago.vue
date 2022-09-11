<template>
  <section @dblclick="tamago" id="tamago" class="k-absolute k-top-0 k-left-0 k-tamago k-z-index-8">
    <v-container>
      <v-card>
        <v-card-title class="k-title">
          你在无意间进入了一片完全陌生的世界！
        </v-card-title>
        <v-card-subtitle>
          这里是常人所不会发现的净土，
          在下面摆放着的，是可以前往不同世界的钥匙，每一把钥匙都有他独特的用处——现在，有缘人，你可以从中挑选一把钥匙,它的用法将由你自己来探索...
        </v-card-subtitle>
      </v-card>
      <v-sheet class="k-key-container">
        <v-btn dark fab class="k-btn ma-4 " v-for="(t,i) in type" :key="i" @click="key(t.s)">
          <v-icon class="k-key" :color="t.c">
            mdi-key-outline
          </v-icon>
        </v-btn>
      </v-sheet>
    </v-container>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Tamago",

  data: () => ({
    type: [
      {s: 'v1', c: 'green accent-3'},
      {s: 'v2', c: 'cyan lighten-3'},
      {s: 'h1', c: 'amber lighten-2'},
      {s: 'h2', c: 'purple lighten-1'}
    ],
  }),

  methods: {
    tamago() {
      this.$store.commit('tamago')
    },
    key(req) {
      axios({
        url: "/Tamago",
        method: "post",
        baseURL: "http://localhost/v4/",
        params: {
          type: req
        }
      }).then((rsp) => {
        console.log(rsp.data);
        console.log(rsp.status);
        console.log(rsp.statusText);
        console.log(rsp.headers);
        console.log(rsp.config);
      }).catch((err) => {
        console.log('网络错误')
      })
    }
  }
}
</script>

<style scoped lang="less">
.k-key-container {
  transform-style: preserve-3d;
}

.k-tamago {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #aeeeae;
  font-family: '汉仪文黑-85W', "Microsoft YaHei", sans-serif, YakuHanJP, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo;
}

.k-key {
  transform: rotateZ(-60deg);
}

.k-btn {
  &:hover {
    .k-key {
      transform: translateZ(100px) perspective(200px);
    }
  }
}
</style>