import { routersType } from '@/router/type';
import { defineStore } from 'pinia'
import { getRouter } from '@/api/router'
import {_addRoutes} from '@/router/resolveRouter'
import routers  from '@/router/config'
interface userStateType{
    userInfo:{
        name?:string,
        tel?:string|number,
        passWord?:string|number,
    }|null,
    token:string,
    MenuList:any[]
}

export const userStore = defineStore('user',{
    state: ():userStateType=>{
        return {
            userInfo:JSON.parse(localStorage.getItem('userInfo') as string)||{},
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
                    getRouter().then((res:any)=>{
                        if(res.code == 200) {
                            let defaultRouters:routersType[] = routers.filter((route)=>route.name == 'home');
                            console.log('defaultRouters',defaultRouters);
                            if(defaultRouters.length && defaultRouters[0].children){
                                this.MenuList = [...defaultRouters[0].children,...res.data]
                                _addRoutes(res.data)
                                resolve(true)
                            }
                        }
                    })
                }
            })

        }
    }
})
