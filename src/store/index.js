/* eslint-disable no-plusplus */
import Vue from 'vue';
import Vuex from 'vuex';

import testStore from '@/store/testStore';
import joinStore from '@/store/joinStore';
import loginStore from '@/store/loginStore';
import listStore from '@/store/listStore';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    testStore,
    joinStore,
    loginStore,
    listStore,
  },
});
