<template>
  <div class="ml-5 mt-5 mr-1 div-register">
    <b-form
      @submit="onSubmit"
      @reset="onReset"
      v-if="show">
      <b-form-group
        id="input-group-1"
        label="프로젝트"
        label-for="input-projectList">
        <b-form-select
          id="input-projectList"
          v-model="form.project"
          :options="projectList"
          required />
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="이슈"
        label-for="input-issueTitle"
        description="최대한 간단하게 적어주세요">
        <b-form-input
          id="input-issueTitle"
          type="text"
          required />
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="이슈 종류"
        label-for="input-issueType">
        <b-form-select
          id="input-issueType"
          v-model="form.issueType"
          :options="issueType"
          required />
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label="마감일"
        label-for="input-deadline">
        <b-form-datepicker
          id="input-deadline"
          v-model="value"
          class="mb-2" />
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="이슈 상세 설명"
        label-for="input-issueDescription">
        <b-form-textarea
          id="input-issueDescription"
          v-model="text"
          placeholder="이슈에 대한 설명을 적어주세요."
          rows="3"
          max-rows="6" />
      </b-form-group>
      
      <b-form-group
        id="input-group-6"
        label="작업자"
        label-for="input-workerName">
        <b-form-select
          id="input-workerName"
          v-model="form.workerName"
          :options="workerName"
          required />
      </b-form-group>

      
      <!-- <p>Value: '{{ value }}'</p> -->

      <!--       
      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->

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
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        project: null,
        issueType: null,
        checked: [],
        workerName: "",
      },
      projectList: [
        { text: "프로젝트를 선택해주세요", value: null },
        "문화재단",
        "SK DID",
        "코코넛",
        "교보생명",
      ],
      issueType: [
        {text: "이슈 종류를 선택해주세요", value: null},
        "개별업무",
        "요구사항"
      ],
      workerName: [
        { text: "작업자를 선택해주세요", value: null },
        "홍재광",
        "이현수",
        "박재현",
        "박민아",
        "김지아",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    
  },
};
</script>
