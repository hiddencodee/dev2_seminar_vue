<template>
  <div class="row">
    <div class="col-md-4 offset-md-5" style="padding-top: 150px">
      <div
        class="q-gutter-y-md column"
        style="max-width: 450px; border-top: solid 3px teal"
      >
        <q-input outlined v-model="email" label="이메일">
          <template v-slot:after>
            <q-btn :ripple="false" color="grey-6" label="중복확인" no-caps />
          </template>
        </q-input>

        <q-input type="password" outlined v-model="password" label="비밀번호" />

        <q-input
          type="password"
          outlined
          v-model="passwordCk"
          label="비밀번호확인"
        />

        <q-input outlined v-model="zip" label="우편번호" disable />

        <q-input outlined v-model="addr" label="주소">
          <template v-slot:after>
            <q-btn @click="addrSearch()" color="grey-6" label="주소검색" />
          </template>
        </q-input>

        <q-input outlined v-model="daddr" label="상세주소" />

        <q-select
          square
          outlined
          v-model="qntj"
          :options="options1"
          label="부서"
        />
        <q-select
          square
          outlined
          v-model="wlrdnl"
          :options="options2"
          label="직위"
          style="border-bottom: solid 3px teal; padding-bottom: 20px"
        />
      </div>

      <div class="row" style="padding-top: 30px">
        <div class="col-md-8 offset-md-5">
          <q-btn push color="white" text-color="secondary" label="이전" />
          <q-btn
            push
            color="secondary"
            label="회원가입"
            style="margin-left: 20px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      qntj: ref(null),
      wlrdnl: ref(null),
      options1: ["개발팀", "기획팀", "경영팀"],
      options2: ["매니저", "팀장", "부장"],
      email: ref(""),
      password: ref(""),
      passwordCk: ref(""),
      addr: ref(""),
      daddr: ref(""),
    };
  },
  methods: {
    addrSearch() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.extraAddress !== "") {
            this.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
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
};
</script>
