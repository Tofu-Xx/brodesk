<script setup lang="ts">
import type { Locator } from '~/data/locators'

export const locators: Locator[] = []
// const idx = ref(0)
const lctrIdx = getIdx(locators)
useStorage('locator-index', lctrIdx)
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
watch(q, () => {
  if (get(q) === '' && get(onlyWallpaper_))
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

hotkey({
  shift_tab() {
    set(lctrIdx, get(lctrIdx) - 1)
  },
  tab() {
    set(lctrIdx, get(lctrIdx) + 1)
  },
}, iptRef)
hotkey({
  tab() {
    get(iptRef)?.focus()
  },
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
      bg-hex-8883 px4 outline-none backdrop-blur-sm>
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
