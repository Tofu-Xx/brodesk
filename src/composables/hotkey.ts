export function hotkey(keys: any, el?: any) {
  const magic = useMagicKeys({
    passive: false,
    onEventFired(e) {
      if (e.key === 'Tab')
        e.preventDefault()
    },
  })
  const activeElement = useActiveElement()
  watchEffect(() => {
    if (el && get(activeElement) !== get(el))
      return
    for (const key in keys) {
      if (get(magic[key])) {
        keys[key]()
        break
      }
    }
  })
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
