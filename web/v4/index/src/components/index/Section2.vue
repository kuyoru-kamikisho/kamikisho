<template>
  <section
      id="section2"
      @dblclick.stop="db"
  >

    <v-sheet color="transparent" class="k-site-box-class k-relative" v-for="(topic,index) in site" :key="index">

      <a :id="topic.title" class="k-absolute k-element-penetrate"
         style="height: 10px;width: 10px;background-color: red;bottom: 250px;visibility: hidden"> </a>

      <a class="k-a-title k-cursor-default">
        <div class="k-title-icon"></div>
        <span v-text="topic.title"></span>
      </a>

      <v-sheet color="rgb(27 23 32 / 80%)" class="k-items">
        <a class="k-display-inline-block k-relative k-a-hover" v-for="(sl,i) in topic.List" :href="sl.link" :key="i">
          <div class="k-div k-display-inline-block k-relative my-2">
            <p class="k-absolute k-left-0 k-top-0 k-p k-p-common"></p>
            <span class="k-link-text k-link-text-common">{{ sl.name }}</span>
            <i :class="'k-absolute k-i-left k-'+sl.area"></i>
            <i :class="'k-absolute k-i-right k-'+sl.area"></i>
          </div>
        </a>
      </v-sheet>
    </v-sheet>

  </section>
</template>

<script>/**
 * 本组件用于构成快捷方式页面，本页初始化时不对外显示，显示条件为点击左上角站标
 */

export default {
  name: "Section2",

  data: () => ({
    site:
        [
          {
            title: "动漫/漫画",
            List: [
              {name: "哔哩哔哩", link: "https://www.bilibili.com/", area: "g"},
              {name: "哔哩哔哩港番", link: "https://space.bilibili.com/11783021", area: "b"},
              {name: "风车动漫", link: "https://www.dm530w.org/", area: "g"},
              {name: "爱恋动漫BT", link: "https://www.kisssub.org/", area: "b"},
              {name: "AGE动漫", link: "https://www.agemys.cc/", area: "g"},
              {name: "樱花动漫", link: "https://www.yhdmz.org/", area: "g"},
              {name: "樱花动漫", link: "https://www.yinhuadm.cc/", area: "b"},
              {name: "omoFun", link: "https://www.omofun.in/", area: "b"},
              {name: "NyaFun", link: "https://www.nyafun.net/", area: "b"},
              {name: "MX动漫", link: "http://www.mxdm9.com/", area: "b"},
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
            title: "图片",
            List: [
              {name: "Pixiv", link: "https://www.pixiv.net/", area: "r"},
              {name: "Fanbox", link: "https://www.fanbox.cc/", area: "r"},
              {name: "Pinterest", link: "https://www.pinterest.jp/", area: "r"},
              {name: "花瓣", link: "https://huaban.com/", area: "g"},
              {name: "半次元", link: "https://bcy.net/", area: "g"},
              {name: "Lofter", link: "https://www.lofter.com/", area: "g"},
              {name: "米画师", link: "https://www.mihuashi.com/", area: "g"},
              {name: "Yand.re", link: "https://yande.re/post", area: "r"},
            ],
          },
          {
            title: "工具",
            List: [
              {name: "Convertio", link: "https://convertio.co/zh/", area: "b"},
              {name: "Forex", link: "https://www.xe.com/zh-CN/", area: "g"},
              {name: "百度翻译", link: "https://fanyi.baidu.com/", area: "g"},
              {name: "谷歌翻译", link: "https://translate.google.cn/", area: "g"},
              {name: "沪江小D", link: "https://dict.hjenglish.com/", area: "g"},
              {name: "谷歌邮箱", link: "https://mail.google.com/", area: "b"},
              {name: "QQ邮箱", link: "https://mail.qq.com/", area: "g"},
              {name: "百度网盘", link: "https://pan.baidu.com/", area: "g"},
              {name: "谷歌云盘", link: "https://drive.google.com/", area: "b"},
              {name: "Font1001", link: "https://www.1001fonts.com/", area: "b"},
            ],
          },
          {
            title: "社区",
            List: [
              {name: "微博", link: "https://weibo.com/", area: "r"},
              {name: "米游社", link: "https://bbs.mihoyo.com/", area: "g"},
              {name: "Twitter", link: "https://twitter.com/", area: "b"},
              {name: "OpenBase", link: "https://openbase.com/", area: "b"},
              {name: "Github", link: "https://github.com/", area: "b"},
              {name: "reddit", link: "https://www.reddit.com/", area: "b"},
            ],
          },
          {
            title: "编程",
            List: [
              {name: "腾讯云", link: "https://cloud.tencent.com/", area: "g"},
              {name: "转义字符表", link: "https://tool.oschina.net/commons?type=2", area: "g"},
              {name: "ASCII码表", link: "https://tool.oschina.net/commons?type=4", area: "g"},
              {name: "正则表达式", link: "https://c.runoob.com/", area: "g"},
              {name: "Clippy", link: "https://bennettfeely.com/clippy/", area: "b"},
              {name: "Cubic", link: "https://cubic-bezier.com/", area: "b"},
              {name: "Namesilo", link: "https://www.namesilo.com/", area: "g"},
              {name: "CloudFlare", link: "https://dash.cloudflare.com/", area: "b"},
              {name: "Github代理", link: "https://ghproxy.com/", area: "g"},
              {name: "Gradients", link: "https://uigradients.com/", area: "r"},
              {name: "IconFont", link: "https://www.iconfont.cn/", area: "g"},
              {name: "Maven仓库", link: "https://mvnrepository.com/", area: "b"},
              {name: "Yarn仓库", link: "https://yarnpkg.com/", area: "b"},
              {name: "Npm仓库", link: "https://www.npmjs.com/", area: "b"},
              {name: "Java doc", link: "https://docs.oracle.com/en/java/javase/18/docs/api/index.html", area: "g"},
            ],
          },
        ],
  }),
  methods: {
    db(e) {
      console.log(e.target)
      if (this.$store.state.homepageExtra) {
        this.$store.commit('s2p')
      }
    }
  }
}
</script>

<style scoped lang="less">
section#section2 {
  padding: 8px 0 72px 0;
  user-select: none;
}

