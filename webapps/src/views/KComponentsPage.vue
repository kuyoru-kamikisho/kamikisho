<template>
  <k-sheet tag="p"></k-sheet>
  <!--  渲染结果：<p></p>-->
  <k-sheet tag="div">100</k-sheet>
  <!--  渲染结果：<div>100</div>-->
  <k-sheet tag="section"><span>120</span></k-sheet>
  <!--  渲染结果：<section><span>100</span></section>-->
</template>

<script setup>
import {KSheet} from "@/components";

</script>

<style lang="scss">

</style>