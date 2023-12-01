import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
import AutoImport from 'unplugin-auto-import/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
export default defineConfig({
  plugins: [vue(),vueJsxPlugin(),AutoImport({
    imports:[
        'vue',
        "vue-router",
        'pinia'
    ],
  }),VueDevTools(),
  ],

  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },

})
