import { createApp } from 'vue'
import './style.css'
import naive from 'naive-ui'
import App from './App.js'
import router from "./router/router.ts";

      createApp(App).use(router).use(naive).mount('#app')
