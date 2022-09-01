<template>
  <section id="s2-plugin" class="k-fixed k-section k-z-index-1">

    <a class="k-a k-relative" v-for="(i,index) in toh" :key="index" :href="'#'+i">
      <p class="k-dec-p1 k-absolute k-left-0"></p>
      <p class="k-dec-p2 k-absolute"></p>
      <p class="k-dec-p3 k-dec-p2 k-absolute"></p>
      <div class="k-a-box k-absolute k-x-transform-center k-z-index-n1"></div>
      <span class="k-span">{{ i }}</span>
    </a>

  </section>
</template>

<script>
export default {
  name: "S2-Plugin",
  data: () => ({
    toh: ['动漫/漫画', '图片', '工具', '社区', '编程']
  })
}
</script>

<style scoped lang="less">
p.k-dec-p2.k-absolute {
  left: 38px;
  top: 51px;
}

p.k-dec-p3.k-dec-p2.k-absolute {
  transform: rotate(45deg);
  left: 74px;
  top: 16px;
}

.k-dec-p1 {
  width: 100%;
  height: 1px;
  background-color: #0cb6ff;
  top: 10px;
  transform-origin: center center;
  transform: scaleX(0);
  transition: transform .4s ease;

  &::after {
    width: 100%;
    height: 1px;
    background-color: #0cb6ff;
    top: 26px;
    transform-origin: center center;
    display: block;
    content: ' ';
    clear: both;
    position: absolute;
  }
}

.k-dec-p2 {
  display: block;
  width: 14px;
  height: 14px;
  border-width: 3px;
  border-style: solid;
  border-color: #0c86ff #1485f5 transparent transparent;
  filter: brightness(120%);
  transform: rotate(135deg);
  margin: 0;

  left: 38px;
  top: 51px;
  opacity: 0;
  &::after {
  opacity: 0;
    position: absolute;
    display: block;
    width: 14px;
    height: 14px;
    left: -54px;
    top: 48px;
    border-width: 3px;
    border-style: solid;
    border-color: transparent transparent #0c86ff #1485f5;
    filter: brightness(120%);
    content: ' ';
  }
}

.k-section {
  bottom: 2%;
  right: 2%;
}

.k-a {
  margin: 40px 0;

  display: block;
  overflow: visible;
  word-break: keep-all;
  text-align: center;
  white-space: nowrap;
  font-family: '汉仪文黑-85W', "Microsoft YaHei", sans-serif, YakuHanJP, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo;
  text-decoration: none;
  color: rgba(214, 214, 217, 0.92);
  font-size: 16px;
  font-style: italic;

  span {
    transition: color .4s ease, padding .3s ease;
  }

  &:hover {
    span {
      color: #1baaf8;
      //text-shadow: 1px 1px #ff0c69;
      transition: color .4s ease, padding .3s ease;
    }

    .k-dec-p1 {
      transform-origin: center center;
      transform: scaleX(1);
      transition: transform .4s ease;
    }

    .k-a-box {
      box-sizing: border-box;
      border: 4px solid deepskyblue;
    }

    .k-dec-p2{
      opacity: 1;
      &::after{
        opacity: 1;
      }
    }
  }

}

@width: 46px;
@af-w: 46px;
.k-a-box {
  background-color: rgba(0, 0, 0, 0.89);
  width: @width;
  height: @width;
  left: 48%;
  transform-origin: center center;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.k-span {
  line-height: 48px;
  letter-spacing: .3em;
}
</style>