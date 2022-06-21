<template>
  <q-drawer show-if-above v-bind="drawerOpen" side="left" bordered>
    <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        <div class="text-weight-bold">Razvan Stoenescu</div>
        <div>@rstoenescu</div>
      </div>
    </q-img>
    <q-scroll-area q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
      <q-list padding>
        <template v-for="(item, index) in drawerMenu" :key="index">
          <q-item clickable :active="item.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section>
              {{ item.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index"  v-if="item.separator" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<style>
</style>

<script>
export default {
  name: "layout-side-bar",
  props: {
    drawerOpen: { type: Boolean },
    drawerMenu: { type: Array },
  },
};
</script>
