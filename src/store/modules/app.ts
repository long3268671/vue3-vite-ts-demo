import { defineStore } from 'pinia'
interface stateType {
    msg:string,
    count:number
}

export const appStore = defineStore('app',{
    state: ():stateType=>{
        return {
            count: 0,
            msg: '15898970112'
        }
    },
    getters: {
        doubleNum:(state)=>{
            console.log(111111,appStore)
            return state.count * 2
        }
    },
    actions: {
        changeCount(){
            this.count ++
        }
    }
})