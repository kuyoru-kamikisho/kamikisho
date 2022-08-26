<template>
  <v-container class="k-absolute k-x-transform-center">
    <CentralIcon></CentralIcon>
    <SearchBar></SearchBar>
  </v-container>
</template>

<script>
import SearchBar from "@/components/index/SearchBar";
import CentralIcon from "@/components/index/CentralIcon";

export default {
  name: "HomePage",

  components:{
    SearchBar,
    CentralIcon
  }
}
</script>

<style scoped lang="less">

</style>