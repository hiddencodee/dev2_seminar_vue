/* eslint-disable no-plusplus */
import Vue from 'vue';
import Vuex from 'vuex';

import testStore from '@/store/testStore';
import joinStore from '@/store/joinStore';
import loginStore from '@/store/loginStore';
import listStore from '@/store/listStore';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    testStore,
    joinStore,
    loginStore,
    listStore,
  },
  plugins: [
    //주목! : 여기에 쓴 모듈만 저장됩니다.
    createPersistedState({
      paths: ['loginStore'],
    })
  ]
});
