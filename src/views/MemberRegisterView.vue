<template>
  <div>
    <div class="login-page">
      <div class="wallpaper-register"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <form
              name="form"
              @submit.prevent="handleRegister">
              <div class="card login">
                <h1>Sign Up</h1>
                <div v-if="!successful">
                  <div class="form-group">
                    <label for="username">이름</label>
                    <input
                      type="text"
                      class="form-control"
                      name="username"
                      v-model="user.username"
                      v-validate="'required|min:3|max:20'" />
                    <!-- <div
                      class="alert-danger"
                      v-if="submitted && errors.has('username')">
                      {{ errors.first("username") }}
                    </div> -->
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      v-model="user.email"
                      v-validate="'required|email|max:50'" />
                    <!-- <div
                      class="alert-danger"
                      v-if="submitted && errors.has('email')">
                      {{ errors.first("email") }}
                    </div> -->
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      v-model="user.password"
                      v-validate="'required|min:6|max:40'" />
                    <!-- <div
                      class="alert-danger"
                      v-if="submitted && errors.has('password')">
                      {{ errors.first("password") }}
                    </div> -->
                  </div>
                  <b-button
                    type="button"
                    class="btn btn-primary"
                    variant="primary">
                    Sign Up
                  </b-button>
                </div>
              </div>
            </form>
          </div>
          <!-- <div
            class="alert"
            :class="successful ? 'alert-success' : 'alert-danger'"
            v-if="message">
            {{ message }}
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import user from "../modules/registerObj";

export default {
  name: "MemberRegisterView",
  computed: {
    loggedIn() {
      return localStorage.getItem("isLogin");
    },
  },
  data() {
    return {
      user: new user("", "", ""),
      submitted: false,
      successful: false,
      message: "",
    };
  },
  mounted() {
    // 로그인 정보가 있으면 메인화면으로 보내기
    if (this.loggedIn == true) {
      this.$router.push("/");
    }
  },
  methods: {
    handleRegister() {
      this.message = "";
      this.submitted = true;

      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$store
            .dispatch("auth/register", this.user)
            .then(
              (data) => {
                this.message = data.message;
                this.successful = true;
              },
              (error) => {
                this.message = error.message;
                this.successful = false;
              }
            )
            .then(this.$router.push("/"));
        }
      });
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
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



h1 {
  margin-bottom: 1.5rem;
}
</style>
