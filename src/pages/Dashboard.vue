<template>
  <q-page>
    <kakao-map style="width:500px; height:300px;" />
  </q-page>
</template>

<style>
</style>

<script>
import KakaoMap from '@/components/map/KakaoMap.vue';

export default {
  name: "page-dashboard",
  components: {
    KakaoMap,
  }
};
</script>
