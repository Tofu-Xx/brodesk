export const wallpaperSrc = useStorage("wallpaper-base64", "");
export const showWallpaper = useStorage("show-wallpaper", false);
export const toggleWallpaper = useToggle(showWallpaper);
export const readyNext = async (msg: string) => {
  console.log("ready next img... awaiting...");
  const { data } = await useFetch("https://picsum.photos/3840/2160").blob();
  const { base64 } = $(useBase64(data as any));
  whenever($$(base64), () => {
    wallpaperSrc.value = base64;
    console.log(msg);
  });
};
