import { createApp } from 'vue'
import './style.css'
import App from './App.js'
import router from "./router/router.ts";

      createApp(App).use(router).mount('#app')
