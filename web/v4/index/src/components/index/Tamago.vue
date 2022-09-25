<template>
  <section @dblclick="tamago" id="tamago" class="k-absolute k-top-0 k-left-0 k-tamago k-z-index-32">
    <v-container>
      <v-card>
        <v-card-title class="k-title">
          你在无意间进入了一片完全陌生的世界！
        </v-card-title>
        <v-card-subtitle>
          这里是常人所不会发现的净土，
          在下面摆放着的，是可以前往不同世界的钥匙，每一把钥匙都有他独特的用处——现在，有缘人，你可以从中挑选一把钥匙,它的用法将由你自己来探索...
        </v-card-subtitle>
        <v-sheet class="k-key-container">
          <v-tooltip bottom nudge-top="11" v-for="(t,i) in type" :key="i">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" dark fab class="k-btn ma-4 "
                     @click="key(t.s)">
                <v-icon class="k-key" :color="t.c">
                  mdi-key-outline
                </v-icon>
              </v-btn>
            </template>
            <span>{{ t.s }}</span>
          </v-tooltip>
        </v-sheet>

        <v-card>
          <v-card-subtitle>手中的钥匙忽然飞到空中，围绕你转了几圈之后猛地碎裂成细小的碎片，这些碎片又旋即拼接成了一串文字：</v-card-subtitle>
          <v-card-text class="k-resp purple--text text--darken-4 k-relative">
            <pre>{{ resp }}</pre>

            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon @click="clipwrite" class="k-absolute-force k-btn-clip k-top-0" v-bind="attrs" v-on="on">
                  <v-icon :color="clipbtncolor" :class="clipbtnclass" v-text="clipicon"></v-icon>
                </v-btn>
              </template>
              <span>复制这些文字</span>
            </v-tooltip>

          </v-card-text>
        </v-card>
      </v-card>

      <v-snackbar timeout="3000" v-model="snackbar" :value="snackbar">拷贝完毕</v-snackbar>

      <v-overlay v-show="overlay" opacity="0.58">
        <v-card class="pb-4">
          <v-card-title>哦，不好意思年轻人，我差点忘记了，在我将这把钥匙赠予你之前，你必须出示从神机枢管理人那里得到的验证文书</v-card-title>
          <v-card-text>当然，你也可以选择其它钥匙，验证文书规定了你有权获得哪一个钥匙</v-card-text>
          <v-form class="px-8">
            <v-text-field color="black" class="text-subtitle-1" clearable label="在这里输入"
                          v-model="authentication" :value="authentication" @keyup.enter.prevent="auth"
                          @keyup.esc="authentication=''"></v-text-field>
            <v-sheet>
              <v-btn :disabled="debtn" class="green--text text--accent-2 mr-3" @click="auth">{{ btntext }}</v-btn>
              <v-btn class="yellow--text text--lighten-1" @click="overlay=false">我要挑选其它钥匙</v-btn>
            </v-sheet>
          </v-form>
        </v-card>
      </v-overlay>
    </v-container>
  </section>
</template>

<script>
import axios from "axios";

let Vtamago = {
  name: "Tamago",

  data: () => ({
    type: [
      {s: 'v1', c: 'green accent-3'},
      {s: 'v2', c: 'cyan lighten-3'},
      {s: 'h1', c: 'amber lighten-2'},
      {s: 'h2', c: 'purple lighten-1'}
    ],
    overlay: false,
    authentication: '',
    open: '',
    auth_res: false,
    debtn: false,
    btntext: '交付文书',
    interval: null,
    resp: '破碎的钥匙仿若阳光下熠熠生辉的金砂一般漂浮在上空',
    clipicon: 'mdi-card-multiple-outline',
    clipsuccess: 'mdi-check-all',
    clipbtnclass: 'k-clipboard',
    clipbtncolor: '',
    snackbar: false
  }),

  methods: {
    timeout() {
      this.$data.btntext = "守门人似乎睡着了，敲醒他"
      clearInterval(this.$data.interval)
    },
    clipwrite() {
      let temp = 'mdi-card-multiple-outline'
      let text = this.$data.resp;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
      } else {
        let textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.style.position = 'fixed';
        textarea.style.clip = 'rect(0 0 0 0)';
        textarea.style.top = '10px';
        textarea.value = text;
        textarea.select();
        document.execCommand('copy', true);
        document.body.removeChild(textarea);
      }

      this.$data.clipicon = this.$data.clipsuccess
      this.$data.clipbtnclass = ''
      this.$data.clipbtncolor = 'pink accent-3'
      this.$data.snackbar = true
      setTimeout(() => {
        this.$data.clipicon = temp
        this.$data.clipbtnclass = 'k-clipboard green-text'
        this.$data.clipbtncolor = ''
      }, 2316)
    },
    cleat(btntext) {
      clearInterval(this.$data.interval)
      this.$data.btntext = btntext
      this.$data.debtn = false
    },
    tamago() {
      this.$store.commit('tamago')
    },
    key(req) {
      this.$data.overlay = true
      this.$data.open = req
    },
    auth() {
      if (this.$data.authentication !== '') {
        let i = 1
        this.$data.debtn = true
        this.$data.interval = setInterval(() => {
          this.$data.btntext = "守门人正在向上级确认...(" + i + "s)"
          i--
          if (i === 60) {
            this.timeout()
          }
        }, 1000)

        axios({
          url: "/Tamago",
          method: "post",
          baseURL: "http://localhost/v4/",
          params: {
            auth: this.$data.authentication,
            type: this.$data.open
          }
        }).then((rsp) => {
          this.cleat('提交新的验证文书')
          this.$data.resp = JSON.stringify(rsp.data, null, "\t")
          this.overlay = false
        }).catch((err) => {
          this.cleat('通信用魔法回廊发生了异常波动！再尝试一下')
          console.log(err)
        })
      }
    },
  }
}
export default Vtamago
</script>

<style scoped lang="less">
.k-clipboard {
  transform: rotate(90deg);
}

.k-btn-clip {
  right: 2rem;
}

.k-resp {
  font-family: "YaHei Consolas Hybrid", Consolas, "Microsoft YaHei", sans-serif;
}

.k-key-container {
  transform-style: preserve-3d;
}

.k-tamago {
  width: 100%;
  min-height: 100%;
  overflow: auto;
  padding-bottom: 4rem;
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

pre {
  overflow: auto;
}
</style>