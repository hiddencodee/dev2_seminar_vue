//import router from "@/router";

import Vue from "vue";
import Vuex from "vuex";
import LoginObj from "../modules/loginObj";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    LoginObj: LoginObj,
    loginStatus: false,
  },
  mutations: {
    updateLoginStatus(state, { loginEmail, loginName }) {
      state.loginStatus = true;
      state.LoginObj.email = loginEmail;
      state.LoginObj.name = loginName;
    },
  },
});
