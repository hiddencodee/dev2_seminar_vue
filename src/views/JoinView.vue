/* eslint-disable max-len */
<template>
  <div id="container">
    회 원 가 입
    <div id="login">
      <b-container fluid>
        <b-row class="my-1">
          <b-col sm="4">
            이메일주소
          </b-col>
          <b-col sm="6">
            <b-form-input
              v-model="mbrId"
              type="email" />
          </b-col>
          <b-col sm="2">
            <b-button @click="idDuplication()">
              중복확인
            </b-button>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            비밀번호
          </b-col>
          <b-col sm="8">
            <b-form-input
              v-model="mbrPw"
              type="password" />
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            비밀번호확인
          </b-col>
          <b-col sm="8">
            <b-form-input
              type="password" />
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            이름
          </b-col>
          <b-col sm="8">
            <b-form-input
              v-model="mbrNm"
              type="text" />
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="4">
            부서
          </b-col>
          <b-col sm="8">
            <b-form-select
              v-model="mbrDept"
              :options="this.$store.state.joinStore.departs" />
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            직위
          </b-col>
          <b-col sm="8">
            <b-form-select
              v-model="mbrType"
              :options="this.$store.state.joinStore.types" />
          </b-col>
        </b-row>
      </b-container>
    </div>

    <b-button
      block
      variant="success"
      id="beforeBtn"
      @click="beforeBtn()">
      이전
    </b-button>
    <b-button
      block
      variant="success"
      id="joinBtn"
      @click="joinSubmitBtn()">
      회원가입
    </b-button>
  </div>
</template>

<style scoped>
#container{
  padding: 100px;
  margin: 0 auto;
}
#login{
  width: 900px;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: #dee2e6;
  border-bottom-color: #dee2e6;
}
#joinBtn{
  width: 200px;
  margin: 0 auto;
  background-color:lightseagreen;
  border-color :lightseagreen;
  display: inline;
}
#beforeBtn{
  width: 200px;
  margin: 0 auto;
  background-color:#dee2e6;
  border-color :#dee2e6;
  color: lightseagreen;
  display: inline;
}
</style>

<script>

export default {

  data() {
    return {
      modalShow: false,
      mbrId: '',
      mbrPw: '',
      mbrNm: '',
      zip: '',
      addr: '',
      daddr: '',
      mbrDept: null,
      mbrType: null,
    };
  },

  //created, mounted
  mounted(){

  },

  methods: {

    beforeBtn() {
      this.$router.push('/');
    },

    joinSubmitBtn(){

      if( this.$store.state.joinStore.useYN == 'false'){
        alert('이메일 중복확인을 해주세요.');
        return false;
      }

      if( this.mbrNm == ''){
        alert('이름을 입력해주세요');
        return false;
      }

      const joinInfo = {mbrId : this.mbrId
        ,mbrPw : this.mbrPw
        ,mbrNm : this.mbrNm
        ,mbrDept : this.mbrDept
        ,mbrType :this.mbrType
      }
      this.$store.dispatch('joinStore/join',joinInfo)
        .then(() => {
          alert('정상적으로 가입이 완료되었습니다.')
          this.$router.push('/');
        })
        .catch(() => {
          console.log("실패");
        })
    },

    idDuplication(){
      this.$store.dispatch('joinStore/idDuplication',this.mbrId)
        .then(response => {
            if(response == "useY"){
              alert('사용가능한 이메일 입니다.')
              this.$store.dispatch('joinStore/useChangeY')
            }else{
              alert('이미 사용중인 이메일입니다.')
              this.mbrId = ""
              this.$store.dispatch('joinStore/useChangeN')
            }
        })
        .catch(() => {
          console.log("실패");
        })
    }

  },
  components: {

  },
};

</script>
