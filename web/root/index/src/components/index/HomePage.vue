<template>
  <v-container class="k-absolute mx-auto">
    <v-card width="100%" tile color="transparent" class="mx-auto" elevation="0">
      <v-form>
        <v-row v-for="(item,index) in searchers" :key="index" no-gutters dense>
          <v-col align-self="center" cols="4">
            <input
                :placeholder="item.title"
                :type="item.type"
                v-model="item.value"
                :value="item.value"
                class=""
            />
          </v-col>
          <v-col cols="3" align-self="center">
              <v-btn class="k-btn" text tile>
                <v-img width="24" height="24" contain :src="item.icon"/>
                <span class="ml-2" v-text="item.text"></span>
              </v-btn>
          </v-col>
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
  border: 1px solid rgba(91, 90, 90, 0.82);
  padding: 6px 8px;
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-family: "汉仪文黑-85W",sans-serif;
  &::placeholder{
    color: rgba(255, 0, 0, 0.47);
  }
}
.k-btn{
  border: 1px solid rgba(190, 188, 188, 0.82);

}
</style>