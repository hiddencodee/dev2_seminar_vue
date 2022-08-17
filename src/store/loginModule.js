import router from "@/router";
import axios from "axios";

const loginModule = {
    namespaced: true,
    state: {
        isLogin: false,
        loginEmail: "",
        loginName: "",
      },
    getters:{
      getUserInfo: state => state.isLogin,
    },
      mutations: {
        updateLoginStatus(state, { loginEmail, loginName }) {
          console.log('loginEmail' + loginEmail);
          console.log('loginName' + loginName);
          state.isLogin = true;
          state.loginEmail = loginEmail;
          state.loginName = loginName;
          localStorage.setItem("isLogin", true);
          localStorage.setItem("userName", loginName);
          console.log(localStorage.getItem("userName"));
        },
        updateLogoutStatus(state) {
          state.isLogin = false;
          state.loginEmail = "";
          state.loginName = "";
          localStorage.setItem("isLogin", false);
          localStorage.setItem("userName", "");
        },
      },
    
      actions: {
        
        async signIn({ commit }, { loginEmail, loginPw }){
          // httpheader 에 authrization에 저장
          const res = await axios.post('/api/login/action',{ loginEmail, loginPw });
          if(res.data.isSuccess == true){
            console.log(res.data)
            var userName = res.data.NAME
            console.log('userName' + userName)
            await commit("updateLoginStatus", { loginEmail, userName });
            console.log(this.getters['loginModule/getUserInfo'])
            if(this.getters['loginModule/getUserInfo'] == true){
              router.push("/user/main")
            }
          }else{
            console.log('실패');
            console.log(res);
          }
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