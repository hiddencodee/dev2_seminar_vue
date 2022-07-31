//import router from "@/router";

import Vue from "vue";
import Vuex from "vuex";
import loginModule from "./loginModule";

Vue.use(Vuex);

// store는 페이지 새로고침시 데이터가 초기화된다. -> localStorage를 이용

export default new Vuex.Store({
  modules:{
    loginModule,
  }
});
