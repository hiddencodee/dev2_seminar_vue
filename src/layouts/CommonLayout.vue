<template>
  <div>
    <nav class="header bg-warning">
      <div class="nav-right">
        <p>{{ getName }}</p>
        <button @click="onChangeUserName">testButton</button>
        <!-- <input type="hidden" value="{{content.email}}" /> -->
        <b-button
          pill
          variant="outline-danger"
          class="signout-btn"
          @click="signoutAction"
          >Sign out</b-button
        >
        <!-- <router-view @authenticated="setAuthenticated" /> -->
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
  data() {
    return {
      authenticated: false,
      content: "",
    };
  },
  computed: {
    getUserName() {
      return this.$store.getters.getName;
    },
  },

  methods: {
    onChangeUserName() {
      this.$store.dispatch("callMutation", { newUserName: "홍명석!!" });
    },

    signoutAction() {
      // axios 로 처리 로그인화면으로 이동시켜
      if (confirm("로그아웃 하시겠습니까?")) {
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
  /* background: url(@/assets/images/backgroudImg2.png) no-repeat; */
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
  right: 0;
  margin-top: 18px;
  margin-right: 18px;
}
.nav-right p {
  display: inline;
  margin-right: 10px;
}
</style>
