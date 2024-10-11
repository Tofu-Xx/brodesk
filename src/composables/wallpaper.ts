export const imgUrl = 'https://picsum.photos/3840/2160'
/*  */
export const currentWallpaper_ = useStorage('current-wallpaper', '')
/*  */
export const showWallpaper_ = useStorage('show-wallpaper', true)
export const toggleShowWallpaper = useToggle(showWallpaper_)
/*  */
export const onlyWallpaper_ = useStorage('only-wallpaper', false)
export const toggleOnlyWallpaper = useToggle(onlyWallpaper_)
/*  */
export const pinWallpaper_ = useStorage('pin-wallpaper', false)
export const togglePinWallpaper = useToggle(pinWallpaper_)

/*  */
export const base64Wallpapers_ = useStorage<string[]>('base64-wallpapers', [])
export async function readyNext() {
  const { data } = await useFetch(imgUrl).blob()
  const { base64 } = useBase64(data as any)
  whenever(base64, () => {
    base64Wallpapers_.value.push(base64.value)
  })
}

watch(() => base64Wallpapers_.value.length, async () => {
  if (base64Wallpapers_.value.length < 3) {
    console.log('ready next')
    await readyNext()
    console.log('ready next done')
  }
}, { immediate: true })
