import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from "vue-router"
import Frank from './components/Frank.vue';  //哈希形路由
import Frank2 from './components/Frank2.vue';  //哈希形路由
const history=createWebHashHistory()
const router=createRouter({
    history,
    routes:[
        {path:'/',component:Frank},
        {path:'/xxx',component:Frank2}
    ]
})
const app=createApp(App)
app.use(router)
app.mount('#app')
