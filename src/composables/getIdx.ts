export function getIdx(arr: any[]) {
  const idx = ref(0)
  return computed({
    get: () => idx.value,
    set: (v: number) => {
      if (v >= arr.length)
        idx.value = 0
      else if (v < 0)
        idx.value = arr.length - 1
      else idx.value = v
    },
  })
}
