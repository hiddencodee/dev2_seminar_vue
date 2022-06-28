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
                Sign Up
              </div>
            </div>
          </q-card-section>
          <q-card-section class="col-md-8 col-lg-8 col-sm-12 sol-xs-12 float-left">
            <q-card-section class="items-center">
              <comp-sign-up-form :on-click-sign-up="onClickSignUp" />
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
import CompSignUpForm from '@/components/form/SignUpForm.vue';

export default {
  name: "PageSignup",
  components: {
    CompSignUpForm,
  },
  methods: {
    onClickSignUp(email, password, repassword, name) {
      console.log(email);
      console.log(password);
      console.log(repassword);
      console.log(name);
    }
  },
};
</script>
