<template>
  <q-drawer show-if-above v-bind="leftDrawerOpen" side="left" bordered>
    <!-- drawer content -->
  </q-drawer>
</template>

<style>
</style>

<script>
export default {
  name: "comp-side-bar",
  props: {
    leftDrawerOpen: { type: Boolean },
  },
};
</script>
