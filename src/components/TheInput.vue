<script setup lang="ts">
import type { Locator } from '~/data/locators'

export const locators: Locator[] = []
const lctrKey = 'current-locator'
const lctrIdx = useStorage(lctrKey, 0)
const locator = computed(() => locators[get(lctrIdx)])

const title = useTitle()
watchEffect(() => {
  set(title, get(locator).name)
})

const q = ref('')
const iptRef = useTemplateRef('ipt')
onStartTyping(() => {
  get(iptRef)?.focus()
})
watchEffect(() => {
  if (get(q) === '')
    get(iptRef)?.blur()
})

function go() {
  search(get(locator).rawurl, get(q))
  set(q, '')
}

const cmdMode = computed(() => get(q).trim().startsWith('>'))
watchEffect(() => {
  console.log(`cmdMode: ${cmdMode.value ? 'on' : 'off'}`)
})

function doTab() {
  set(lctrIdx, get(lctrIdx) + 1)
  if (get(lctrIdx) >= locators.length)
    set(lctrIdx, 0)
}

// const { tab } = useMagicKeys({
//   passive: false,
//   onEventFired(e) {
//     if (e.key === 'Tab')
//       e.preventDefault()
//   },
// })
// whenever(tab, () => {
//   get(iptRef)?.focus()
// })

useEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault()
    get(iptRef)?.focus()
  }
})
</script>

<template>
  <form ref="form" m="a t25" h10 min-w300px w45vw flex select-none gap2 @submit.prevent="go">
    <select
      ::="lctrIdx" min-w12 cursor-pointer appearance-none
      rounded-2 bg-hex-8883 text-center outline-none>
      <option v-for="(el, i) of locators" :key="i" :value="i" text-black>
        {{ el.name }}
      </option>
    </select>
    <input
      ref="ipt" type="text" ::="q" :placeholder="locator.rawurl"
      holder="op-50 black dark:op-50 dark:white" flex-1 rounded-2
      bg-hex-8883 px4 outline-none backdrop-blur-sm
      @keydown.tab.prevent="doTab">
    <button
      rounded-2 px4 shadow="inner hex-8883 active:hex-8881"
      outline-none backdrop-blur-sm active:scale-110>
      Search
    </button>
  </form>
</template>

<style scoped>
input::placeholder {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

input:focus::placeholder {
  opacity: 0;
}

input:not(:focus):placeholder-shown::placeholder {
  opacity: 1;
}
</style>
