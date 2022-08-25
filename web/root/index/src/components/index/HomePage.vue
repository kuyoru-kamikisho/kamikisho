<template>
  <v-container class="k-absolute k-x-transform-center">
    <SearchBar></SearchBar>
  </v-container>
</template>

<script>
import SearchBar from "@/components/index/SearchBar";

export default {
  name: "HomePage",

  components:{
    SearchBar
  }
}
</script>

<style scoped>

</style>