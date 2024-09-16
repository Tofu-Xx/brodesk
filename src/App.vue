<script setup lang="ts">
const locator = $ref('https://www.bing.com/search?q=%s')
</script>
<template>
  <main font-sans p4 flex="~ col justify-center items-center gap2" text="center gray-700 dark:gray-200">
    <TheInput
      ::locator="locator"
      placeholder="typing in title"
      autocomplete="false" />
    <TheFooter />
  </main>
</template>
