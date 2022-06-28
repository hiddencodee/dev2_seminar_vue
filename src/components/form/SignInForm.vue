<template>
  <q-form class="q-gutter-md">
    <q-input
      dense
      outlined
      v-model="email"
      label="e-mail"
      lazy-rules />
    <q-input
      dense
      type="password"
      outlined
      v-model="password"
      label="Password"
      lazy-rules />
    <div>
      <q-btn
        @click="onClickSignIn(email, password)"
        class="text-capitalize"
        size="md"
        style="width:75px"
        dense
        label="Login"
        type="button"
        color="primary" />
      <q-btn
        @click="onClickSignUp()"
        class="float-right text-blue-9 text-capitalize"
        size="md"
        style="width:75px;border: 1px solid #36669e;"
        dense
        label="Sign Up"
        type="button" />
    </div>
  </q-form>
</template>

<style>
</style>

<script>
export default {
  name: 'SignInForm',
  props: {
    onClickSignIn: { type: Function },
    onClickSignUp: { type: Function },
  },
  data() {
    return {
      email: '',
      password: '',
    }
  }
}
</script>