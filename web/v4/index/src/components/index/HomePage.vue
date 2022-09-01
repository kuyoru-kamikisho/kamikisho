<template>
  <v-container class="k-absolute k-x-transform-center">
    <CentralIcon></CentralIcon>
    <Section1></Section1>
    <Footer></Footer>
  </v-container>
</template>

<script>
import CentralIcon from "@/components/index/CentralIcon";
import Section1 from "@/components/index/Section1";
import Footer from "@/components/index/Footer";

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