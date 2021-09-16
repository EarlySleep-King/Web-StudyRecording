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
  {
    path: '/movie',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/cinemas',
    name: 'Cinemas',
    component: () => import('../views/movie/Cinemas.vue')
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('../views/music/Music.vue')
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../views/book/Book.vue')
  },
  {
    path: '/talk',
    name: 'Talk',
    component: () => import('../views/talk/Talk.vue')
  }
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
