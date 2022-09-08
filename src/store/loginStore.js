import axios from "axios";

/* eslint-disable no-plusplus */
const loginStore = {
  namespaced: true,
  state: {
    loginEmail : ""
    ,sessionId : ""
  },
  getters: { // 공유되는 상태 값을 조회 로직을 관리, 접근방법 - this.$store.getters['경로명/함수명']

  },
  mutations: { // 상태 값을 변경하는 로직을 관리, 접근방법 - this.$store.commit('경로명/함수명')
    changeSession(state, payload){
      state.sessionId = payload
    },

  },
  actions: { // 비동기 통신 및 동작을 정의하고 관리, 접근방법 - this.$store.dispatch('경로명/함수명')
    login( {commit} , payload){
      return axios.post('/api/login', {
        email : payload.email,
        password : payload.password,
      })
      .then(response => {
        console.log(response + " << resopnce");
        console.log(response.data + " << resopnce.data");
        if(response.data.isSuccess == "true"){
          commit('changeSession',response.data.sessionId);
        }
        /*return Promise.resolve(response)*/
      })
    },

    kakaoLogin( {commit} , payload){
      axios.post('/api/login',{
        code : payload
      })
      .then(response => {
        if(response.data.isSuccess == "true"){
          commit('changeSession',response.data.sessionId);
          return Promise.resolve("success")
        }else{
          return Promise.resolve("fail")
        }
      })
    },

    keepLogin( {commit} , payload){
      console.log("payload : " + payload)
      axios.post('/api/keepLogin',{
        sessionId : payload
      })
      .then(response => {
        console.log(response.data);
        if(response.data == "fail"){
          commit('changeSession','');
        }
      })
      .catch( error => {
          console.log(error)
      })
    },

    logout( {commit},payload){
      console.log("logout 시 payload" + payload)
      axios.post('/api/logout',{
        sessionId : payload
      })
      .then(response => {
        console.log(response.data);
        commit('changeSession','');
      })
      .catch( error => {
          console.log(error)
      })
    },

  },
};

export default loginStore;
