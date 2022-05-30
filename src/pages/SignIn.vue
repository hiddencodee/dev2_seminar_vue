<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card class="col-md-4 col-lg-4 col-sm-12 sol-xs-12 items-center float-left" horizontal>
          <q-card-section>
            <div class="text-center full-width">
              <div><img src="@/assets/logo.png" width="200"/></div>
              <div class="text-weight-bolder text-center q-mb-md text-primary text-h6">VueDash</div>
              <div class="text-caption text-black">Description</div>
            </div>
          </q-card-section>
           <q-card-section class="col-md-8 col-lg-8 col-sm-12 sol-xs-12 float-left">
             <q-card-section class="items-center">
                <q-form class="q-gutter-md">

                  <q-input
                    dense
                    outlined
                    v-model="username"
                    label="Username"
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

                  <div>
                    <q-btn class="text-capitalize" size="md" style="width:75px" dense label="Login" to="/home" type="button" color="primary"/>
                    <q-btn class="float-right text-blue-9 text-capitalize" size="md" style="width:75px;border: 1px solid #36669e;" dense label="Sign Up" type="button"/>
                  </div>
                </q-form>
             </q-card-section>
             <q-card-section class="col-md-8 col-lg-8 col-sm-12 sol-xs-12 float-left">
               <div class="q-gutter-md">
                  <q-btn style="background: #FEE500" text-color="black" label="Kakao Login" icon="img:kakao.svg" />
                  <q-btn class="float-right" style="background: #03C75A" text-color="white" label="Naver Login" icon="img:naver.svg" />
                </div>
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
export default {
  name: "page-signin"
};
</script>
