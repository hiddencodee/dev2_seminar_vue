<template>
  <div>
    <TableComp
      :column-info="columnInfo"
      :rows-info="rowsInfo"
      :to-url="toUrl" />
  </div>
</template>
<script>
import TableComp from "@/components/TableComponent.vue";
export default {
  components: {
    TableComp,
  },
  data() {
    return {
      columnInfo: [
        {
          label: "아이디",
          field: "memberId",
        },
        {
          label: "이름",
          field: "memberName",
        },
        {
          label: "등록일",
          field: "registerDate",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "MM 월 d 일 (yyyy)",
        },
        {
          label: "승인일시",
          field: "approveDate",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "MM 월 d 일 (yyyy)",
        },
        {
          label: "승인여부",
          field: "approveCheck",
        },
      ],
      rowsInfo: [
        {
          id: "1",
          memberId: "mapark",
          memberName: "박민아",
          registerDate: "2022-08-05",
          approveDate: "2022-05-04",
          approveCheck: "승인완료",
        },
        {
          id: "2",
          memberId: "jakim",
          memberName: "김지아",
          registerDate: "2022-08-05",
          approveDate: "2022-05-04",
          approveCheck: "승인거절",
        },
        
      ],
    };
  },
};
</script>
<style scoped>
    .vgt-global-search{
        visibility: hidden;
    }
</style>