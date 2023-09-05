<template>
  <k-app>
    <k-header></k-header>
    <k-main>
      <router-view></router-view>
    </k-main>
  </k-app>
</template>
<script setup>
import {KApp} from "@/components/KApp/KApp";
import {KMain} from "@/components/KMain/KMain";
import {KHeader} from "@/components/KHeader/KHeader";
import {KFooter} from "@/components/KFooter/KFooter";
</script>