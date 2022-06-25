<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="hello">
      <p>
        인사관리<br>
        메인홈화면<br>
        <b-button block variant="success" id="workBtn" @click="addWork()" >출근하기 (지각카운트용)</b-button>
        지각횟수 : {{this.$store.state.tardy}} <br>
      </p>
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
</style>

<script>

export default {
  methods: {
    addWork() {
      this.$store.commit('addTardy');
    },
  },
};
</script>
