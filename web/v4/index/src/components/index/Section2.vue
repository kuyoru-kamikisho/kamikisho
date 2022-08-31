<template>
  <section id="section2">
    <div v-for="(topic,index) in site">
      <p v-text="topic.title"></p>

    </div>
  </section>
</template>

<script>
/**
 * 本组件用于构成快捷方式页面，本页初始化时不对外显示，显示条件为点击左上角站标
 */
export default {
  name: "Section2",
  data: () => ({
    site:
        [
          {
            title:"动漫/漫画",
            acgList: [
              {name: "AcFun", link: "https://www.acfun.cn/", area: "g"},
              {name: "哔哩哔哩", link: "https://www.bilibili.com/", area: "g"},
              {name: "哔哩哔哩港番", link: "https://space.bilibili.com/11783021", area: "b"},
              {name: "风车动漫", link: "https://www.dm530p.info/", area: "g"},
              {name: "爱恋动漫BT", link: "https://www.kisssub.org/", area: "b"},
              {name: "AGE动漫", link: "https://www.agemys.cc/", area: "g"},
              {name: "樱花动漫", link: "http://www.dmh8.com/", area: "g"},
              {name: "樱花动漫", link: "http://www.857dm.com/", area: "b"},
              {name: "MX动漫", link: "http://www.mxdmx.com/", area: "b"},
              {name: "动漫蛋", link: "https://www.dm0.cc/", area: "b"},
              {name: "奇奇动漫", link: "https://www.qiqidongman.com/", area: "g"},
              {name: "zzzFun", link: "http://www.zzzfun.com/", area: "b"},
              {name: "Hanime1", link: "https://hanime1.me/", area: "r"},
              {name: "Kemono", link: "https://kemono.party/", area: "r"},
              {name: "NHentai", link: "https://nhentai.net/", area: "r"},
              {name: "漫画柜", link: "https://www.manhuagui.com/", area: "b"},
              {name: "古风漫画网", link: "https://www.123gf.com/", area: "g"},
              {name: "E-hentai", link: "https://e-hentai.org/", area: "r"},
              {name: "18comic", link: "https://18comic.vip/", area: "r"},
            ],
          },
          {
            title:"图片",
            pictureList: [
              {name: "Pixiv", link: "", area: "r"},
              {name: "Fanbox", link: "", area: "r"},
              {name: "Pinterest", link: "", area: "r"},
              {name: "花瓣", link: "", area: "g"},
              {name: "半次元", link: "", area: "g"},
              {name: "Lofter", link: "", area: "g"},
              {name: "米画师", link: "", area: "g"},
              {name: "Yand.re", link: "", area: "r"},
            ],
          },
          {
            title:"工具",
            toolList: [
              {name: "Convertio", link: "", area: "b"},
              {name: "Forex", link: "", area: "g"},
              {name: "百度翻译", link: "", area: "g"},
              {name: "谷歌翻译", link: "", area: "g"},
              {name: "沪江小D", link: "", area: "g"},
              {name: "谷歌邮箱", link: "", area: "b"},
              {name: "QQ邮箱", link: "", area: "g"},
              {name: "百度网盘", link: "", area: "g"},
              {name: "谷歌云盘", link: "", area: "b"},
              {name: "Font1001", link: "", area: "b"},
            ],
          },
          {
            title:"社区",
            socialContact: [
              {name: "微博", link: "", area: "r"},
              {name: "米游社", link: "", area: "g"},
              {name: "Twitter", link: "", area: "b"},
              {name: "OpenBase", link: "", area: "b"},
              {name: "Github", link: "", area: "b"},
              {name: "reddit", link: "", area: "b"},
            ],
          },
          {
            title:"编程",
            codeList: [
              {name: "腾讯云", link: "", area: "g"},
              {name: "转义字符表", link: "", area: "g"},
              {name: "ASCII码表", link: "", area: "g"},
              {name: "正则表达式", link: "", area: "g"},
              {name: "Clippy", link: "", area: "b"},
              {name: "Cubic", link: "", area: "b"},
              {name: "Namesilo", link: "", area: "g"},
              {name: "CloudFlare", link: "", area: "b"},
              {name: "Github代理", link: "", area: "g"},
              {name: "Gradients", link: "", area: "r"},
              {name: "IconFont", link: "", area: "g"},
              {name: "Maven仓库", link: "", area: "b"},
              {name: "Yarn仓库", link: "", area: "b"},
              {name: "Npm仓库", link: "", area: "b"},
              {name: "Java doc", link: "", area: "g"},
            ],
          },
        ]
  })
}
</script>

<style scoped>

</style>