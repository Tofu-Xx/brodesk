<script setup lang="ts">
const src = ref<string | undefined>(get(currentWallpaper_) || get(base64Wallpapers_).pop())
if (!get(src)) {
  set(src, imgUrl)
  // const imgRef = useTemplateRef('img')
  // onMounted(() => {
  //   // const { base64 } = useBase64(imgRef)
  //   // console.log('base64', base64)
  //   // watch(base64, () => {
  //   //   set(src, get(base64))
  //   //   console.log('ok src', get(src))
  //   // })
  //   console.dir(imgRef)
  // })
  provide('base64', void 0)
}
else provide('base64', src)
</script>

<template>
  <img v-show="showWallpaper_" ref="img" :src absolute size-screen object-cover>
  <slot />
</template>