.k-site-box-class {
  margin-top: 1.67rem;

  &:hover .k-title-icon {
    .k-title-icon-common();
    background-color: #f81740;
    clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);
    transition: background-color .3s ease;
  }
}

@media screen and (max-width: 960px) {
  .k-site-box-class {
    margin: 1.67rem 0 0 36px;
  }
}

a {
  text-decoration: none;
  color: black
}

.k-title-icon-common {
  display: inline-block;
  vertical-align: middle;
  width: 7px;
  height: 7px;
  margin-right: .4em;
}

.k-title-icon {
  .k-title-icon-common();
  background-color: #199cb9;
  transition: background-color .3s ease;
}

.k-a-title {
  display: block;
  color: rgba(235, 241, 241, 0.76);
  font-size: 18px;
  cursor: default !important;
  font-style: italic;
  margin: 0 0 1em 0;

  position: relative;
  background-image: linear-gradient(to right, #ee124b, #ec20c0 6px, transparent 6px, transparent 4px);
  background-position: 0 bottom;
  background-repeat: repeat-x;
  background-size: 10px 1px;
}

.k-a-hover {
  &:hover .k-p {
    transform: scaleX(1);
    transform-origin: left center;
    transition: transform .3s cubic-bezier(.42, .07, .66, .99);
  }

  &:hover .k-link-text {
    color: #edfbfc;
    margin-left: .8em;
    transition: color .3s ease, margin-left .3s ease;
  }

  &:hover .k-i-right {
    .k-right-common();
    transform: scaleX(1);
    transform-origin: left center;
    transition: transform .3s ease .3s;
  }
}

.k-items {
  margin-left: 16px;
}

@media screen and (max-width: 960px) {
  .k-items {
    margin-left: 0px;
    margin-right: 16px;
  }
}

.k-div {
  width: 10rem;
  padding: 0 0 0 .9rem;
  overflow: hidden;
  word-break: keep-all;
  height: 18px;
}

.k-link-text {
  color: #f1eded;
  margin: 0;
  font-family: PingFang SC, HarmonyOS_Medium, Helvetica Neue, Microsoft YaHei, sans-serif, '汉仪文黑-85W';
  transition: color .3s ease, margin-left .3s ease;
}

.k-link-text-common {
  letter-spacing: .08rem;
  font-size: 17px;
  position: relative;
  bottom: 4px;
}

.k-p-common {
  background-color: black;
  width: 100%;
  height: 100%;
}

.k-p {
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform .3s cubic-bezier(.42, .07, .66, .99);
}

.k-i-left {
  width: 4px;
  height: 100%;
  left: 6px;
}

.k-right-common {
  width: 6px;
  height: 100%;
  right: 10px;
}

.k-i-right {
  .k-right-common();
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform .3s ease .3s;
}

.k-r {
  background-color: #ff0c26;
}

.k-b {
  background-color: #0cb6ff;
}

.k-g {
  background-color: #79ff0c;
}
</style>