import Vue from "vue";
import Vuex from "vuex";
import loginModule from "./loginModule";
import axios from 'axios'

Vue.use(Vuex);

// store는 페이지 새로고침시 데이터가 초기화된다. -> localStorage를 이용

export default new Vuex.Store({
  state:{
    isLogin: false,
    loginEmail: "",
    loginUserName: "",
  },
  getters:{

    getUserByName: (state)=>(userName)=>{
      return state.user.find(user => user.userName === userName)
    },
    getLoginCheck: (state)=>{
      return state.isLogin
    },
    getUserInfo: state => state.user,
    
  },
  modules:{
    loginModule,   
  },
  mutations:{
    setUser: (state, user) => state.user = user,
    setIsLogin(state, payload){
      state.isLogin = payload
    },
    setUserName: (state, payload) => state.user.userName = payload
  },
  actions:{
    async getUserinfo({ commit }, loginEmail){
      const res = await axios.post('/api/getUserInfo',{ userEmail:loginEmail });
      console.log(res)
      if(res.data != null){
        commit("setUserName",  res.data.NAME);
      }
      // post 는 promise를 return 해줌
      // promise 가 이렇게 할거야 라고 해주는 객체 -> 약속이 지켜졋는지 봐야하는데 -> await 를 써주면, 그 약속이 지켜지는지 보고 그 다음줄이 실행이된다.
      // 근데, 나는 이미 그 확인하는작업까지 then이랑catch로 다 해버린거다
      // 결론적으로 기다려는주데, 
      /*
      .then(function(response){
        console.log(response)
        if(response.data != null){
          commit("setUserName",  response.data.NAME);
        }
      })
      .catch(function(){
        console.log('실패');
      })
      */
    },
  }
  
});
