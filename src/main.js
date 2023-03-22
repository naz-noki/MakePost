import { createApp } from 'vue';

import App from './App.vue';

import './assets/main.scss';

import { store } from './index'

const app = createApp(App);

app.use(store);

app.mount('#app');