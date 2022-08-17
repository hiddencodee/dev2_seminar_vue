<template>

      <b-container fluid>
          <h1>Sign Up</h1>
          
            <b-form-group label="이름"
              label-for="username">
              <b-form-input
                type="text"
                id="username"
                placeholder="Enter name"
                v-model="user.username"
                v-validate="'required|min:3|max:20'" />
            </b-form-group>

            <b-form-group label="Email"
              label-for="email">
              <b-form-input
                type="email"
                id="email"
                placeholder="Enter email address"
                v-model="user.email"
                v-validate="'required|email|max:50'" />
            </b-form-group>

            <b-form-group label="Password"
              label-for="password">
              <b-form-input
                type="password"
                id="password"
                placeholder="Enter password"
                v-model="user.password"
                v-validate="'required|min:6|max:40'" />
            </b-form-group>
            <b-button
              variant="primary"
              @click="handleRegister">
              Sign Up
            </b-button>
      </b-container>

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
  methods: {
    handleRegister() {
      
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
