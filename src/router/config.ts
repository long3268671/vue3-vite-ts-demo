import { RouteRecordRaw } from 'vue-router'
let layout = () => import('@/layout/index.vue')
const routers:Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        meta: { title: '首页' },
        component: layout,
        children:[
            {
                path: '/home',
                name: 'homeIndex',
                component: () => import('@/views/home/home.vue'),
                meta: { title: '首页',icon:'icon-List' }
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue'),
        meta: { title: '登录',showMenu:false }
    },
    // {
    //     path: '/404',
    //     component: () => import('@/views/errorPage/index.vue'),
    //     meta: { title: '404',hideMenu:true }
    // },
    // {
    //     path: '/:catchAll(.*)',
    //     redirect:'/404'
    // },
  ]
export default routers
