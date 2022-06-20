<template>
  <q-header elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
      <q-toolbar-title>
        VueDash
      </q-toolbar-title>
    </q-toolbar>
    <!--
    <q-tabs align="left">
      <q-route-tab to="/page1" label="Page One" />
      <q-route-tab to="/page2" label="Page Two" />
      <q-route-tab to="/page3" label="Page Three" />
    </q-tabs>
    -->
  </q-header>
</template>

<style>
</style>

<script>
export default {
  name: "comp-header",
  props: {
    toggleLeftDrawer: { type: Function },
  },
};
</script>
