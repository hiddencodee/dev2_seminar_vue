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
            <b-button id="">
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

        <!--
        <b-row class="my-1">
          <b-col sm="4">
            주소
          </b-col>
          <b-col sm="2">
            <b-form-input
              v-model="zip"
              type="text"
              placeholder="우편번호"
              disabled />
          </b-col>
          <b-col sm="4">
            <b-form-input
              v-model="addr"
              type="text" />
          </b-col>
          <b-col sm="2">
            <b-button @click="addrSearch()">
              주소검색
            </b-button>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            상세주소
          </b-col>
          <b-col sm="8">
            <b-form-input
              v-model="daddr"
              type="text" />
          </b-col>
        </b-row>
        -->

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
    const script = document.createElement('script');    //script 변수 선언해서 <scrpit /> 얘를 만들어가지고 담는다
    script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';   //script의 src속성에 카카오에서 제공한 주소값을 넣어준다
    document.head.appendChild(script);    //head에 src 속성까지 만들어진 script소스를 append한다
  },

  methods: {

    beforeBtn() {
      this.$router.push('/');
    },

    addrSearch(){
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.extraAddress !== '') {
            this.extraAddress = '';
          }
          if (data.userSelectedType === 'R') {
            // 사용자가 도로명 주소를 선택했을 경우
            this.addr = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.addr = data.jibunAddress;
          }

          // 우편번호를 입력한다.
          this.zip = data.zonecode;
        },
      }).open();

    },

    joinSubmitBtn(){
      console.log(this.mbrId)
      const joinInfo = {mbrId : this.mbrId
        ,mbrPw : this.mbrPw
        ,mbrNm : this.mbrNm
        ,mbrDept : this.mbrDept
        ,mbrType :this.mbrType
      }
      console.log(joinInfo);
      this.$store.dispatch('joinStore/join',joinInfo)
        .then(() => {
          alert('정상적으로 가입이 완료되었습니다.')
          this.$router.push('/');
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
