<template>
  <b-table
    :items="items"
    :fields="fields"
    responsive="sm"
    ref="selectableTable"
    selectable
    @row-selected="onRowSelected">
    <!-- Example scoped slot for select state illustrative purposes -->
    <template #cell(selected)="{ rowSelected }">
      <template v-if="rowSelected">
        <span aria-hidden="true">&check;</span>
        <span class="sr-only">Selected</span>
      </template>
      <template v-else>
        <span aria-hidden="true">&nbsp;</span>
        <span class="sr-only">Not selected</span>
      </template>
    </template>
  </b-table>
</template>

<style scoped>

</style>

<script>

export default {
  props : {
    fields : {
      type : String,
      required : true,
    },
    items : {
      type : String,
      required : true,
    },
    selectMode : {
      type : String,
      required : true,
    }
  },
  data() {
      return {
        selected: []
      }
    },
    methods: {
      onRowSelected(items) {
        this.selected = items
      },
    },
}

</script>
