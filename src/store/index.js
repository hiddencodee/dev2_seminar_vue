//import router from "@/router";

import Vue from "vue";
import Vuex from "vuex";
import loginObj from "../modules/loginObj";
import LoginObj from "../modules/loginObj";

Vue.use(Vuex);

// store는 페이지 새로고침시 데이터가 초기화된다. -> localStorage를 이용

export default new Vuex.Store({
  state: {
    LoginObj: LoginObj,
    loginStatus: false,
    loginEmail: "",
    loginName: "",
  },

  mutations: {
    updateLoginStatus(state, { loginEmail, loginName }) {
      state.loginStatus = true;
      state.loginEmail = loginEmail;
      state.loginName = loginName;
    },
    updateLogoutStatus(state) {
      state.loginStatus = false;
      state.loginEmail = "";
      state.loginName = "";
    },
  },

  actions: {
    setLoginAction({ commit }, { loginEmail, loginName }) {
      loginObj.UserInfo.email = loginEmail;
      loginObj.UserInfo.name = loginName;
      loginObj.UserInfo.loginStatus = true;
      commit("updateLoginStatus", { loginEmail, loginName });
    },

    logoutAction({ commit }) {
      loginObj.UserInfo.Clear();
      commit("updateLogoutStatus");
    },
  },
});
