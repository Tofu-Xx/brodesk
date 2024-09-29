<script setup lang="ts">
const src = get(base64Wallpapers).pop() || 'https://picsum.photos/3840/2160'
</script>

<template>
  <img v-show="showWallpaper" :src absolute size-screen object-cover>
</template>
