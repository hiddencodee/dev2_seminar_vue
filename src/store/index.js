import Vue from "vue";
import Vuex from "vuex";
import loginModule from "./loginModule";
import axios from 'axios'

Vue.use(Vuex);

// store는 페이지 새로고침시 데이터가 초기화된다. -> localStorage를 이용

export default new Vuex.Store({
  state:{
    count: 12,
    user: {userName: null, userRole: '팀원'},
    isLogin: false,
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
    //vuexPraticeModule,
    
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
      const res = axios.post('/api/getUserInfo',{ userEmail:loginEmail });
      
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
    // actions 기본 형태 -> 간편한 형태
    /*
    increment(context){
      context.commit('increment')
    }
    this.$store.commit('increment')

     increment({commit}){
      commit('increment')
     }
     this.$store.dispatch('increment')
    */

     // Promise 객체 이용한 회원가입
    
  }
  
});
