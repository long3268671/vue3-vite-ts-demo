import { defineStore } from 'pinia'

interface userStateType{
    userName:string,
    tel:string|number,
    passWord:string|number,
    userInfo?:Object
}

export  const userStore = defineStore('user',{
    state: ():userStateType=>{
        return {
            userName:'张三',
            tel:'13838384388',
            passWord:'123456'
        }
    },
    getters: {
        tonken:(state)=>{
            console.log(state);
            return '123456789'
        }
    },
    actions:{
        getUser(){
            return {
                userName:this.userName
            }
        }
    }
})