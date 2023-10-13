<template>
  <div class="d-flex flex-col content-frame">
    <div class="text-h5 d-flex title-field">
      <slot name="head"></slot>
      <span class="mx-2 anchor">#</span>
    </div>
    <div class="content-field py-4">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.content-frame {
  a#title {
    color: unset;
  }

  p {
    margin-bottom: 0.89rem;
  }

  .title-field {
    &:hover {
      .anchor {
        opacity: 1;
      }
    }
  }

  .content-field {
    word-break: break-word;
  }

  .anchor {
    opacity: 0;
    transition: opacity .2s ease;
  }
}
</style>