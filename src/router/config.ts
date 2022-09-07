import { RouteRecordRaw } from 'vue-router'
let layout = () => import('@/layout/index.vue')
const routers:Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: layout,
        children:[
            {
                path: '/',
                name: 'Home',
                component: () => import('@/views/home/home.vue'),
            },
            {
                path: 'user',
                name: 'user',
                component: () => import('@/views/user/user.vue')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue')
    },
  ]
  export default routers
