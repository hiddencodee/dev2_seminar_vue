/* eslint-disable max-len */
<template>
  <div id="container">
    조 직 등 록
    <form @submit.prevent="submitForm">
      <div id="login">
        <b-container fluid>
          <b-row class="my-1">
            <b-col sm="4">
              일시
            </b-col>
            <b-col sm="3">
              <b-form-input
                v-model="stDate"
                type="date"
                placeholder="날짜선택" />
            </b-col> ~
            <b-col sm="3">
              <b-form-input
                v-model="enDate"
                type="date"
                placeholder="날짜선택" />
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="4">
              메모
            </b-col>
            <b-col sm="8">
              <b-form-input
                v-model="memo"
                type="text" />
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="4">
              근태종류
            </b-col>
            <b-col sm="8">
              <b-form-select
                v-model="rmsxo"
                :options="rmsxos" />
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
        type="submit"
        id="joinBtn">
        근태신청 axios
      </b-button>
      <b-button
        block
        @click="submitBt()"
        variant="danger">
        근태신청 router
      </b-button>
    </form>
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
import axios from 'axios'

export default {

  data() {
    return {
      stDate: '',
      enDate: '',
      rmsxos: [
        { value: null, text: '근태종류 선택' },
        { value: 'a연차', text: '연차' },
        { value: 'b휴가', text: '휴가' },
        { value: 'c병가', text: '병가' },
        { value: 'd기타', text: '기타' },
      ],
      rmsxo: null,

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
      this.$router.push('/groupList');
    },

    submitForm: function() {
      axios.post('http://localhost:8080/groupRegister/save', {
        memo : this.memo
        ,sort : this.rmsxo
      })
      .then(function (response) {
        console.log("성공" + response);
      })
      .catch(function (error) {
        console.log("당연실패 :::: " + error);
      });
    },

    submitBt(){
       this.$router.push({name: 'param', param: {memo: this.memo, sort: this.rmsxo}})
    }

  },
  components: {

  },
};

</script>
