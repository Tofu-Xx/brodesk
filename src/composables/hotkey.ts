export function hotkey(keys: any, el?: any) {
  const magic = useMagicKeys({
    passive: false,
    onEventFired(e: KeyboardEvent) {
      if (e.key === 'Tab')
        e.preventDefault()
    },
  })
  const activeElement = useActiveElement()
  watch(magic.current, () => {
    for (const key in keys) {
      if ((el ? activeElement.value === el.value : true) && magic[key].value) {
        keys[key]()
        break
      }
    }
  }, { immediate: true })
}
