<script setup lang="ts">
import { Locator } from "~/data/locators";
export const locators:Locator[] = []
const lctrKey = 'current-locator';
let lctrIdx = $(useStorage(lctrKey,0))
let locator = $computed({
  get:()=>locators[lctrIdx % locators.length],
  set:v=>lctrIdx=locators.indexOf(v)
})
let q = $ref('')
const iptRef = $(useTemplateRef('ipt'))
onMounted(() => {
  iptRef?.focus()
})
const {ctrl_k} = useMagicKeys()
watch(ctrl_k,(v)=>{
  if(v){
    console.log()
    iptRef?.focus()
  }
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

useEventListener(document,'keydown', function(event) {
  if (event.ctrlKey && event.key === 'k') {
    event.preventDefault();
    iptRef?.focus()
  }
});
</script>

<template>
  <div pos-absolute top-25 w-full flex="~ justify-center gap2">
    <select ::="locator" bg-hex-8883 rounded-4 pl4>
      <option v-for="(el) of locators" :value="el">{{el.name}}</option>
    </select>
    <form @submit.prevent="go"
      h10 flex min-w300px w="33%">
      <input
        type="text"
        ref="ipt"
        ::="q"
        :placeholder="locator.rawurl"
        @keydown.tab.prevent="doTab"
        px4 bg-hex-8883 flex-1
        rounded-l-4
        outline="none active:none">
      <button px4 rounded-r-4 shadow="inner hex-8883 active:hex-8881" outline-none transition>Search</button>
    </form>
  </div>
</template>
