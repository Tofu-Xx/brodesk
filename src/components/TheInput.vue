<script setup lang="ts">
import { Locator } from "~/data/locators";
export const locators:Locator[] = []
const lctrKey = 'current-locator';
let lctrIdx = $(useStorage(lctrKey,0))
let locator = $computed(()=>locators[lctrIdx])
// set:v=>lctrIdx=locators.indexOf(v)

let title = $(useTitle())
watchEffect(()=>{
  title = locator.name
})

let q = $ref('')
const iptRef = $(useTemplateRef('ipt'))
onStartTyping(()=>{
  iptRef?.focus()
})

const go = () => {
  search(locator.rawurl,q)
  q = ''
}

watchEffect(()=>{
  if(q.trim()[0]!=='>') return
  console.log('命令模式')
})

const doTab = () =>{
  lctrIdx++
  if(lctrIdx>=locators.length) lctrIdx=0
}

</script>

<template>
  <div pos-absolute top-25 w-full flex="~ justify-center gap2">
    <select ::="lctrIdx" min-w12 text-center bg-hex-8883 rounded-2 outline-none appearance-none>
      <option v-for="(el,i) of locators" :value="i" text-black>{{el.name}}</option>
    </select>
    <form @submit.prevent="go"
      h10 flex min-w300px w="33%">
      <input
        type="text"
        ref="ipt"
        tabindex="1"
        ::="q"
        :placeholder="locator.rawurl"
        @keydown.tab.prevent="doTab"
        holder="op-50 black dark:op-50 dark:white"
        backdrop-blur-sm
        px4 bg-hex-8883 flex-1
        rounded-l-2
        outline="none active:none">
      <button backdrop-blur-sm px4 rounded-r-2 shadow="inner hex-8883 active:hex-8881" outline-none transition>Search</button>
    </form>
  </div>
</template>
