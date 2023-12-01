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
  server:{
      proxy:{
        '/':{
           target:"http://localhost:3000",
           changeOrigin:true,
        }
      }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },

})
