import {createRouter, createWebHistory} from 'vue-router'
import index from '@/components/index.vue'
import navigacija from '@/components/navigacija.vue'


const routes = [
    { path: '/', component: index, name:'home' },
    { path: '/navigacija', component: navigacija, name: 'navigacija' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router