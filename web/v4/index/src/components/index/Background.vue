<template>
  <div id="home">
    <div id="v" v-if="load">
      <video class="k-video k-fixed k-x-transform-center" autoplay loop muted>
        <source :src="mad">
      </video>
      <div class="k-fixed k-black-cover"></div>
      <img class="k-fixed k-left-0 k-top-0 k-opacity-70 k-img-cov" :src="cover">
    </div>
    <div id="p" v-if="!load">
      <v-sheet color="#252426" width="100%" height="100%" class="k-fixed"></v-sheet>
    </div>
  </div>
</template>

<script>
import cover from '../../assets/index/homepage/bg_cover.png'
import mad from '../../assets/index/video/madshot.mp4'

export default {
  name: "VideoCanvas",
  data: () => ({
    mad,
    cover,
    load:false
  }),
  methods:{
    _isMobile(){
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      return flag;
    }
  },
  beforeMount() {
    if(this._isMobile())
      this.$data.load=false
    else
      this.$data.load=true
  }
}
</script>

<style scoped lang="less">
.k-video {
  min-height: 100%;
  min-width: 100%;
}
.k-img-cov{
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  -webkit-transform: translate(0);
  transform: translate(0);
  height: 100%;
  -webkit-transition: opacity .3s ease;
  transition: opacity .3s ease;
}
.k-black-cover{
  background-color: rgba(0, 0, 0, 0.68);
  width: 100%;
  height: 100vh;
}
</style>