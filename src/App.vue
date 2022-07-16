<template>
  <div id="app">
    <HeaderView id="headerLayout" />
    <router-view style="height:800px;" />
    <FooterView id="footerLayout" />
  </div>
</template>

<script>
import HeaderView from '@/components/layout/HeaderView.vue';
import FooterView from '@/components/layout/FooterView.vue';

export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#footerLayout {

}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
