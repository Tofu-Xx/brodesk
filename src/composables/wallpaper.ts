export const isWallpaper = useStorage("use-wallpaper", false);
export const toggleWallpaper = useToggle(isWallpaper);
