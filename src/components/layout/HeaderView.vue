<template>
  <header>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css" />
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              to="/main"
              class="nav-link">
              <i class="bi bi-grid"></i> 홈
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/groupList"
              class="nav-link">
              <i class="bi bi-person-fill"></i> 조직관리
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/attendanceList"
              class="nav-link">
              <i class="bi bi-calendar-check"></i> 근태관리
            </router-link>
          </li>
        </ul> <button
          style="border-style: none;"
          @click="onClickLogout()">
          로그아웃
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

  methods: {
    onClickLogout(){
      console.log('로그아웃ㅋㅋ')
      this.$store.dispatch('loginStore/logout')
      .then(() => {
          alert('정상적으로 로그아웃 되었습니다.')
          this.$router.push('/');
        })
        .catch(() => {
          console.log("실패");
        })
    }
  }

}
</script>

<style>

nav .navbar-nav a.router-link-exact-active {
  color: #42b983 !important;
}

</style>
