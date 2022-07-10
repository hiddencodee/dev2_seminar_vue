<template>
  <div>
    <div class="login-page">
      <transition name="false">
        <div class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div
              class="card login"
              v-bind:class="{
                error: emptyFields,
              }"
            >
              <h1>Sign In</h1>

              <input
                v-model="loginEmail"
                name="loginEmail"
                class="form-control"
                placeholder="Enter email address"
                required
              />
              <input
                v-model="loginPassword"
                name="loginPassword"
                type="password"
                class="form-control"
                placeholder="Enter password"
                required
              />
              <b-button
                type="button"
                class="btn btn-primary"
                variant="primary"
                @click="loginAction()"
                >Sign in</b-button
              >
              <!-- <input
                  v-model="dd"
                  type="submit"
                  class="btn btn-primary"
                  @click="loginAction"
                /> -->
              <p>
                Don't have an account?
                <router-link to="/register">Sign up here</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loginView",
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
      emptyFields: false,
      mockAccount: {
        loginEmail: "minah",
        loginPassword: "minah",
        loginName: "박민아",
      },
    };
  },

  methods: {
    loginAction() {
      if (this.loginEmail != "" && this.loginPassword != "") {
        if (
          this.loginEmail == this.mockAccount.loginEmail &&
          this.loginPassword == this.mockAccount.loginPassword
        ) {
          this.$emit("authenticated", true);

          location.href = "/";
        } else {
          alert("이메일 주소와 비밀번호가 일치하지 않습니다.");
        }
      } else {
        alert("이메일 주소와 비밀번호를 입력해주세요.");
      }
      /*
      if (this.emailLogin == "" || this.passwordLogin === "") {
        this.emptyFields = true;
      } else {
        alert("You are successfully logged in");
      }
      */
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
