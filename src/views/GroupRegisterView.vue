/* eslint-disable max-len */
<template>
  <div id="container">
    조 직 등 록
    <div id="login">
      <b-container fluid>
        <b-row class="my-1">
          <b-col sm="4">
            일시
          </b-col>
          <b-col sm="3">
            <b-form-input
              v-model="zip"
              type="text"
              placeholder="날짜선택"
              disabled />
          </b-col> ~
          <b-col sm="3">
            <b-form-input
              v-model="zip"
              type="text"
              placeholder="날짜선택"
              disabled />
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            메모
          </b-col>
          <b-col sm="8">
            <b-form-input
              v-model="daddr"
              type="text" />
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="4">
            근태종류
          </b-col>
          <b-col sm="8">
            <b-form-select
              v-model="depart"
              :options="departs" />
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
      @click="move()">
      근태신청
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
      modalShow: false,
      msg: '회 원 가 입',
      zip: '',
      addr: '',
      daddr: '',
      position: null,
      depart: null,
      departs: [
        { value: null, text: '근태종류' },
        { value: 'a', text: '연차' },
        { value: 'b', text: '휴가' },
        { value: 'c', text: '병가' },
        { value: 'd', text: '기타' },
      ],

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
      this.$router.push('/login');
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

  },
  components: {

  },
};

</script>
