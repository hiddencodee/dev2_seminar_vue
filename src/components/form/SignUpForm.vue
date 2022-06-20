<template>
  <q-form class="q-gutter-md">
    <q-input
      dense
      outlined
      v-model="email"
      label="e-mail"
      lazy-rules
    />
    <q-input
      dense
      type="password"
      outlined
      v-model="password"
      label="Password"
      lazy-rules
    />
    <q-input
      dense
      type="password"
      outlined
      v-model="repassword"
      label="Confirm Password"
      lazy-rules
    />
    <q-input
      dense
      outlined
      v-model="name"
      label="name"
      lazy-rules
    />
    <div>
      <q-btn @click="onClickSignUp(email, password, repassword, name)" class="text-capitalize full-width" size="md" style="width:75px" dense label="SignUp" type="button" color="primary" />
    </div>
  </q-form>
</template>

<style>
</style>

<script>
export default {
  name: 'sign-in-form',
  props: {
    onClickSignUp: { type: Function },
  },
  data() {
    return {
      email: '',
      password: '',
      repassword: '',
      name: '',
    }
  }
}
</script>