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
              to="/"
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
              to="/headerView2"
              class="nav-link">
              <i class="bi bi-calendar-check"></i> 근태관리
            </router-link>
          </li>
        </ul>-
      </div>
    </nav>
  </header>
</template>

<script>

</script>

<style>

nav .navbar-nav a.router-link-exact-active {
  color: #42b983 !important;
}

</style>
