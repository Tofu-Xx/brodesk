<script setup lang="ts">
const locators = $ref([
  {
    name: 'google',
    rawurl:'google.com/search?q=%s'
  },
  {
    name:'bing',
    rawurl:'bing.com/search?q=%s'
  },
  {
    name:'ddg',
    rawurl:'duckduckgo.com/?q=%s'
  }
])
let lctrIdx = $ref(0)
let locator = $computed({
  get:()=>locators[lctrIdx % locators.length],
  set:v=>lctrIdx=locators.indexOf(v)
})
let q = $ref('')
const iptRef = $(useTemplateRef('ipt'))
onMounted(() => {
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
</script>

<template>
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
      @keydown.tab.prevent="lctrIdx++"
      px4 bg-hex-8883 flex-1
      rounded-l-4
      outline="none active:none">
    <button px4 rounded-r-4 shadow="inner hex-8883 active:hex-8881" outline-none transition>Search</button>
  </form>
</template>
