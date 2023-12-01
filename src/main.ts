import { createApp } from 'vue'
import './style.css'
import App from './App.js'
import router from "./router/router.ts";
import 'vant/lib/index.css';
import vant from 'vant'
      createApp(App).use(router).use(vant).mount('#app')
