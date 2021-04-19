import {createRouter, createWebHistory} from 'vue-router'
import home from '@/views/Home.vue'
import igra from '@/components/igra.vue'
import prijava from '@/components/prijava.vue'
import registracija from '@/components/registracija.vue'
import kosarica from '@/components/kosarica.vue'
import about from '@/components/About.vue'

const routes = [
    { path: '/', component: home, name:'home' },
    { path: '/igra', component: igra, name: 'igra' },
    { path: '/prijava', component: prijava, name: 'prijava' },
    { path: '/registracija', component: registracija, name: 'registracija' },
    { path: '/kosarica', component: kosarica, name: 'kosarica' },
    { path: '/about', component: about, name: 'about'},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router