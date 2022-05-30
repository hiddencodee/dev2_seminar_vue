<template>
  <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12" style="border-right: 1px solid lightgrey">
    <q-card class="q-mr-sm no-shadow">
      <!--<q-card-section class="text-subtitle1 text-grey-8">-->
      <!--Filter By-->
      <!--</q-card-section>-->
      <transition-group
        appear
        enter-active-class="animated fadeInLeft"
      >
        <q-list v-for="item in list" :key="item.label">
          <q-item-label class="text-weight-bolder text-grey-9 q-pt-md q-pb-sm" header>{{item.label}}</q-item-label>
          <q-item class="q-pa-none" v-for="it in item.items" :key="it.id" tag="label" v-ripple dense>
            <q-item-section side class="q-px-md text-caption">
              {{it.label}}
            </q-item-section>
          </q-item>
          <q-item class="q-py-none text-weight-bold text-indigo text-caption cursor-pointer" style="min-height: 10px">
          </q-item>
        </q-list>
      </transition-group>
    </q-card>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "comp-side-bar",
  data() {
    return {
      list: [
        {
          "label": "Menu",
          "items": [
            {
              "id": "Product",
              "label": "Dashboard",
            },
            {
              "id": "Product",
              "label": "Rider",
            },
            {
              "id": "Product",
              "label": "Analytics",
            },
          ]
        },
      ]
    }
  },
};
</script>
