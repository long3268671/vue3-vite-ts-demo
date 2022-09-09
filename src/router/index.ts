import { createRouter, createWebHistory } from 'vue-router'
import routers from './config';
import { userStore } from '@/store/modules/user'
const router = createRouter({
    history: createWebHistory(),
    routes: routers
})
const whiteList = ['/login', '/404']
let pageRefresh = true
// 路由拦截器
router.beforeEach(async(to, from) => {
    // TODO: 自定义拦截内容
    const token = localStorage.getItem('token');
    const user_store = userStore()
    if (whiteList.indexOf(to.path) !== -1) {
        if (to.path == '/login') {
            pageRefresh = true
        }
        return true
    }
    if (!token) {
        router.push('/login')
    } else {
        if (!pageRefresh) {
            return true
        } else {
            //后端获取动态路由
            await user_store.setRouter().then((res: any) => {
                if (res && to.matched.length == 0) {
                    router.push(to.fullPath)
                }
            })
            pageRefresh = false
        }
    }
  });

export default router
