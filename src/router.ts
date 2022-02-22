
import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';  //哈希形路由
import Doc from './views/Doc.vue';   //哈希形路由
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import {h} from 'vue'
import MakeDown from './components/Makedown.vue';
const history = createWebHashHistory();
const md =filename =>h(MakeDown,{path:`../markdown/${filename}.md`,key:filename}) //封装引入方法直接引入md文件
export const router = createRouter({
    history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc,
            children: [
                { path: "", redirect: '/doc/intro' },
                {path: 'intro', component: md('intro')},
                {path: 'install', component: md('install')},
                {path: 'get-started', component:md('get-started')},
                {path: 'switch', component: SwitchDemo},
                {path: 'button', component: ButtonDemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo}
            ]
        }
    ]
});
