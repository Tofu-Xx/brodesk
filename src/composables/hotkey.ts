export function hotkey(keys: any, el?: any) {
  const magic = useMagicKeys({
    passive: false,
    onEventFired(e) {
      if (e.key === 'Tab')
        e.preventDefault()
    },
  })
  const activeElement = useActiveElement()
  watch(magic.current, () => {
    for (const key in keys) {
      if ((el ? get(activeElement) === get(el) : true) && get(magic[key])) {
        keys[key]()
        break
      }
    }
  }, { immediate: true })
}

// const { tab, shift_tab } = useMagicKeys({
//   passive: false,
//   onEventFired(e) {
//     if (e.key === 'Tab')
//       e.preventDefault()
//   },
// })
// const activeElement = useActiveElement()
// watchEffect(() => {
//   if (get(activeElement) === get(iptRef)) {
//     if (get(shift_tab))
//       set(lctrIdx, get(lctrIdx) - 1)
//     else if (get(tab))
//       set(lctrIdx, get(lctrIdx) + 1)
//   }
//   else if (get(tab))
//     get(iptRef)?.focus()
// })
