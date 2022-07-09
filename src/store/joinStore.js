/* eslint-disable no-plusplus */
const joinStore = {
  namespaced: true,
  state: { // 공통 관리되는 상태값을 관리,  접근방법- this.$store.state.items
    // 모듈화후 컴포넌트에서의 접근방법- this.$store.state.명시된store 모듈 이름.state값
    position: [
      { value: null, text: '직위선택' },
      { value: 'a', text: '매니저' },
      { value: 'a', text: '팀장' },
    ],
  },
  getters: { // 공유되는 상태 값을 조회 로직을 관리, 접근방법 - this.$store.getters['경로명/함수명']

  },
  mutations: { // 상태 값을 변경하는 로직을 관리, 접근방법 - this.$store.commit('경로명/함수명')

  },
  actions: { // 비동기 통신 및 동작을 정의하고 관리, 접근방법 - this.$store.dispatch('경로명/함수명')
  },
};

export default joinStore;
