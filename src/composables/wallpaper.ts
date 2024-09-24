export let wallpaperSrc = $(useStorage("wallpaper-base64", ""));
export const isWallpaper = useStorage("use-wallpaper", false);
export const toggleWallpaper = useToggle(isWallpaper);
export const readyNext = async (msg: string) => {
  const { data } = await useFetch("https://picsum.photos/3840/2160").blob();
  const { base64 } = $(useBase64(data as any));
  whenever($$(base64), () => {
    wallpaperSrc = base64;
    console.log(msg);
  });
};
