<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="bg-grey-4 text-black"
      height-hint="98"
      style="border-top: solid 3px teal"
    >
      <q-tabs align="left">
        <q-route-tab to="/page1" label="홈" />
        <q-route-tab to="/page2" label="조직관리" />
        <q-route-tab to="/page3" label="근태관리" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Footer</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
