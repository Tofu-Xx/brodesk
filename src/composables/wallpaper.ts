import { get } from '@vueuse/core'

export const base64Wallpapers = useStorage<string[]>(
  'base64-wallpapers',
  [],
)
export const showWallpaper = useStorage('show-wallpaper', false)
export const toggleWallpaper = useToggle(showWallpaper)
export async function readyNext() {
  const { data } = await useFetch('https://picsum.photos/3840/2160').blob()
  const { base64 } = useBase64(data as any)
  whenever(base64, () => {
    get(base64Wallpapers).push(get(base64))
  })
}
watch(() => get(base64Wallpapers).length, async () => {
  if (get(base64Wallpapers).length < 3) {
    await readyNext()
  }
}, { immediate: true })
