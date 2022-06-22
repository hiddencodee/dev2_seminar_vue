<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Dashboard from "@/views/DashboardView.vue";

export default {
  name: "app",
  components: {
    Dashboard,
  },
};
</script>
