<template>
  <v-container class="k-absolute k-x-transform-center k-container-ex">
    <SearchBar></SearchBar>
    <Section2></Section2>
  </v-container>
</template>

<script>
import SearchBar from "@/components/index/SearchBar";
import Section2 from "@/components/index/Section2";

export default {
  name: "ExtraPage",
  components:{
    SearchBar,
    Section2,
  }
}
</script>

<style scoped lang="less">
.k-container-ex{
  padding: 42px 0 32px 0;
  background-color: transparent;
}
</style>