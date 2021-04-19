import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router.js'
import '@/assets/globalni.css'
import store from "./store/index"

const moja = createApp(App);
moja.use(store);
moja.use(router);
moja.mount('#app')