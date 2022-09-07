import { createApp } from 'vue';
import App from './App.vue';
// base api
console.log(import.meta.env.VITE_APP_BASE_API);
import router from './router/index';
import store, { key } from './store/index';
// title
// console.log(import.meta.env.VITE_APP_BASE_API);
createApp(App).use(router).use(store, key).mount('#app');
