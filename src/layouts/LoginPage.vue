<template>
  <div id="q-app">
    <q-layout view="lHh Lpr fff">
      <q-page
        class="window-height window-width row justify-center items-center"
        style="background: white"
      >
        <div class="column q-pa-lg">
          <div class="row">
            <q-card
              square
              class="shadow-24"
              style="width: 400px; height: 650px"
            >
              <q-card-section>
                <h4 class="text-h5 text-secondary q-my-md">
                  인사관리시스템 로그인
                </h4>
              </q-card-section>
              <q-card-section>
                <q-form class="q-px-sm q-pt-xl">
                  <q-input
                    square
                    clearable
                    v-model="email"
                    type="email"
                    label="이메일을 입력하세요"
                  >
                    <template v-slot:prepend>
                      <q-icon name="email" />
                    </template>
                  </q-input>

                  <q-input
                    square
                    clearable
                    v-model="password"
                    :type="password"
                    label="패스워드를 입력하세요"
                  >
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        :name="visibilityIcon"
                        @click="switchVisibility"
                        class="cursor-pointer"
                      />
                    </template>
                  </q-input>
                </q-form>
              </q-card-section>

              <q-card-section
                v-if="!register"
                class="text-right q-pa-sm"
                style="padding-right: 10px"
              >
                <a href="/join" style="padding-right: 20px">회원가입</a>
              </q-card-section>

              <q-card-actions class="q-px-lg">
                <q-btn
                  unelevated
                  size="lg"
                  color="secondary"
                  @click="submit"
                  class="full-width text-white"
                  label="로그인"
                />
              </q-card-actions>
              <q-card-actions class="q-px-lg">
                <q-img
                  src="../assets/kakao_login_medium_wide.png"
                  style="max-width: 350px; height: 51.44px"
                />
              </q-card-actions>
              <q-card-actions class="q-px-lg">
                <q-img
                  src="../assets/btnG_완성형.png"
                  style="width: 350px; height: 51.44px"
                />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      email: ref(""),
      password: ref(""),
    };
  },
  data() {},
  methods: {},
};
</script>
