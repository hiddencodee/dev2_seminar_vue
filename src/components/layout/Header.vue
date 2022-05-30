<template>
  <q-header reveal elevated style="background-color: #1f509e;">
    <q-toolbar v-if="$q.platform.is.desktop" class="q-py-sm">
      <!--<q-btn @click="left = !left" flat round dense icon="menu" class="q-mr-sm" />-->
      <img @click="$router.push('/home')" class="cursor-pointer" src="@/assets/logo.png" style="width: 3%"/>
      <q-toolbar-title>
        <span class="float-left q-mt-xs text-h6 text-weight-bold" style="font-size: 17px;">VueDash</span>
        <q-input
          class="float-left q-ml-xl"
          style="width: 650px;"
          square
          bg-color="white"
          dense outlined
          v-model="text"
          label="Search..."
        />
      </q-toolbar-title>

      <!--<q-btn flat dense icon="shopping_cart" class="text-capitalize q-mr-md text-bold" label="Cart"/>-->
      <q-btn class="q-mr-md" dense round flat icon="shopping_cart">
        <q-badge color="red" class="text-bold" floating transparent>
          4
        </q-badge>
      </q-btn>
      <q-btn flat round dense icon="settings" class="q-mr-md"/>
      <q-btn flat round dense icon="fas fa-sign-out-alt" to="/"/>
    </q-toolbar>
  </q-header>
</template>

<style>
</style>

<script>
export default {
  name: "comp-header",
};
</script>
