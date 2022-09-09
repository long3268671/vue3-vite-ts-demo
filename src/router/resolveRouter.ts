import router from './index'
import { h, resolveComponent } from 'vue'

export const _addRoutes = (asyncRoutes: any) => {
    const routes = filterAsyncRoutes(asyncRoutes)
    routes.forEach(async (route: any) => {
        if (!router.hasRoute(route.name)) {
            router.addRoute('home', route)  //需要使用vue-devtools才能看到是否添加成功
        }
    })
    if(!router.hasRoute('404')) {
        router.addRoute({
            path: '/:catchAll(.*)',
            name: '404',
            component: () => import('@/views/errorPage/index.vue')
        })
    }
}

//退出登录时用于清除router中的添加进的路由
export const _resetRouter = (asyncRoutes: any) => {
    asyncRoutes.forEach((route: any) => {
        router.removeRoute(route.name)
    })
}

// 这是vite才能使用的引入方式，vue-cli的可以百度
const _modules = import.meta.glob('../views/**/*.vue')

const filterAsyncRoutes = (routes: any) => { //对后端返回的路由进行格式转换
    const asyncRoutes: Array<any> = []
    routes.forEach((route: any) => {
        if (route.redirect) {
            if (route.redirect.indexOf('/') < 0) {
                route.redirect = { name: route.redirect }
            }
        }

        if (!route.component) {
            route.component = routerView
        } else {
            try {
                route.component = _modules['../views/' + route.component + '.vue']
            } catch (e) {
                console.log(e)
            }
        }
        //处理children嵌套路由
        if (route?.children?.length) {
            route.children = filterAsyncRoutes(route.children)
        }
        asyncRoutes.push(route)
    })
    return asyncRoutes
}

const routerView = {
    render: () => h(resolveComponent('router-view'))
}
