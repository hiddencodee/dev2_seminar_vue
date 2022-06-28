<template>
  <div>
    <nav class="header bg-warning">
      <div class="nav-right">
        <p>박민아 님,</p>
        <b-button
          pill
          variant="outline-danger"
          class="signout-btn"
          @click="signoutAction"
          >Sign out</b-button
        >
      </div>
    </nav>
    <div class="content-wrap">
      <div class="siderbar bg-light">
        <ul>
          <li><router-link to="/projects">프로젝트 목록</router-link></li>
          <li><router-link to="/issues">이슈 진행 목록</router-link></li>
          <li><router-link to="/members">개발 2팀 승인</router-link></li>
        </ul>
      </div>
      <div class="content"><router-view /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "basicLayout",
  methods: {
    signoutAction() {
      // axios 로 처리 로그인화면으로 이동시켜
      if (confirm("do you want to sign out?")) {
        location.href = "/login";
      }
    },
  },
};
</script>
<style scoped>
.header {
  height: 80px;
}
.siderbar {
  width: 200px;
  height: 1000px;
}

.content-wrap {
  background: url(@/assets/backgroudImg2.png) no-repeat;
  position: relative;
}
.content {
  position: absolute;
  top: 0;
  margin-left: 200px;
  padding: 15px;
}
.nav-right {
  position: absolute;
  margin-top: 18px;
  margin-right: 18px;
  display: inline;
}
</style>
