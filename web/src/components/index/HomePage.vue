<template>
  <v-container class="k-absolute k-x-transform-center">
    <CentralIcon></CentralIcon>
    <Section1></Section1>
    <Footer></Footer>
  </v-container>
</template>

<script>
import CentralIcon from "@/components/index/CentralIcon.vue";
import Section1 from "@/components/index/Section1.vue";
import Footer from "@/components/index/Footer.vue";

export default {
  name: "HomePage",
  components: {
    CentralIcon,
    Section1,
    Footer
  },
}
</script>

<style scoped lang="less">

</style>