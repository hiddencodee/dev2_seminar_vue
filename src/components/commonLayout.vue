<template>
  <div>
    <Header />
    <Sidebar />
  </div>
</template>

<script>
import Header from "@/components/layout/headerComp.vue";
import Sidebar from "@/components/layout/sidebarComp.vue";

export default {
  name: "basicLayout",
  components: {
    Header,
    Sidebar,
  },
};
</script>
