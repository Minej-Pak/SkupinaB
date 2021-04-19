import {createRouter, createWebHistory} from 'vue-router'
import index from './components/Home.vue'
import prijava from '@/components/prijava.vue'
import registracija from '@/components/registracija.vue'
import kosarica from '@/components/Kosarica.vue'

const routes = [
    { path: '/', component: index, name:'home' },
    { path: '/prijava', component: prijava, name: 'prijava' },
    { path: '/registracija', component: registracija, name: 'registracija' },
    { path: '/kosarica', component: kosarica, name: 'kosarica' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router