<template>
  <v-container class="k-absolute k-x-transform-center">
    <v-card width="100%" tile color="transparent" class="mx-auto" elevation="0">

      <v-sheet color="red" width="82" height="82" class="mt-4 mb-6 mx-auto">

      </v-sheet>

      <v-form>
        <v-row v-for="(item,index) in searchers" align-content="center" justify="center" :key="index" no-gutters dense>
          <v-spacer></v-spacer>
          <v-col :cols="colsResponse" align-self="center">
            <input
                :placeholder="item.title"
                :type="item.type"
                v-model="item.value"
                :value="item.value"
            />
          </v-col>
          <v-col align-self="center">
              <v-btn height="39" class="k-btn" text tile>
                <v-img width="24" height="24" contain :src="item.icon"/>
                <span class="ml-2 d-none d-sm-flex" v-text="item.text"></span>
              </v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import baidu from '../../assets/index/homepage/baidu.svg'
import google from '../../assets/index/homepage/google.svg'
import bilibili from '../../assets/index/homepage/BILIBILI_LOGO.svg'

export default {
  name: "HomePage",

  computed: {
    colsResponse () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 9 // < 600
        case 'sm': return 6 // 600-960
        case 'md': return 6 // 960-1264
        case 'lg': return 5 // 1264-1904
        case 'xl': return 5 // > 1904
      }
    },
  },

  data: () => ({
    searchers: [
      {
        title: "Baidu",
        redirect: "https://www.baidu.com/s?wd=",
        clearable: true,
        clearicon: "mdi-window-close",
        icon: baidu,
        text: "百度一下",
        background: "transparent",
        color: "red",
        value: "",
        type: "search"
      },
      {
        title: "Google",
        redirect: "https://www.google.com/search?q=",
        clearable: true,
        clearicon: "mdi-window-close",
        icon: google,
        text: "谷歌搜索",
        background: "transparent",
        color: "red",
        value: "",
        type: "search"
      },
      {
        title: "bilibili",
        redirect: "https://search.bilibili.com/all?keyword=",
        clearable: true,
        clearicon: "mdi-window-close",
        icon: bilibili,
        text: "哔哩哔哩",
        background: "transparent",
        color: "red",
        value: "",
        type: "search"
      },
    ]
  }),
}
</script>

<style scoped lang="less">
input{
  display: block;
  outline: none;
  border: 1px solid rgba(196, 41, 41, 0.82);
  border-right-width: 0px;
  padding: 8px 6px 8px 8px;
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-family: "汉仪文黑-85W",sans-serif;
  &::placeholder{
    color: rgba(86, 86, 86, 0.47);
  }
  background-color: transparent;
}
.k-btn{
  border: 1px solid rgba(190, 188, 188, 0.82);
  box-sizing: border-box;
}
</style>