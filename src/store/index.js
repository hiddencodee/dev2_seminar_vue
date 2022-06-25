/* eslint-disable no-plusplus */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // 공통 관리되는 상태값을 관리,  접근방법- this.$store.state.items
    tardy: 0,
  },
  getters: { // 공유되는 상태 값을 조회 로직을 관리, 접근방법 - this.$store.getters['경로명/함수명']
  },
  mutations: { // 상태 값을 변경하는 로직을 관리, 접근방법 - this.$store.commit('경로명/함수명')
    addTardy(state) {
      state.tardy++;
    },
  },
  actions: { // 비동기 통신 및 동작을 정의하고 관리, 접근방법 - this.$store.dispatch('경로명/함수명')
  },
});
