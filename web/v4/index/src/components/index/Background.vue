<template>
  <div id="home">
    <video class="k-video k-fixed k-x-transform-center" autoplay loop muted>
      <source :src="mad">
    </video>
    <div class="k-fixed k-black-cover"></div>
    <img class="k-fixed k-left-0 k-top-0 k-opacity-70 k-img-cov" :src="cover">
  </div>
</template>

<script>
import cover from '../../assets/index/homepage/bg_cover.png'
import mad from '../../assets/index/video/madshot.mp4'

export default {
  name: "VideoCanvas",
  data: () => ({
    mad,
    cover
  })
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