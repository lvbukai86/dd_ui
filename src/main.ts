import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory,createRouter} from "vue-router"
import Home from './views/Home.vue';  //哈希形路由
import Doc from './views/Doc.vue';   //哈希形路由
const history=createWebHashHistory()
const router=createRouter({
    history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc}
    ]
})
const app=createApp(App)
app.use(router)
app.mount('#app')
