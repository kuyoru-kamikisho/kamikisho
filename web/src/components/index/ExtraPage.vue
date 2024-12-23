<template>
  <v-container
      v-touch="{
    right:rt,
    left:lt,
      }"
      class="k-absolute k-x-transform-center k-container-ex"
  >
    <SearchBar></SearchBar>
    <Section2></Section2>
  </v-container>
</template>

<script>
import SearchBar from "@/components/index/SearchBar.vue";
import Section2 from "@/components/index/Section2.vue";

export default {
  name: "ExtraPage",
  components:{
    SearchBar,
    Section2,
  },
  methods: {
    rt() {
      if (this.$store.state.s2p === true)
        this.$store.commit('s2p')
    },
    lt() {
      if (this.$store.state.s2p === false)
        this.$store.commit('s2p')
    },
  }
}
</script>

<style scoped lang="less">
.k-container-ex{
  padding: 42px 0 32px 0;
  background-color: transparent;
}
</style>