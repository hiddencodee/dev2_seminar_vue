import LoginObj from "@/modules/loginObj";

const loginModule = {
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
            LoginObj.UserInfo.email = loginEmail;
            LoginObj.UserInfo.name = loginName;
            LoginObj.UserInfo.loginStatus = true;
          commit("updateLoginStatus", { loginEmail, loginName });
        },
    
        logoutAction({ commit }) {
            LoginObj.UserInfo.Clear();
          commit("updateLogoutStatus");
        },
      },

}
export default loginModule;