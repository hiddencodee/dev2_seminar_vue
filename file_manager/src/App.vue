<template>
  <div id="app">
    <main-side-bar></main-side-bar>
    <div id="header">
      <main-header/>
    </div>
    <router-view></router-view>
    <div id="footer">
      <main-footer/>
    </div>
  </div>
</template>

<script>
  import MainFooter from './components/MainFooter.vue'
  import MainHeader from './components/MainHeader.vue'
  import MainSideBar from './components/MainSideBar.vue'

  export default {
    components: { MainHeader, MainFooter, MainSideBar },
    name: 'App',
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
