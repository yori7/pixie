import './assets/main.css';
import vuetify from './vuetify/vuetify';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);

app.mount('#app');
