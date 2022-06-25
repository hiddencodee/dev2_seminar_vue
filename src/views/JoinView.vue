<template>
  <div id="container"> {{msg}}
    <div id="login">

      <b-container fluid>
        <b-row class="my-1">
          <b-col sm="4">이메일주소</b-col>
          <b-col sm="6">
          <b-form-input id="" type="email"></b-form-input>
          </b-col>
          <b-col sm="2">
          <b-button id="" >중복확인</b-button>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">비밀번호</b-col>
          <b-col sm="8">
          <b-form-input id="" type="password"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">비밀번호확인</b-col>
          <b-col sm="8">
          <b-form-input id="" type="password"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">주소</b-col>
          <b-col sm="2">
          <b-form-input v-model="zip" type="text" placeholder="우편번호" disabled></b-form-input>
          </b-col>
          <b-col sm="4">
          <b-form-input v-model="addr" type="text"></b-form-input>
          </b-col>
          <b-col sm="2">
          <b-button @click="addrSearch()" >주소검색</b-button>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">상세주소</b-col>
          <b-col sm="8">
          <b-form-input v-model="daddr" type="text"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">부서</b-col>
          <b-col sm="8">
          <b-form-select v-model="qntj" :options="qntjs"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">직위</b-col>
          <b-col sm="8">
          <b-form-select v-model="wlrdnl" :options="wlrdnls"></b-form-select>
          </b-col>
        </b-row>
      </b-container>

    </div>

    <b-button block variant="success" id="beforeBtn" @click="beforeBtn()" >이전</b-button>
    <b-button block variant="success" id="joinBtn" @click="move()" >회원가입</b-button>

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
}
#beforeBtn{
  width: 200px;
  margin: 0 auto;
  background-color:#dee2e6;
  border-color :#dee2e6;
  color: lightseagreen;
}
</style>

<script>
export default {
  data() {
    return {
      msg: '회 원 가 입',
      zip: '',
      addr: '',
      qntj: null,
      qntjs: [
        { value: null, text: '부서선택' },
        { value: 'a', text: '개발팀' },
        { value: 'b', text: '디자인팀' },
        { value: { C: '3PO' }, text: '기획팀' },
        { value: 'd', text: '회계팀' },
      ],
      wlrdnl: null,
      wlrdnls: [
        { value: null, text: '직위선택' },
        { value: 'a', text: '매니저' },
        { value: 'b', text: '팀장' },
      ],
    };
  },
  methods: {
    addrSearch() {
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
    beforeBtn() {
      this.$router.push('/login');
    },
  },
};

</script>
