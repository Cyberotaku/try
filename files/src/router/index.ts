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
    path:'/vue1',
    name:'vue1',
    component:()=>import('@/components/vue1.vue'),
  },
  {
    path:'/vue2',
    name:'vue2',
    component:()=>import('@/components/vue2.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
