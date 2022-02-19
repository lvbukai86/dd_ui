import {createApp} from 'vue';
import App from './App.vue';
import "./lib/dd.scss";
import './index.scss';
import {router} from './router';


const app = createApp(App);
app.use(router);
app.mount('#app');
