<template>
  <q-layout view="lHh lpR lFf">
    <layout-header :toggle-left-drawer="toggleLeftDrawer" />
    <layout-side-bar
      v-model="drawerOpen"
      :drawer-menu="drawerMenu" />
    <q-page-container>
      <router-view />
    </q-page-container>
    <layout-footer />
  </q-layout>
</template>

<style>
</style>

<script>
import LayoutHeader from '@/components/layout/Header.vue';
import LayoutSideBar from '@/components/layout/SideBar.vue';
import LayoutFooter from '@/components/layout/Footer.vue';

export default {
  name: "PageHome",
  components: {
    LayoutHeader,
    LayoutSideBar,
    LayoutFooter,
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
