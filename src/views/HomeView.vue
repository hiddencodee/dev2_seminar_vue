<template>
  <div class="home">
    <div class="dash1">
      <div class="mt-5">
        <b-card-group
          deck
          class="mb-5">
          <b-card>
            <b-card-title> <i class="bi bi-moon"></i> 잔여연차</b-card-title>
            <b-card-text>
              {{ leaveDay }} 회
            </b-card-text>
            <b-card-text class="small text-muted">
              기본은 13회 입니다.
            </b-card-text>
          </b-card>

          <b-card>
            <b-card-title> <i class="bi bi-check2-square"></i> 지각횟수</b-card-title>
            <b-card-text>
              {{ this.$store.state.testStore.tardy }} 회
            </b-card-text>
          </b-card>

          <b-card>
            <b-card-title> <i class="bi bi-emoji-laughing"></i> 오늘의 출근인원</b-card-title>
            <b-card-text>
              15명
            </b-card-text>
          </b-card>

          <b-card>
            <b-card-title> <i class="bi bi-pin-map"></i> 결재신청</b-card-title>
            <b-card-text>
              0건 0건
            </b-card-text>
          </b-card>

          <b-card>
            <b-card-title> <i class="bi bi-pin-map-fill"></i> 결재대기</b-card-title>
            <b-card-text>
              0건
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </div>

    <div class="dash1">
      <div class="mt-5">
        <b-card-group
          deck
          class="mb-5">
          <b-card>
            <b-card-title> 2022년 6월 30일 </b-card-title>
            <b-card-text>
              [연차] 김지아
            </b-card-text>
          </b-card>

          <b-card>
            <b-card-text>
              <b-button
                block
                variant="success"
                id="workBtn"
                @click="addWork()">
                출근하기 (지각카운트용)
              </b-button>
              <b-button
                block
                variant="primary"
                id="byBtn">
                퇴근하기
              </b-button>
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<style scoped>
#login{
  width: 100px;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: #dee2e6;
  border-bottom-color: #dee2e6;
}
.dash1{
  margin-left: 150px;
  margin-right: 150px;
}
</style>

<script>
export default {
  data() {
      return {
        sessionId : ''
        ,leaveDay : ''
      }
  },
  mounted(){
    this.sessionId = this.$store.state.loginStore.sessionId;
    const sessionInfo = this.sessionId


    this.$store.dispatch('loginStore/keepLogin',sessionInfo)
      .then(() => {
        if(this.$store.state.loginStore.sessionId != ''){
          console.log("로그인유지");
        }else{
          console.log("로그인유지실패");
        }
      })
      .catch(() => {
        console.log("로그인유지로직오류");
      })


    this.$store.dispatch('loginStore/main',sessionInfo)
      .then(response => {
        this.leaveDay = response.data.LEAVE_DAY
      })
      .catch(() => {
        console.log("/main 실패")
      })
  },
  methods: {
    addWork() {
      this.$store.dispatch('testStore/addTardy');
    },
  },
};
</script>
