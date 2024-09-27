<script setup lang="ts">
import { get} from "@vueuse/core";
const src = get(base64Wallpapers).pop() ||  'https://picsum.photos/3840/2160'
</script>
<template>
  <img v-show="showWallpaper" :src absolute size-screen object-cover>
</template>