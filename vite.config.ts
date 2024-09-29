import { fileURLToPath, URL } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  server: {
    proxy: {
      '/picsum': {
        target: 'https://picsum.photos',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/picsum/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    VueMacros({
      shortVmodel: {
        prefix: '::',
      },
      exportProps: true,
      plugins: {
        vue: Vue(),
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        {
          '@vueuse/core': [
            'get',
            'set',
          ],
        },
      ],
      dts: true,
      dirs: [
        './src/composables',
        './src/data',
      ],
      vueTemplate: true,

    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),
    Inspect(),
  ],
})
