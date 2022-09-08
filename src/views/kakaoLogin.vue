<template>
  <div>
    <button @click="handleGlobalClickButton">
      카운트 증가하는 버튼!
    </button>
  </div>
</template>

<style scoped>
</style>



<script>
export default {
  data(){
    return{
      code : ''
    }
  },
  mounted(){
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get('code') // 코드 여기서 받음
    this.code = code
    console.log("code : " + code)
    this.kakaoLogin();
  },
  methods: {
    kakaoLogin(){
      this.$store.dispatch('loginStore/kakaoLogin',this.code)
      .then(response => {
          console.log(response)
          if(response == "success"){
            alert('로그인에 성공하였습니다.')
            this.$router.push('/main');
          }else{
            alert('가입되어 있지않은 이메일입니다. 회원가입창으로 이동됩니다.')
            this.$router.push('/join');
          }
        })
        .catch(() => {
          console.log("실패");
        })
    }
  },
};

</script>
