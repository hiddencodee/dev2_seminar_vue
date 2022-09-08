<template>
  <div id="app">
    <div
      class="snsLoginKakao"
      @click="kakaoLoginBtn()">
      <img
        src="@/assets/kakaoSimbol.png"
        alt=""
        class="simbol" /> <span id="kakaoText"> 카카오로 시작하기 </span>
    </div>
    <div
      class="snsLoginNaver"
      @click="naverLoginBtn()">
      <img
        src="@/assets/naverSimbol.png"
        alt=""
        class="simbol" /> <span id="naverText"> 네이버로 시작하기 </span>
    </div>
    <form
      :action="kakaoUrl"
      method="post"
      ref="form">
      <input
        type="hidden"
        v-model="loginSubmit" />
    </form>
  </div>
</template>

<style scoped>
  .snsLoginKakao{
    margin: 0 auto;
    width: 500px;
    height: 50px;
    border-radius: 0.8em;
    background-color:#FEE500;
    cursor:pointer;
  }

  .snsLoginNaver{
    margin: 0 auto;
    width: 500px;
    height: 50px;
    border-radius: 0.8em;
    background-color:#03C75A;
    cursor:pointer;
  }

  .simbol{
    margin-top: 5px;
    width: 48px;
    height: 42px;
  }

  #naverText{
    font: white;
  }

</style>



<script>
import axios from 'axios'

export default {
  name: 'App',
  props : {
    title : {
      type : String,
      required : true,
    }
  },
  data() {
      return {
        kakaoUrl : ''
        ,loginSubmit : 'kakao'
      }
    },


  methods : {
    async kakaoLoginBtn (){
        await axios.get('/api/kakao_login')
            .then((response) => {
              console.log(response.data)
              window.location.href = response.data
            })
    },

    kakaoLogout(){

    }



  },
};

</script>
