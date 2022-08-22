<template>
  <b-container fluid>
    <h1>Sign Up</h1>
    <b-form>
      <b-form-group
        label="Name"
        label-for="username">
        <b-form-input
          type="text"
          id="username"
          placeholder="Enter name"
          v-model="user.userName"
          v-validate="{required : true ,min:3, max:20}" />
      </b-form-group>

      <b-form-group
        label="Email"
        label-for="email">
        <b-form-input
          type="email"
          id="email"
          placeholder="Enter email address"
          v-model="user.email"
          v-validate="{required : true , max:50}" />
      </b-form-group>
      <b-form-group
        label="Password"
        label-for="password">
        <b-form-input
          type="password"
          id="password"
          placeholder="Enter password"
        
          v-model="user.password"
          v-validate="{required : true , min: 6 ,max:40}" />
      </b-form-group>
      <b-button
        variant="primary"
        @click="handleRegister">
        Sign Up
      </b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: "MemberRegisterView",
  data() {
    return {
      user: {},
      submitted: false,
      successful: false,
      message: "",
    };
  },
  methods: {
    handleRegister() {
      this.$store.dispatch("loginModule/signUp", this.user)
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1.5rem;
}
</style>
