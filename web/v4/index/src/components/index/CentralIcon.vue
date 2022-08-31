<template>
  <section>
    <v-responsive
        aspect-ratio="3769/1382"
        :width="screenType"
        class="mx-auto k-container k-relative">
      <v-img :src="sign" class="k-img-effects-passivity"></v-img>
    </v-responsive>

    <svg width="0" height="0" style="posiotion:absolute;">
      <defs>
        <filter id="displacementFilter">
          <feTurbulence type="turbulence" baseFrequency="0.01 .1" numOctaves="1" result="turbulence" seed="53"/>
          <feDisplacementMap in2="turbulence" in="SourceGraphic" y="-2" scale="10" xChannelSelector="R"
                             yChannelSelector="B"/>
        </filter>
      </defs>
    </svg>
  </section>
</template>

<script>
import sign from '../../assets/index/homepage/kuyorubadgesign.png'

export default {
  name: "CentralIcon",
  computed: {

    /**
     * 返回屏幕的断点，使用vuetify提供的默认值
     * xs--[0,600]
     * sm--[600,960]
     * md--[960,1264]
     * lg--[1264,1904]
     * xl--[1904,--]
     * @return {number} pixels of width responsively
     */
    screenType() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 216
        case 'sm':
          return 242
        case 'md':
          return 324
        case 'lg':
          return 408
        case 'xl':
          return 524
      }
    }
  },
  data: () => ({
    sign:sign
  }),
  methods: {},
  mounted() {
    let img = document.querySelector("#displacementFilter feTurbulence");
    let frames = 0;
    // let rad = Math.PI / 180;
    let rad = Math.PI / 20;

    function AnimateBaseFrequency() {
      // let bf = "0.01 .1";
      let bf = "0.01 -1.1";
      let bfx;
      let bfy;
      bfx = Number(bf.split(" ")[0]);
      bfy = Number(bf.split(" ")[1]);
      // frames += .5
      frames += 1.5
      // bfx += 0.001 * Math.cos(frames * rad);
      // bfy += 0.005 * Math.sin(frames * rad);
      bfx += 0.001 * Math.cos(frames * rad);
      bfy += 20.005 * Math.sin(frames * rad);

      bf = bfx.toString() + ' ' + bfy.toString();
      img.setAttributeNS(null, 'baseFrequency', bf);

      requestAnimationFrame(AnimateBaseFrequency);
    }
    window.requestAnimationFrame(AnimateBaseFrequency);
  }
}
</script>

<style lang="less" scoped>
.k-container {
  &:hover {
    transform: scale(1.03);
    transition: transform .3s ease;
  }

  transition: transform .3s ease;
}

.k-img-effects-passivity {
  filter: none;
  animation: 12s steps(3,end) 2s infinite none k-img-effects;
}
@keyframes k-img-effects {
  0%{filter: brightness(109%) url(#displacementFilter)}
  10%{filter: brightness(230%);}
  10.1%{filter: invert(100%);opacity: 1;mix-blend-mode: lighten}
  10.8%{filter: none;opacity: 1;mix-blend-mode: lighten}
  20%{filter: none;opacity: 1}
  21%{filter: invert(0%);opacity: 1}
  22%{filter: invert(0%) hue-rotate(45deg);opacity: 1}
  23%{filter: invert(0%) brightness(100%);opacity: 1}
  24%{filter: none}
  25%{filter: url(#displacementFilter)}
  25.3%{filter: none }
  39%{filter: none;opacity:1;}
  40%{filter: none;}
  41%{filter: brightness(100%) hue-rotate(30deg);}
  42%{filter: none;opacity: 1;mix-blend-mode: multiply}
  43%{filter: brightness(100%);}
  44%{filter: none;opacity: 1}
  65%{filter: brightness(118%) url(#displacementFilter) }
  65.2%{filter: brightness(100%) invert(0%)}
  85%{filter: brightness(128%) }
  86%{filter: brightness(100%) hue-rotate(60deg) invert(0%)}
  88%{filter: none}
  100%{filter: none;}
}
</style>