import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: () => import('../views/MyPage.vue')
  },
  {
    path:'/parentpage',
    name:'parentpage',
    component: () => import('../views/test_page/ParentPage.vue'),
    children:[
      {
        path:'/parentpage/childpage1/:username',
        name:'childpage1',
        component: () => import('../views/test_page/ChildPage1.vue')
      },
      {
        path:'/parentpage/childpage2',
        name:'childpage2',
        component: () => import('../views/test_page/ChildPage2.vue')
      }
    ]
  },
  {
    path:'/home',
    redirect:'/'
  },
  {
    path:'*',
    component:() => import('../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
