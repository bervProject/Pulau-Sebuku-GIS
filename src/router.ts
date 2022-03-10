import VueRouter from 'vue-router';
import HomePage from './HomePage.vue';

const SupportData = () => import(/* webpackChunkName: "support-data" */'./SupportData.vue');

const routes = [
  { path: '/', component: HomePage },
  { path: '/data', component: SupportData },
];

const router = new VueRouter({
  routes,
});

export default router;
