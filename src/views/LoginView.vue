<template>
  <div>
    <router-view />
    <div id="container">
      인사관리시스템
      <div id="login">
        <form>
          <!-- 메서드 생성 -->

          <b-input-group
            prepend="@"
            class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              id="inline-form-input-username"
              placeholder="이메일을 입력하세요." />
          </b-input-group>
          <b-input-group
            prepend="@"
            class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              id="inline-form-input-username"
              placeholder="비밀번호를 입력하세요." />
          </b-input-group>

          <b-button
            block
            variant="success"
            id="loginBtn"
            @click="move()">
            로 그 인
          </b-button>

          <router-link
            to="/join"
            class="nav-link">
            회원가입
          </router-link>
        </form>
      </div>

      <SnsLogin
        :title="title"
        @titleFromChild="titleChange" />
      {{ title }}
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

  created(){
    const script = document.createElement('script');
    script.src = '//developers.kakao.com/sdk/js/kakao.js';
    document.head.appendChild(script);

  },


  data() {
    return {
      title : ""
    };
  },
  methods: {
    move() {
      alert('로그인이 완료되었습니다.');
      this.$router.push('/main');
    },
    titleChange(title) {
      this.title = title
    }
  },

  components: {
    SnsLogin,
  },

};

</script>
