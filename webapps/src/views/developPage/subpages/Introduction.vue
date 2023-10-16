<template>
  <content-frame class="introduction">
    <template #head>
      <a id="title" href="/kamikisho/docs/components/introduction#introduction">介绍</a>
    </template>
    <template #default>
      <p>
        <a class="text-decoration-none"
           href="https://github.com/kuyoru-kamikisho/kamikisho/tree/main/webapps/src/components">K-UI</a>
        是专门为 kamikisho系列网站开发的一套基于Vue3的UI组件库，
        任何 kamikisho 系列网站都应该使用 K-UI 里面的组件进行开发。
      </p>
      <p>当然，这些组件都是完全开源的，
        如果您感觉这些组件做的不错，
        非常欢迎您在您自己的网站中使用，
        同样地如果您对这些组件有什么改进建议，
        也非常欢迎您 <a href="https://github.com/kuyoru-kamikisho/kamikisho/issues">点击这里</a>
        提出您的宝贵意见。
      </p>
      <p>关于这些组件的性能，
        为了尽可能地提高组件的可定制性，
        这些组件都采用TSX进行开发，
        同时也尽量地避免了重复代码和无用代码来减轻每一个组件的代码体量，
        所有的 kamikisho 系列网站均采用这些组件进行开发，
        您可以尽情测试。
      </p>
      <p>请注意，该组件开发的目的仅用于服务kamikisho网站，因此在设计上的可配置性很低。
        此外面向的浏览器也较新，因此如果您要用于商业应用，请慎重。
      </p>
    </template>
  </content-frame>
</template>

<script setup lang="ts">
import ContentFrame from "@/views/developPage/components/ContentFrame.vue";

</script>

<style lang="scss">

</style>