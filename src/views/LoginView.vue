<template>
  <div>
    <div class="login-page">
      <transition name="false">
        <div v-if="!registerActive" class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div
              v-if="!registerActive"
              class="card login"
              v-bind:class="{
                error: emptyFields,
              }"
            >
              <h1>Sign In</h1>
              <form class="form-group" @submit="loginAction()">
                <input
                  v-model="emailLogin"
                  type="email"
                  class="form-control"
                  placeholder="Enter email address"
                  required
                />
                <input
                  v-model="passwordLogin"
                  type="password"
                  class="form-control"
                  placeholder="Enter password"
                  required
                />
                <b-button
                  type="submit"
                  class="btn btn-primary"
                  variant="primary"
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
                  <a
                    href="#"
                    @click="
                      (registerActive = !registerActive), (emptyFields = false)
                    "
                    >Sign up here</a
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registerActive: false,
      emailLogin: "",
      passwordLogin: "",
      emailReg: "",
      passwordReg: "",
      emptyFields: false,
    };
  },
  method: {
    loginAction() {
      if (this.emailLogin == "" || this.passwordLogin === "") {
        this.emptyFields = true;
      } else {
        alert("You are successfully logged in");
      }
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
