<template>
  <div class="ml-5 mt-5 mr-1">
    <b-form
      @submit="onSubmit"
      @reset="onReset"
      v-if="show">
      <b-form-group
        id="input-group-1"
        label="프로젝트명"
        label-for="input-projectName"
        description="최대한 간단하게 적어주세요">
        <b-form-input
          id="input-projectName"
          
          
          required />
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="작업자"
        label-for="input-workerName">
        <b-form-select
          id="input-workerName"
          v-model="form.memberName"
          :options="memberName"
          required />
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="시작일"
        label-for="input-startDate">
        <b-form-datepicker
          id="input-startDate"
          v-model="value"
          class="mb-2" />
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label="만료일"
        label-for="input-completeDate">
        <b-form-datepicker
          id="input-completeDate"
          v-model="value"
          class="mb-2" />
      </b-form-group>
      <b-form-group
        id="input-group-5"
        label="진행현황"
        label-for="input-progressCheck">
        <b-form-select
          id="input-progressCheck"
          v-model="form.ingCheck"
          :options="ingCheck"
          required />
      </b-form-group>
      <b-form-group
        id="input-group-6"
        label="프로젝트 설명"
        label-for="input-projectDescription">
        <b-form-textarea
          id="input-projectDescription"
          v-model="text"
          placeholder="프로젝트에 대한 설명을 적어주세요."
          rows="3"
          max-rows="6" />
      </b-form-group>

      

      <b-button
        type="submit"
        variant="primary">
        등록
      </b-button>
      <b-button
        type="reset"
        variant="danger">
        취소
      </b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        memberName: null,
        checked: [],
        ingCheck: "",
      },
      memberName: [
        { text: "작업자를 선택해주세요", value: null },
        "홍재광",
        "이현수",
        "박재현",
        "박민아",
        "김지아",
      ],
      ingCheck: [
        { text: "진행현황을 선택해주세요", value: null },
        "진행중",
        "완료",
        "시작전",
      ],
      show: true,
    };
  },
  methods: {
    /*
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    */
  },
};
</script>
