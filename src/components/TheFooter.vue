<template>
  <nav flex="~ gap2" pos-absolute top-2 left-2>
    <a href="https://github.com/Tofu-Xx/deskdown" i-carbon:logo-github></a>
    <button @click="toggleDark()" i-carbon:sun dark:i-carbon:moon></button>
    <button @click="toggleWallpaper()" :class="`i-carbon-${isWallpaper? '':'no-'}image`"></button>
  </nav>
</template>