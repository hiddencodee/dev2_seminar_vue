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
          label: "프로젝트명",
          field: "projectName",
        },
        {
          label: "작업자",
          field: "workerName",
        },
        {
          label: "시작일",
          field: "startDate",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "MM 월 d 일 (yy)",
        },
        {
          label: "완료여부",
          field: "completeCheck",
        },
        {
          label: "만료일",
          field: "completedDate",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "MMM do yy",
        },
      ],
      rowsInfo: [
        {
          id: "1",
          projectName: "대전문화재단",
          workerName: "박민아",
          startDate: "2021-12-15",
          completeCheck: "진행중",
          completedDate: "-",
        },
        {
          id: "2",
          projectName: "DID",
          workerName: "이현수",
          startDate: "2020-06-07",
          completeCheck: "진행중",
          completedDate: "-",
        },
      ],
      toUrl: "/user/projects/register"
    };
  },
};
</script>
