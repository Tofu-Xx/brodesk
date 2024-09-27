<template>
  <nav flex="~ gap2" p="x1 y2">
    <a href="https://github.com/Tofu-Xx/deskdown" target="_blank" i-carbon:logo-github />
    <button i-carbon:sun dark:i-carbon:moon @click="toggleDark()" />
    <button :class="showWallpaper ? 'i-carbon-image' : 'i-carbon-no-image'" @click="toggleWallpaper()" />
  </nav>
</template>
