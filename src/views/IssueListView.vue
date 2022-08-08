<template>
  <div>
    <TableComp
      :column-info="columnInfo"
      :rows-info="rowsInfo"
      :to-url="toUrl" />
    <b-modal
      id="bv-modal-example"
      hide-footer>
      <template #modal-title>
        Using <code>$bvModal</code> Methods
      </template>
      <div class="d-block text-center">
        <h3>Hello From This Modal!</h3>
      </div>
      <b-button
        class="mt-3"
        block
        @click="$bvModal.hide('bv-modal-example')">
        Close Me
      </b-button>
    </b-modal>
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
          html : true,
        },
      ],
      rowsInfo: [
        {
          id: "1",
          issueType: "작업",
          issueName: "[관리자] 예매관리 >> 학생이름 컬럼 추가",
          deadline: "2022-08-05",
          completeCheck: '<button> + </button>',
        },
        {
          id: "2",
          issueType: "작업",
          issueName: "[사용자] 예매 >> 추가금액을 현장에서 결제할 수 있게 수정",
          deadline: "2022-08-04",
          completeCheck: '<button @click="commentsModal"> + </button>',
        },
      ],
      toUrl: "/user/issues/register",
    };
  },
  methods:{
    commentsModal(){
      console.log('ddg');
      this.$bvModal.show('bv-modal-example');
    },
  },
};
</script>
