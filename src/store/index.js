//import router from "@/router";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userEmail: "minah",
    userPw: "minahPw",
    userName: "박민아",
    loginStatus: false,
  },
  mutations: {
    updateLoginStatus(state, { loginEmail, loginPw }) {
      console.log(loginEmail, loginPw);
      if (loginEmail == state.userEmail && loginPw == state.userPw) {
        state.loginStatus = true;
        console.log(state.userName);
        // 성공하면 메인화면으로 보내고 이름과 함께 보내기
      } else {
        state.loginStatus = false;
        console.log("로그인 실패");
      }
    },
  },
});
