import { createRouter, createWebHistory } from 'vue-router'
import routers from './config'
const router = createRouter({
    history: createWebHistory(),
    routes: routers
})
// 路由拦截器
router.beforeEach((to, from, next) => {
    // TODO: 自定义拦截内容
    console.log(to, from, next)
    next();
  });
  
export default router