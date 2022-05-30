<template>
  <q-layout view="lHh LpR lFf" style="font-family: Lato;">
    <comp-header />
    <q-page-container>
      <div class="row bg-white q-mt-sm">
        <comp-side-bar />
        <router-view />
      </div>
    </q-page-container>
    <comp-footer />
  </q-layout>
</template>

<style>
</style>

<script>
import CompHeader from '@/components/layout/Header.vue';
import CompSideBar from '@/components/layout/SideBar.vue';
import CompFooter from '@/components/layout/Footer.vue';

export default {
  name: "page-home",
  components: {
    CompHeader,
    CompSideBar,
    CompFooter,
  },
};
</script>
