<script setup lang="ts">
const src = unref(wallpaperSrc)||"https://picsum.photos/3840/2160"
readyNext('ok')
</script>
<template>
  <img v-show="showWallpaper" :src pos="absolute inset-0 -z-100" size-screen object-cover>
</template>