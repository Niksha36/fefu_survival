// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader'
import store from "@/store.js";

defineIonPhaser(window);

createApp(App).use(store).use(router).mount('#app');