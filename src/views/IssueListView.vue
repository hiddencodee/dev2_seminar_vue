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
          label: "이슈종류",
          field: "issueType",
        },
        {
          label: "이슈",
          field: "issueName",
        },
        {
          label: "마감일",
          field: "deadline",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "MM 월 d 일 (yyyy)",
        },
        {
          label: "댓글보기",
          field: "completeCheck",
        },
      ],
      rowsInfo: [
        {
          id: "1",
          issueType: "작업",
          issueName: "[관리자] 예매관리 >> 학생이름 컬럼 추가",
          deadline: "2022-08-05",
          completeCheck: "+",
        },
        {
          id: "2",
          issueType: "작업",
          issueName: "[사용자] 예매 >> 추가금액을 현장에서 결제할 수 있게 수정",
          deadline: "2022-08-04",
          completeCheck: "+",
        },
      ],
      toUrl: "/user/issues/register",
    };
  },
};
</script>
