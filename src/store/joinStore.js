/* eslint-disable no-plusplus */

import axios from "axios";

const joinStore = {
  namespaced: true,
  state: { // 공통 관리되는 상태값을 관리,  접근방법- this.$store.state.items
    // 모듈화후 컴포넌트에서의 접근방법- this.$store.state.명시된store 모듈 이름.state값
    types: [
      { value: null, text: '직위선택' },
      { value: '매니저', text: '매니저' },
      { value: '팀장', text: '팀장' },
    ],
    departs: [
      { value: null, text: '부서선택' },
      { value: '개발팀', text: '개발팀' },
      { value: '디자인팀', text: '디자인팀' },
      { value: '기획팀', text: '기획팀' },
      { value: '회계팀', text: '회계팀' },
    ],
    join: "false",
    useYN: "false"
  },
  getters: { // 공유되는 상태 값을 조회 로직을 관리, 접근방법 - this.$store.getters['경로명/함수명']

  },
  mutations: { // 상태 값을 변경하는 로직을 관리, 접근방법 - this.$store.commit('경로명/함수명')
    change(state){
      state.join = true
    },
    useChangeY(state){
      state.useYN = true
    },
    useChangeN(state){
      state.useYN = false
    }
  },
  actions: { // 비동기 통신 및 동작을 정의하고 관리, 접근방법 - this.$store.dispatch('경로명/함수명')
    join( {commit},payload){
      return axios.post('/api/join', {
        mbrId : payload.mbrId
        ,mbrPw : payload.mbrPw
        ,mbrNm : payload.mbrNm
        ,mbrDept : payload.mbrDept
        ,mbrType :payload.mbrType
      })
      .then(response => {
        console.log(response + " << resopnce");
          commit('change');
      })
    },
    idDuplication( context, payload ){
      return axios.post('/api/idDuplication',{
        mbrId : payload
      })
      .then(response => {
        if(response.data.isSuccess == "true"){
          if(response.data.idCheck > 0){
            return "useN"
          }else{
            return "useY"
          }
        }else{
          return "fail"
        }
      })
    },
    useChangeY({commit}){
      commit('useChangeY');
    },
    useChangeN({commit}){
      commit('useChangeN');
    }
  },
};

export default joinStore;
