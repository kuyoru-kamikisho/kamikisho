<template>
  <v-footer
      dark
      padless
      color="transparent"
      class="mb-12 mt-16"
  >
    <!--  white--text   -->
    <v-card
        flat
        tile
        color="transparent"
        class="text-center"
    >
      <v-card-text>
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
        >
          <v-icon color="blue-grey darken-4" size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="grey--text text--darken-4 pt-0" v-html="info"></v-card-text>

      <v-divider></v-divider>

      <!--如果追加视频为背景 class="white--text"-->
      <v-card-text class="black--text">
        2022-9-1 &nbsp;©
        <i>kuyoru</i>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import info from '../../assets/index/text/info.txt'

export default {
  name: "Footer",

  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    info
  })
}
</script>

<style scoped>

</style>