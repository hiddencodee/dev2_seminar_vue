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
          state.isLogin = true;
          state.loginEmail = loginEmail;
          state.loginName = loginName;
          localStorage.setItem("isLogin", true);
          localStorage.setItem("userName", loginName);
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
            var userName = res.data.userInfo.NAME
            await commit("updateLoginStatus", { loginEmail, loginName:userName });
            if(this.getters['loginModule/getUserInfo'] == true){
              router.push("/user/main")
            }
          }else{
            console.log('실패');
          }
        },
        
        async signUp(context, params){
          try{
            const res = await axios.post('/api/signUp/action',params);
            if(res.data.isSuccess == true){
              alert('회원가입이 완료되었습니다.');
            }else{
              console.log(res)
              if(res.data.errorMsg != null && res.data.errorMsg == 'emailDup'){
                alert('이미 등록된 이메일 주소입니다. 다시 입력해주세요.');  
              }else{
                alert('화원가입을 진행중 오류가 발생했습니다. 관리자에게 문의해주세요.');
              }
            }
          }catch{
            alert('화원가입을 진행중 오류가 발생했습니다. 관리자에게 문의해주세요.');
          }
        },

        setLoginAction({ commit }, { loginEmail, loginName }) {
            
          commit("updateLoginStatus", { loginEmail, loginName });
        },
    
        logoutAction({ commit }) {
            
          commit("updateLogoutStatus");
        },
      },

}
export default loginModule;