<script setup lang="ts">
import { set } from "@vueuse/core";
const src = unref(wallpaperSrc) ||  'https://picsum.photos/3840/2160'
set(wallpaperSrc,'')
readyNext('ok')
</script>
<template>
  <img v-show="showWallpaper" :src absolute size-screen object-cover>
</template>