import Vue from "vue";
import Vuex from "vuex";
import loginModule from "@/modules/loginModule";
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
    },
  }
  
});
