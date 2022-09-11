<template>
  <div id="home">
    <div id="v" v-if="load">
      <canvas ref="cav" id="cav" class="k-fixed k-x-transform-center k-element-penetrate"></canvas>
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
  name: "Background",
  data: () => ({
    mad,
    cover,
    load:false
  }),
  methods:{
    _isMobile(){
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      return flag;
    },
  },
  beforeMount() {
    if(this._isMobile())
      this.$data.load=false
    else
      this.$data.load=true
  },
  mounted() {
    let vle;
    let cav;
    let ctx;
    vle = document.createElement('video');
    vle.src=this.$data.mad
    vle.loop=true
    vle.autoplay=true
    vle.muted=true
    vle.play()

    cav=this.$refs.cav
    ctx = cav.getContext('2d');
    cav.width=window.innerWidth
    cav.height=window.innerHeight

    vle.addEventListener('play',loop,false)

    function loop(){
      ctx.drawImage(vle,0,0,cav.width,cav.width*3/8);
      requestAnimationFrame(loop)
    }
  }
}
</script>

<style scoped lang="less">
.k-img-cov{
  width: auto;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(0);
  -webkit-transition: opacity .3s ease;
  transition: opacity .3s ease;
  filter: brightness(30%);
}
.k-black-cover{
  background-color: rgba(0, 0, 0, 0.85);
  width: 100%;
  height: 100vh;
}
</style>