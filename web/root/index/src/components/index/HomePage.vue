<template>
  <v-container class="k-absolute k-x-transform-center">
    <CentralIcon></CentralIcon>
    <Section1></Section1>
  </v-container>
</template>

<script>
import CentralIcon from "@/components/index/CentralIcon";
import Section1 from "@/components/index/Section1";

export default {
  name: "HomePage",

  components: {
    CentralIcon,
    Section1,
  },
}
</script>

<style scoped lang="less">

</style>