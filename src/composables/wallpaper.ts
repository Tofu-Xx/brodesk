export const isWallpaper = ref(true);
export const toggleWallpaper = useToggle(isWallpaper);
watchEffect(() => {
  console.log(isWallpaper.value);
});
