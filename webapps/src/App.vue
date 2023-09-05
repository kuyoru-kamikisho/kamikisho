<template>
  <k-app>
    <k-main>
      <router-view></router-view>
    </k-main>
  </k-app>
</template>
<script setup>
import {KApp} from "@/components/KApp/KApp";
import {KMain} from "@/components/KMain/KMain";
</script>