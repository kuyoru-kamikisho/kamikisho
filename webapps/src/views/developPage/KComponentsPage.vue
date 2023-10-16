<template>
  <k-app>
    <k-header>222</k-header>
    <k-nav-drawer>
      <k-list>
        <k-list-item to="/docs/components/introduction">概述</k-list-item>
      </k-list>
    </k-nav-drawer>
    <k-main>
      <k-sheet class="pa-4">
<!--        <router-view></router-view>-->
      </k-sheet>
    </k-main>
  </k-app>
</template>

<script setup>
import {KApp} from "@/components/KApp/KApp";
import {KHeader} from "@/components/KHeader/KHeader";
import {KMain} from "@/components/KMain/KMain";
import {KNavDrawer} from "@/components/KNavDrawer/KNavDrawer";
import {KList} from "@/components/KList/KList";
import {KListItem} from "@/components/KList/KListItem/KListItem";
import {KSheet} from "@/components/KSheet/KSheet";
</script>

<style lang="scss">

</style>