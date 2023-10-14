import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
  //路由初始指向
    path: '/',
    redirect: "/home",
  },
  {
    path: '/home',
    name:'zhuyemian',
    component:()=>import('@/pages/home.vue'),
  },
  {
    path:'/Login',
    name:'Login',
    component:()=>import('@/pages/Login.vue'),
  },
  {
    path:'/Show',
    name:'Show',
    component:()=>import('@/pages/Show.vue'),
  },
  {
    path:'/test1',
    name:'test',
    component:()=>import('@/components/test.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
