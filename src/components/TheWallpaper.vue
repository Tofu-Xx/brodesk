<script setup lang="ts">
const src = ref<string | undefined>(currentWallpaper_.value || base64Wallpapers_.value.pop())
provide('base64', unref(src))
src.value || (src.value = imgUrl)
</script>

<template>
  <img v-show="showWallpaper_" ref="img" :src absolute size-screen object-cover>
  <div :class="{ onlyWallpaper_ }" relative size-screen>
    <slot />
  </div>
</template>

<style scoped>
.onlyWallpaper_::v-deep {
  & *:not(form) {
    opacity: 0;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
  & form {
    &:has(input:focus-within) *,
    & *:focus-within {
      opacity: 1;
    }
  }
}
</style>
