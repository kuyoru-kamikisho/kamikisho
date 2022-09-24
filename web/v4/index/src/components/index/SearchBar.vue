<template>
    <v-card width="100%" tile color="transparent" class="mx-auto mb-sm-2 mb-md-4 mb-lg-7 mb-xl-9 mt-3" elevation="0">
      <v-form>
        <template v-for="(item,index) in searchers">
          <v-row v-show="item.showif" align-content="center" justify="center" no-gutters dense>
            <v-col class="k-relative" :cols="colsResponse" align-self="center">
              <v-text-field
                  height="24"
                  :placeholder="item.title"
                  :type="item.type"
                  v-model="searchContent"
                  :value="searchContent"
                  :prepend-inner-icon="item.prependicon"
                  background-color="#f0f8ff96"
                  rounded
                  solo
                  flat
                  hide-details
                  loader-height="0"
                  class="inputer pa-0"
                  @keyup.enter="enterKeyUp(index)"
                  @keyup.esc="searchContent=''"
              />
              <v-btn class="k-absolute-important-effect" @click="switchListFnc(index)" text icon>
                <v-sheet width="26" color="transparent">
                  <v-img :src="item.icon"/>
                </v-sheet>
              </v-btn>
              <v-btn class="k-absolute-important-clear" @click="searchContent=''" text icon>
                <v-sheet width="24" color="transparent">
                  <v-img :src="cross"/>
                </v-sheet>
              </v-btn>
            </v-col>
          </v-row>
        </template>
      </v-form>
    </v-card>
</template>

<script>
import baidu from '../../assets/index/homepage/baidu.svg'
import google from '../../assets/index/homepage/google.svg'
import bilibili from '../../assets/index/homepage/BILIBILI_LOGO.svg'
import cross from '../../assets/index/homepage/cross.svg'

export default {
  name: "HomePage",

  computed: {
    colsResponse() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 11 // < 600
        case 'sm':
          return 8 // 600-960
        case 'md':
          return 6 // 960-1264
        case 'lg':
          return 6 // 1264-1904
        case 'xl':
          return 5 // > 1904
      }
    },
  },

  data: () => ({
    cross: cross,
    searchContent: "",
    searchers: [
      {
        showif: true,
        title: "Baidu",
        redirect: "https://www.baidu.com/s?wd=",
        icon: baidu,
        prependicon: "mdi-magnify",
        text: "百度一下",
        appendoutericon: "mdi-cached",
        background: "transparent",
        color: "red",
        type: "search",
      },
      {
        showif: false,
        icon: google,
        type: "search",
        title: "Google",
        redirect: "https://www.google.com/search?q=",
        prependicon: "mdi-magnify",
        appendoutericon: "mdi-cached",
        text: "谷歌搜索",
        color: "red",
        background: "transparent",

      },
      {
        showif: false,
        title: "bilibili",
        redirect: "https://search.bilibili.com/all?keyword=",
        icon: bilibili,
        appendoutericon: "mdi-cached",
        text: "哔哩哔哩",
        background: "transparent",
        color: "red",
        prependicon: "mdi-magnify",
        type: "search"
      },
    ]
  }),
  methods: {
    switchListFnc(index) {
      this.$data.searchers[index].showif = false
      if (index == 2)
        this.$data.searchers[0].showif = true
      else
        this.$data.searchers[index + 1].showif = true
    },
    enterKeyUp(index) {
      if (this.$data.searchContent !== '') {
        if (this.$data.searchContent !== 'tamago') {
          let searchURL = this.$data.searchers[index].redirect + this.$data.searchContent;
          window.location.assign(searchURL)
        }else {
          this.$store.commit('tamago')
          this.$data.searchContent=''
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.inputer {
  font-family: "汉仪文黑-85W", sans-serif;
  letter-spacing: 1.21rem;

  &::placeholder {
    color: rgba(86, 86, 86, 0.47);
  }

  background-color: transparent;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.43);
}
input[type="search"]{
  font-family: "汉仪文黑-85W", sans-serif;
  letter-spacing: 1.6rem;
}
.k-btn {
  border: 1px solid rgba(168, 167, 167, 0.82);
  box-sizing: border-box;
  border-left-width: 0;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.33);
}

.k-absolute-important-effect {
  position: absolute !important;
  right: 12px;
  bottom: 50%;
  transform: translateY(50%);
}

.k-absolute-important-clear {
  position: absolute !important;
  right: 54px;
  bottom: 50%;
  transform: translateY(50%);
  transition: transform .4s ease;

  &:hover {
    transition: transform .4s ease;
    transform: rotate(-180deg) translateY(-50%);
  }
}

</style>