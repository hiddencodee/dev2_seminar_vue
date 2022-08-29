import axios from "axios";

/* eslint-disable no-plusplus */
const loginStore = {
  namespaced: true,
  state: {
    loginEmail : ""
    ,loginYN : false
  },
  getters: { // 공유되는 상태 값을 조회 로직을 관리, 접근방법 - this.$store.getters['경로명/함수명']

  },
  mutations: { // 상태 값을 변경하는 로직을 관리, 접근방법 - this.$store.commit('경로명/함수명')
    changeY(state){
      state.loginYN = true
    },
    changeN(state){
      console.log('여기로와야 loginYN이 false됨')
      state.loginYN = false
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
        if(response.data == "로그인성공"){
          commit('changeY');
        }else{
          commit('changeN');
        }
        /*return Promise.resolve(response)*/
      })
    },

    keepLogin( {commit} ){
      console.log("keepLogin!!!!!!");
      axios.post('/api/keepLogin')
      .then(response => {
        console.log(response.data);
        if(response.data == "유지성공"){
          commit('changeY');
        }else{
          commit('changeN');
        }

      })
      .catch( error => {
          console.log(error)
      })

    },

    logout( {commit} ){
      axios.post('/api/logout')
      .then(response => {
        console.log(response.data);
        commit('changeN');
      })
      .catch( error => {
          console.log(error)
      })
    },

    change( {commit}, payload ){
      if(payload == "Y"){
        commit('changeY');
      }else{
        commit('changeN');
      }
    }

  },
};

export default loginStore;
