export function getIdx(arr: any[]) {
  const idx = ref(0)
  return computed({
    get: () => get(idx),
    set: (v) => {
      if (v >= arr.length)
        set(idx, 0)
      else if (v < 0)
        set(idx, arr.length - 1)
      else set(idx, get(v))
    },
  })
}
