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
</script>

<template>
  <div id="the" absolute top-25 w-full flex="~ justify-center gap2">
    <select ::="lctrIdx" min-w12 cursor-pointer appearance-none rounded-2 bg-hex-8883 text-center outline-none>
      <option v-for="(el, i) of locators" :key="i" :value="i" text-black>
        {{ el.name }}
      </option>
    </select>
    <form
      h10
      min-w300px flex w="33%" @submit.prevent="go"
    >
      <input
        ref="ipt"
        type="text"
        tabindex="1"
        ::="q"
        :placeholder="locator.rawurl"
        holder="op-50 black dark:op-50 dark:white"
        flex-1

        rounded-l-2 bg-hex-8883 px4 backdrop-blur-sm outline="none active:none"
        @keydown.tab.prevent="doTab"
      >
      <button shadow="inner hex-8883 active:hex-8881" rounded-r-2 px4 outline-none backdrop-blur-sm transition>
        Search
      </button>
    </form>
  </div>
</template>
