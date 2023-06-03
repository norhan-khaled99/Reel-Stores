import { createApp } from 'vue'


import mainpage from './mainpage.vue';
import router from './routers/index';

const app = createApp(mainpage);
app.use(router);
app.mount('#app')