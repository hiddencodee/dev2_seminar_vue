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
          v-validate="'required|name'"
          name="name" />
          <span class="warningText">{{ errors.first('name') }}</span>
      </b-form-group>

      <b-form-group
        label="Email"
        label-for="email">
        <b-form-input
          type="email"
          id="email"
          placeholder="Enter email address"
          v-model="user.email"
          v-validate="'required|email'"
          name="email" />
        <span class="warningText">{{ errors.first('email') }}</span>
      </b-form-group>
      <b-form-group
        label="Password"
        label-for="password">
        <b-form-input
          type="password"
          id="password"
          placeholder="Enter password"
          v-model="user.password"
          v-validate="'required|pw'"
          name="pw" />
          <span class="warningText">{{ errors.first('pw') }}</span>
      </b-form-group>
      <b-button
        variant="primary"
        @click.prevent="handleRegister">
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
   async handleRegister() {
      const validForm = await this.$validator.validateAll();
      if(!validForm) return alert('내용을 한번 더 확인해주세요')
      else{
        this.$store.dispatch("loginModule/signUp", this.user)

      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1.5rem;
}
.warningText {
  color: crimson;
}
</style>
