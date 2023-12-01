import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
const routes :RouteRecordRaw[] = [
    {
        name:'index',
        path:'/',
        component:()=>import('../views/index.tsx')
    },
    {
        name:'page',
        path:'/page',
        component:()=>import('../views/page.tsx')
    }
]
const router= createRouter({
    history:createWebHashHistory(),
    routes
})

export default router