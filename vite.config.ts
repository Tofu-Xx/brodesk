import path from "node:path";
import Vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import VueMacros from "unplugin-vue-macros/vite";
import VueDevTools from "vite-plugin-vue-devtools";
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    VueMacros({
      defineProps: false,
      defineModels: false,
      shortVmodel: {
        prefix: "::",
      },
      exportProps: true,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "@vueuse/core",
      ],
      dts: true,
      dirs: [
        "./src/composables",
        "./src/data",
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
});
