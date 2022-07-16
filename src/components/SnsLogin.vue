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

    <input
      type="text"
      :value="title"
      @input="titleUpdate" />
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

export default {
  name: 'App',
  props : {
    title : {
      type : String,
      required : true,
    }
  },


  methods : {
    titleUpdate(e) {
      this.$emit('titleFromChild', e.target.value)
    },

    kakaoLoginBtn(){
      console.log('카카오로그인클릭');

      window.Kakao.init('a8e4192de4262f4ae51ee05cf9378bba');


      if (window.Kakao.Auth.getAccessToken()) {
        window.Kakao.API.request({
          url: '/v1/user/unlink',
          success: function (response) {
            console.log(response)
          },
          fail: function (error) {
            console.log(error)
          },
        })
        window.Kakao.Auth.setAccessToken(undefined)
      }

      window.Kakao.Auth.login({
        success: function () {
          window.Kakao.API.request({
            url: '/v2/user/me',
            data: {
              property_keys: ["kakao_account.email"]
            },
            success: async function (response) {
              console.log(response);
            },
            fail: function (error) {
              console.log(error)
            },
          })
        },
        fail: function (error) {
          console.log(error)
        },
      })

    },
  },
};

</script>
