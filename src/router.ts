import VueRouter from 'vue-router';
import Home from './Home.vue';

const SupportData = () => import(/* webpackChunkName: "support-data" */'./SupportData.vue');

const routes = [
  { path: '/', component: Home },
  { path: '/data', component: SupportData },
];

const router = new VueRouter({
  routes,
});

export default router;
