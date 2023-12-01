import { defineStore } from "pinia";


export const useStore = defineStore('main',{
       state:()=>{
         return {
               count:0
         }
       },
       getters:{
            doubleCount:(state)=>state.count*2
       },
       //支持async
       actions:{
            addCount(){
              console.log('123')
                this.count++
            },
       }
})