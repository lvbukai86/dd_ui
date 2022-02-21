
import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';  //哈希形路由
import Doc from './views/Doc.vue';   //哈希形路由
import SwitchDemo from './components/SwitchDemo.vue';
import DocDemo from './components/DocDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Intro from './views/Intro.vue';
import Install from './views/Install.vue';
import GetStarted from './views/GetStarted.vue';
const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc,
            children: [
                {path: '', component: DocDemo},
                {path: 'intro', component: Intro},
                {path: 'install', component: Install},
                {path: 'get-started', component: GetStarted},
                {path: 'switch', component: SwitchDemo},
                {path: 'button', component: ButtonDemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo}
            ]
        }
    ]
});