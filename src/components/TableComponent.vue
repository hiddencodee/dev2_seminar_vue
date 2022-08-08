<template>
  <div>
    <vue-good-table
      theme="polar-bear"
      :columns="columnInfo"
      :rows="rowsInfo"
      :line-numbers="true"
      :select-options="{
        enabled: true,
      }">
      <div slot="selected-row-actions">
        <button @click="deleteAction">
          삭제
        </button>
      </div>
      <div slot="table-actions">
        <router-link :to="toUrl">
          등록
        </router-link>
      </div>
    </vue-good-table>
  </div>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  name: "MyComponent",
  props: {
    columnInfo: {
      type: Array,
      default: new Array
    },
    rowsInfo: {
      type: Array,
      default: new Array
    },
    toUrl: {type : String,
    default: new Array}
  },
  methods: {
    deleteAction() {
      alert("삭제하시겠습니까?");
    },
  },
 
  components: {
    VueGoodTable,
  },
};
</script>
