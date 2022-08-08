import axios from "axios";

const loginModule = {
    namespaced: true,
    state: {
        isLogin: false,
      },
    
      mutations: {
        updateLoginStatus(state, { loginEmail, loginName }) {
          state.isLogin = true;
          state.loginEmail = loginEmail;
          state.loginName = loginName;
        },
        updateLogoutStatus(state) {
          state.isLogin = false;
          state.loginEmail = "";
          state.loginName = "";
        },
      },
    
      actions: {
        
        async signIn({ commit }, { loginEmail, loginPw }){
          var paramMap = {loginEmail : loginEmail,
            loginPw : loginPw}
            console.log(paramMap);
          return await axios.post('/api/login/action',{ loginEmail, loginPw })
          .then(function(response){
            console.log(response);
            commit("updateLoginStatus", { loginEmail, loginPw });
          })
          .catch(function(){
            console.log('실패');
          })
        },
        
        /*
        signUp({ userName, userEmail, userPw }){
          var data = {userName : userName,
            loginPw : loginPw}
           axios.post('/api/login/action',data)
          .then(function(response){
            console.log(response);
          })
          .catch(function(){
            console.log('실패');
          })
        },
        */
        setLoginAction({ commit }, { loginEmail, loginName }) {
            
          commit("updateLoginStatus", { loginEmail, loginName });
        },
    
        logoutAction({ commit }) {
            
          commit("updateLogoutStatus");
        },
      },

}
export default loginModule;