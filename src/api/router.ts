export function getRouter() {
    return new Promise((resolve)=>{
        resolve({
            code:200,
            message:'ok',
            data:[
                {
                    path: '/doc',
                    // component: 'doc/index',
                    name: 'doc',
                    meta: {
                        title: '内容管理',
                        icon: 'icon-ziyouquxian'
                    },
                    children: [
                        {
                            path: '/doc/doc_list',
                            component: 'doc/list',
                            name: 'doc_list',
                            meta: {
                                title: '内容管理1',
                                icon: 'icon-cengji_o'
                            },
                        },
                        {
                            path: '/doc/doc_blank',
                            component: 'doc/blank',
                            name: 'doc_blank',
                            meta: {
                                title: '内容管理2',
                                icon: 'icon-weizhi'
                            },
                        },
                    ]
                },
                {
                    path: '/user',
                    component: 'user/user',
                    name: 'user',
                    meta: {
                        title: '用户',
                        icon: 'icon-icon_fabu'
                    }
                },
            ]
        })
    })
}
