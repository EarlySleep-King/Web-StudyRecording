import Vue from 'vue'
import VueRouter from 'vue-router'
import Bank from '../views/bank/bank.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Bank',
    component: Bank
  },
  {
    path: '/clerk',
    name: 'Clerk',
    component: () => import('../views/clerk/clerk.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
