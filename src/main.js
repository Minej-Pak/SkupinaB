import { createApp } from 'vue'
import router from '@/router.js'
import '@/assets/globalni.css'

const moja = createApp(App);
moja.use(router);
moja.mount('#app')

