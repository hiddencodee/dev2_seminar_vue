<template>
  <b-container fluid>
    <b-form @submit.prevent="loginAction()">
      <h1>Sign In</h1>
      <b-form-group
        label="Email"
        label-for="loginEmail">
        <b-form-input
          type="text"
          id="loginEmail"
          placeholder="Enter email address"
          v-model="loginEmail" />
      </b-form-group>
      <b-form-group
        label="Password"
        label-for="loginPw">
        <b-form-input
          type="password"
          id="loginPw"
          placeholder="Enter password"
          v-model="loginPw" />
      </b-form-group>
      <b-button
                
        variant="primary"
        @click="loginAction">
        Sign in
      </b-button>
      <p>
        Don't have an account?
        <router-link to="/signup">
          Sign up here
        </router-link>
      </p>
    </b-form>
  </b-container>
</template>
<script>
export default {
  name: "LoginView",
  data() {
    return {
      loginEmail: null,
      loginPw: null,
    };
  },
  computed: {
    loginStatus() {
      return this.$store.state.loginStatus;
    },
  },
  methods: {
    loginAction() {
      this.$store.dispatch("loginModule/signIn", {
          loginEmail: this.loginEmail,
          loginPw: this.loginPw,
        });
    },
  },
};
</script>
<style scoped>
p {
  line-height: 1rem;
  padding-top: 20px;
}

.card {
  padding: 20px;
}

.form-group input {
  margin-bottom: 20px;
}

.login-page {
  align-items: center;
  display: flex;
  height: 100vh;
}
.wallpaper-login {
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.wallpaper-register {
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
}

h1 {
  margin-bottom: 1.5rem;
}
</style>
