import { createApp } from 'vue';
import { Quasar } from 'quasar';

import App from './App.vue';
import quasarUserOptions from './quasar-user-options';
import { router } from './router';
import { store } from './store';

const app = createApp(App);
app.use(Quasar, quasarUserOptions);
app.use(router);
app.use(store);
app.mount('#app');
