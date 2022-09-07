import { createApp } from 'vue'
import App from './views/App.vue'
import router from '@/router/index'
import "virtual:windi.css";

import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';
// 导入构造函数
import { store } from '@/store/index'
// base api
console.log(import.meta.env.VITE_APP_BASE_API);
// title
console.log(import.meta.env.VITE_APP_PROJECT_ENV);
console.log(store)
// 实例化 Pinia
createApp(App).use(router).use(store).use(message).mount('#app')
