<template>
  <nav flex="~ gap2"  p="x1 y2">
    <a href="https://github.com/Tofu-Xx/deskdown" target="_blank" i-carbon:logo-github></a>
    <button @click="toggleDark()" i-carbon:sun dark:i-carbon:moon></button>
    <button @click="toggleWallpaper()" :class="showWallpaper?'i-carbon-image':'i-carbon-no-image'"></button>
  </nav>
</template>