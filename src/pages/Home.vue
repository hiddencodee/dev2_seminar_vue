<template>
  <q-layout view="lHh lpR lFf">
    <comp-header />
    <comp-side-bar />
    <q-page-container>
      <router-view />
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
