<script setup lang="ts">
let src = unref(wallpaperSrc) 
if(src) wallpaperSrc.value = null 
else src = 'https://picsum.photos/3840/2160'
console.log(src)
readyNext('ok')
</script>
<template>
  <img v-show="showWallpaper" :src pos="absolute inset-0 -z-100" size-screen object-cover>
</template>