<template>
  <v-footer
      dark
      padless
      color="transparent"
      class="mb-12 mt-16"
  >
    <v-card
        flat
        tile
        color="transparent"
        class="white--text text-center"
    >
      <v-card-text>
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0" v-html="info"></v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
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

  data:()=>({
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