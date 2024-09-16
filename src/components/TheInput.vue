<script setup lang="ts">
export let locator:string = ''
let q = $ref('')
const iptRef = $(useTemplateRef('ipt'))
onMounted(() => {
  iptRef?.focus()
})
const go = () => {
  search(locator,q)
  q = ''
}
</script>

<template>
  <form @submit.prevent="go"
    h10 flex min-w300px>
    <input
      type="text"
      ref="ipt"
      ::="q"
      px4 bg-hex-8883 flex-1
      rounded-l-4
      outline="none active:none">
    <button px4 rounded-r-4 shadow="inner hex-8883 active:hex-8881" outline-none transition="100">Search</button>
  </form>
</template>
