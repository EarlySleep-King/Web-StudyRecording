import Vue from 'vue'
import VueRouter from 'vue-router'
//预加载
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
    //懒加载
    component: () => import('../views/About.vue')
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: () => import('../views/MyPage.vue'),
    // beforeEnter(to,from,next){
    //   console.log(to,from);
    //   next();
    // }
  },
  {
    path:'/mypage2',
    name:'mypage2',
    component: () => import('../views/MyPage2.vue')
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
