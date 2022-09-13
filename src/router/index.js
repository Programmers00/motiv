import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Main",
        component: () => import('@/views/main/Index')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
});
export default router;