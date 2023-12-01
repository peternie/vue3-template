import { createApp } from 'vue'
import './style.css'
import App from './App.js'
import router from "./router/router.ts";
import 'vant/lib/index.css';
import vant from 'vant'
import { createPinia } from 'pinia';

const pinia = createPinia()
      createApp(App).use(router).use(vant).use(pinia).mount('#app')
