<script setup lang="ts">
const hasCache = ref(true)
const src = get(base64Wallpapers).pop()
set(hasCache, Boolean(src))
if (!get(hasCache)) {
  set(src, imgUrl)
}
// const imgRef = useTemplateRef('')
</script>

<template>
  <img v-show="showWallpaper" ref :src absolute size-screen object-cover>
  <slot />
</template>
