import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/movie/Movie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Movie',
    component: Movie
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
