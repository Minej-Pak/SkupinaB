import {createRouter, createWebHistory} from 'vue-router'
import index from '@/components/index.vue'
import igra from '@/components/igra.vue'
import prijava from '@/components/prijava.vue'
import registracija from '@/components/registracija.vue'
import kosarica from '@/components/kosarica.vue'

const routes = [
    { path: '/', component: index, name:'home' },
    { path: '/igra', component: igra, name: 'igra' },
    { path: '/prijava', component: prijava, name: 'prijava' },
    { path: '/registracija', component: registracija, name: 'registracija' },
    { path: '/kosarica', component: kosarica, name: 'kosarica' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router