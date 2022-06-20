<template>
  <q-layout view="lHh lpR lFf">
    <comp-header :toggleLeftDrawer="toggleLeftDrawer" />
    <comp-side-bar v-model="drawerOpen" :drawerMenu="drawerMenu" />
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
  data() {
    return {
      drawerOpen: false,
      drawerMenu: [
        {
          icon: 'inbox',
          label: 'Inbox',
          separator: true
        },
        {
          icon: 'send',
          label: 'Outbox',
          separator: false
        },
        {
          icon: 'delete',
          label: 'Trash',
          separator: false
        },
        {
          icon: 'error',
          label: 'Spam',
          separator: true
        },
        {
          icon: 'settings',
          label: 'Settings',
          separator: false
        },
        {
          icon: 'feedback',
          label: 'Send Feedback',
          separator: false
        },
        {
          icon: 'help',
          iconColor: 'primary',
          label: 'Help',
          separator: false
        },
      ],
    }
  },
  methods: {
    toggleLeftDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
  },
};
</script>
