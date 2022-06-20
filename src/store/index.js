import { createStore } from 'vuex';
import { signin } from '@/store/modules/signin';

export const store = createStore({
  modules: { signin }
});

export const global = {
  install(Vue) {
    Vue.config.globalProperties.$store = store;
  }
}
