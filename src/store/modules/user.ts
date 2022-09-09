import { defineStore } from 'pinia'
import { getRouter } from '@/api/router'
import {_addRoutes} from '@/router/resolveRouter.ts'
import routers  from '@/router/config'
interface userStateType{
    userInfo:{
        name?:string,
        tel?:string|number,
        passWord?:string|number,
    },
    token:string,
    MenuList:any[]
}

export const userStore = defineStore('user',{
    state: ():userStateType=>{
        return {
            userInfo:JSON.parse(localStorage.getItem('userInfo'))||{},
            token:localStorage.getItem('token')||'',
            MenuList:[]
        }
    },
    getters: {
    },
    actions:{
        getUser(){
            return {
                userInfo:this.userInfo,
                token:this.token
            }
        },
        setRouter(){
            return new Promise(resolve => {
                const getR = this.MenuList;
                if(getR.length){
                    _addRoutes(getR)
                    resolve(true)
                }else{
                    getRouter().then(res=>{
                        if(res.code == 200) {
                            let defaultRouters = routers.filter((route)=>route.name == 'home');
                            console.log('defaultRouters',defaultRouters)
                            this.MenuList = [...defaultRouters[0].children,...res.data]
                            _addRoutes(res.data)
                            resolve(true)
                        }
                    })
                }
            })

        }
    }
})
