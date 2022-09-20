<template>
  <v-container class="k-absolute k-x-transform-center k-container">
    <v-row align-content="start" justify="start">
      <v-col align-self="start" class="k-relative" v-for="i in 14" :key="i">
        <v-img :src="seize" class="k-img k-overflow-hidden" width="182px" height="240px">
          <v-sheet elevation="0" color="black" width="100%" height="32px" class="k-opacity-80 k-bottom-0 k-absolute k-info">
            <p class="white--text k-price-info">￥233.00 ~ 666.00</p>
          </v-sheet>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import seize from '../../assets/index/price/seize.jpg'

export default {
  name: "Price",

  data: () => ({
    seize,
  })
}
</script>

<style scoped lang="less">
.k-container {
  padding-top: 32px;
  padding-bottom: 96px;
  background-color: white;
}

.k-price-info {
  line-height: 32px;
  text-align: center;
}

.k-info {
  transform: translateY(120px);
  transition: transform .3s ease;
}

.k-img {
  transition: transform .3s ease;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.53);

  &:hover {
    transition: transform .3s ease;
    transform: scale(1.36);
    transform-origin: center center;
    z-index: +10;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.53);
    .k-info {
      transform: translateY(0px);
      transition: transform .3s ease;
    }
  }
}
</style>