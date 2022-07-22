<template>
  <div>
    <div
      style="margin-bottom : 30px; margin-top : 30px;">
      <span style="font-size : xx-large;">조직목록</span>
    </div>
    <router-view />
    <div class="groupTable">
      <b-form-select
        id="table-select-mode-select"
        v-model="selectMode"
        :options="modes"
        class="mb-3"
        style="width: 400px" />

      <router-link
        to="/groupRegister"
        class="nav-link"
        style="display: inline-block;">
        <b-button
          pill
          class="rightBtn"
          id="">
          등록
        </b-button>
      </router-link>

      <b-button
        pill
        class="rightBtn"
        id="">
        수정
      </b-button>
      <b-button
        pill
        class="rightBtn"
        id="">
        삭제
      </b-button>
      <b-button
        pill
        variant="info"
        class="rightBtn"
        id="">
        부서장으로 권한 변경
      </b-button>
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
    </div>
  </div>
</template>

<style scoped>
.groupTable{
  margin-left : 250px;
  margin-right : 250px;
}

.rightBtn{
  margin-left : 10px;
  margin-bottom : 10px;
}

</style>

<script>

 export default {
    data() {
      return {
        modes: ['부서선택','개발1팀', '개발2팀', '디자인기획팀'],
        fields: ['이름', '부서', '직위', '가입등록일시', '권한'],
        items: [
          { 이름: '김지아', 부서: '개발2팀', 직위: '매니저', 가입등록일시: '2022-07-10', 권한: '사원'},
          { 이름: '박민아', 부서: '개발2팀', 직위: '매니저', 가입등록일시: '2022-07-10', 권한: '사원'}
        ],
        selectMode: '부서선택',
        selected: []
      }
    },
    methods: {
      onRowSelected(items) {
        this.selected = items
      },
    }
  }

</script>
