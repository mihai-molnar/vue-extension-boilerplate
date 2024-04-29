import { createApp } from 'vue';
import './style.css';
import { createRouter, createMemoryHistory } from 'vue-router';
import PopupComponent from './PopupComponent.vue';
import OptionsComponent from '../options/OptionsComponent.vue';
import UserComponent from '../user/UserComponent.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { name: 'Popup', path: '/', component: PopupComponent },
    { name: 'Options', path: '/options', component: OptionsComponent },
    { name: 'User', path: '/user', component: UserComponent },
  ],
});

createApp(PopupComponent).use(router).mount('#app');
