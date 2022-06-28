<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card
          class="col-md-4 col-lg-4 col-sm-12 sol-xs-12 items-center float-left"
          horizontal>
          <q-card-section>
            <div class="text-center full-width">
              <div>
                <img
                  src="@/assets/logo.png"
                  width="200" />
              </div>
              <div class="text-weight-bolder text-center q-mb-md text-primary text-h6">
                VueDash
              </div>
              <div class="text-caption text-black">
                Sign In
              </div>
            </div>
          </q-card-section>
          <q-card-section class="col-md-8 col-lg-8 col-sm-12 sol-xs-12 float-left">
            <q-card-section class="items-center">
              <comp-sign-in-form
                :on-click-sign-in="onClickSignIn"
                :on-click-sign-up="onClickSignUp" />
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
</style>

<script>
import CompSignInForm from '@/components/form/SignInForm.vue';

export default {
  name: "PageSignin",
  components: {
    CompSignInForm,
  },
  setup() {

  },
  methods: {
    async onClickSignIn(email, password) {
      //this.$router.push({ path: '/home' });

      //await this.$store.dispatch('setEmail', email);
      //await this.$store.dispatch('setPassword', password);
      //const em = this.$store.getters['getEmail'];
      //const pw = this.$store.getters['getPassword'];

      //console.log(em);
      //console.log(pw);

      await this.$store.dispatch('login', { email, password });
      this.$router.push({ path: '/home' });
    },
    onClickSignUp() {
      this.$router.push({ path: '/signup' });
    },
  },
};
</script>
