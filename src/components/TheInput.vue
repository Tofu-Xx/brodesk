<script setup lang="ts">
export let locator:string = ''
let q = $ref('')
const iptRef = $(useTemplateRef('ipt'))
onMounted(() => {
  iptRef?.focus()
})
</script>

<template>
  <form @submit.prevent="search(locator,q)"
    h10 flex>
    <input
      type="text"
      ref="ipt"
      ::="q"
      px4
      bg-hex-8883
      border="~ transparent rounded-l focus:zinc-800 focus:dark:zinc-400"
      outline="none active:none">
    <button px4 rounded-r bg-hex-8883>Search</button>
  </form>
</template>
