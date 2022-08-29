<template>
  <div>
    <router-view />
    <div id="container">
      인사관리시스템 로그인
      <div id="login">
        <form>
          <b-input-group
            class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              placeholder="이메일을 입력하세요."
              v-model="loginInfo.email" />
          </b-input-group>
          <b-input-group
            class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              type="password"
              placeholder="비밀번호를 입력하세요."
              v-model="loginInfo.password" />
          </b-input-group>

          <b-button
            block
            variant="success"
            id="loginBtn"
            @click="onClickLogin()">
            로 그 인
          </b-button>

          <router-link
            to="/join"
            class="nav-link">
            회원가입
          </router-link>
        </form>
      </div>

      <SnsLogin />
    </div>
  </div>
</template>

<style scoped>
#container{
  padding: 100px;
  margin: 0 auto;
}
#login{
  width: 500px;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: #dee2e6;
  border-bottom-color: #dee2e6;
}
#loginBtn{
  margin-top: 10px;
  width: 100%;
  background-color:lightseagreen;
  border-color: lightseagreen;
}

</style>

<script>
import SnsLogin from '../components/SnsLogin.vue';

export default {

  mounted(){
    this.$store.dispatch('loginStore/keepLogin')
        .then(() => {
          if(this.$store.state.loginStore.loginYN){
            console.log("로그인유지");
          }else{
            console.log("로그인유지실패");
          }
        })
        .catch(() => {
          console.log("로그인유지로직오류");
        })
  },

  created(){
    const script = document.createElement('script');
    script.src = '//developers.kakao.com/sdk/js/kakao.js';
    document.head.appendChild(script);

  },

  data() {
    return {
      loginInfo : {
        email : ''
        ,password : ''
      }
    };
  },
  methods: {
    onClickLogin(){
      const loginInfo = this.loginInfo
      console.log(loginInfo.email);
      this.$store.dispatch('loginStore/login',loginInfo)
        .then(() => {
          if(this.$store.state.loginStore.loginYN){
            alert('로그인에 성공하였습니다.')
            this.$router.push('/main');
          }else{
            alert('로그인에 실패하였습니다.')
          }
        })
        .catch(() => {
          console.log("실패");
        })
      }

  },

  components: {
    SnsLogin,
  },

};

</script>
