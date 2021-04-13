import {createRouter, createWebHistory} from 'vue-router'
import index from '@/components/index.vue'
import navigacija from '@/components/navigacija.vue'
import igra from '@/components/igra.vue'


const routes = [
    { path: '/', component: index, name:'home' },
    { path: '/navigacija', component: navigacija, name: 'navigacija' },
    { path: '/igra', component: igra, name: 'igra' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router