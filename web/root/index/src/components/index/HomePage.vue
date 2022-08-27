<template>
  <v-container class="k-absolute k-x-transform-center">
    <CentralIcon></CentralIcon>
    <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
      <SearchBar v-show="this.$store.state.homepageExtra"></SearchBar>
    </transition>
    <Section1></Section1>
    <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
      <Section2 v-show="this.$store.state.homepageExtra"></Section2>
    </transition>
  </v-container>
</template>

<script>
import SearchBar from "@/components/index/SearchBar";
import CentralIcon from "@/components/index/CentralIcon";
import Section1 from "@/components/index/Section1";
import Section2 from "@/components/index/Section2";

export default {
  name: "HomePage",

  components:{
    SearchBar,
    CentralIcon,
    Section1,
    Section2
  }
}
</script>

<style scoped lang="less">

</style>