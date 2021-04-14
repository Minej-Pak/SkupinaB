import {createRouter, createWebHistory} from 'vue-router'
import index from '@/components/index.vue'
import navigacija from '@/components/navigacija.vue'
import igra from '@/components/igra.vue'
import prijava from '@/components/prijava.vue'

const routes = [
    { path: '/', component: index, name:'home' },
    { path: '/navigacija', component: navigacija, name: 'navigacija' },
    { path: '/igra', component: igra, name: 'igra' },
    { path: '/prijava', component: prijava, name: 'prijava' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router