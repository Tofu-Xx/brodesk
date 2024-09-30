<script setup lang="ts">
const base64 = inject('base64')
watch(pinWallpaper_, () => {
  set(currentWallpaper_, get(pinWallpaper_) ? get(base64) : null)
}, { immediate: true })
</script>

<template>
  <nav flex="~ gap2" p="x1 y2">
    <a href="https://github.com/Tofu-Xx/deskdown" target="_blank" i-carbon:logo-github />
    <button i-carbon:sun dark:i-carbon:moon @click="toggleDark()" />
    <button :class="showWallpaper_ ? 'i-carbon-image' : 'i-carbon-no-image'" @click="toggleShowWallpaper()" />
    <button v-if="base64" :class="pinWallpaper_ ? 'i-mdi-pin' : 'i-mdi-pin-outline'" @click="togglePinWallpaper()" />
    <button :class="onlyWallpaper_ ? 'i-carbon-view-off' : 'i-carbon-view'" @click="toggleOnlyWallpaper()" />
  </nav>
</template>
