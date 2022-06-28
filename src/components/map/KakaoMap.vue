<template>
  <div id="map"></div>
</template>

<style>
</style>

<script>
/* global kakao */
export default {
  data() {
    return {
      map: null,
      markers: [],
      latitude: 33.450701,
      longitude: 126.570667,
    }
  },
  created() {
    if (window.kakao && window.kakao.maps) {
      this.initialize();
    } else {
      const script = document.createElement("script");
      script.onload = () => kakao.maps.load(this.initialize);
      script.src = process.env.VUE_APP_KAKAO_MAP_URL;
      document.head.appendChild(script);
    }
  },
  methods: {
    initialize() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(this.latitude, this.longitude),
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);
    },
  }
}
</script>
