export const imgUrl = 'https://picsum.photos/3840/2160'
/*  */
export const currentWallpaper_ = useStorage('current-wallpaper', '')
/*  */
export const showWallpaper_ = useStorage('show-wallpaper', false)
export const toggleShowWallpaper = useToggle(showWallpaper_)
/*  */
export const pinWallpaper_ = useStorage('pin-wallpaper', false)
export const togglePinWallpaper = useToggle(pinWallpaper_)

/*  */
export const base64Wallpapers_ = useStorage<string[]>('base64-wallpapers', [])
export async function readyNext() {
  const { data } = await useFetch(imgUrl).blob()
  const { base64 } = useBase64(data as any)
  whenever(base64, () => {
    get(base64Wallpapers_).push(get(base64))
  })
}

watch(() => get(base64Wallpapers_).length, async () => {
  if (get(base64Wallpapers_).length < 3) {
    console.log('ready next')
    await readyNext()
    console.log('ready next done')
  }
}, { immediate: true })
