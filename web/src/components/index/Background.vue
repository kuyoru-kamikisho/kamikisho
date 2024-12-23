<template>
  <div id="home">
    <div id="v" v-if="load">
      <canvas ref="cav" id="cav" class="k-fixed k-x-transform-center k-element-penetrate"></canvas>
      <div class="k-fixed k-black-cover"></div>
      <img class="k-fixed k-left-0 k-top-0 k-opacity-70 k-img-cov" :src="cover">
    </div>
    <div id="p" v-if="!load">
      <!-- color="#252426" 如果需要追加视频为背景则添加该属性 -->
      <v-sheet width="100%" height="100%" class="k-fixed"></v-sheet>
    </div>
    <div id="i" class="k-fixed">
      <v-img gradient="to bottom, rgba(100, 115, 201, 0.13), rgba(25, 32, 72, 0.7)" width="100vw" min-height="100vh"
             :src="huttsky" :lazy-src="huttsky64"></v-img>
    </div>
    <p v-html="huttskyInfo" class="k-fixed k-img-info"></p>
  </div>
</template>

<script>
import cover from '../../assets/index/homepage/bg_cover.png'
import huttsky from '../../assets/index/background/huttsky.png'
import huttskyInfo from '../../assets/index/background/info/huttsky.txt?raw'
import huttsky64 from '../../assets/index/background/huttsky-64.png'

export default {
  name: "Background",
  data: () => ({
    cover,
    huttsky,
    huttsky64,
    huttskyInfo,
    load: false
  }),
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      return flag;
    },
  },
  beforeMount() {
    if (this._isMobile())
      this.$data.load = false
    else
      this.$data.load = false
  }
}
</script>

<style scoped lang="less">
.k-img-cov {
  width: auto;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(0);
  -webkit-transition: opacity .3s ease;
  transition: opacity .3s ease;
  filter: brightness(30%);
}

.k-black-cover {
  background-color: rgba(0, 0, 0, 0.85);
  width: 100%;
  height: 100vh;
}

.k-img-info {
  left: 2rem;
  bottom: .6rem;
  color: rgba(255, 255, 255, 0.45);
  font-size: 12px;
}
</style>