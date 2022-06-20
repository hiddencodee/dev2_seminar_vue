<template>
  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
    <!-- drawer content -->
  </q-drawer>
</template>

<style>
</style>

<script>
export default {
  name: "comp-side-bar",
  data() {
    return {
      leftDrawerOpen: true,
      list: [
        {
          "label": "Menu",
          "items": [
            {
              "id": "Product",
              "label": "Dashboard",
            },
            {
              "id": "Product",
              "label": "Rider",
            },
            {
              "id": "Product",
              "label": "Analytics",
            },
          ]
        },
      ]
    }
  },
};
</script>
