import VueRouter from 'vue-router'
import Home from './Home.vue'
import SupportData from './SupportData.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/data', component: SupportData }
]

const router = new VueRouter({
  routes
})

export default router
