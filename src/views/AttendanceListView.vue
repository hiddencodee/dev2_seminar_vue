<template>
  <div>
    <div
      style="margin-bottom : 30px; margin-top : 30px;">
      <span style="font-size : xx-large;">근태목록</span>
    </div>
    <router-view />
    <div class="groupTable">
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
      <TableComponent
        :fields="fields"
        :items="items"
        :select-mode="selectMode" />
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
import TableComponent from '../components/TableComponent.vue';

 export default {
    data() {
      return {
        fields: ['이름', '부서', '직위', '종류', '등록일시', '승인일시', '승인상태'],
        items: [
          { 이름: '김지아', 부서: '개발2팀', 직위: '매니저', 종류: '연차', 등록일시: '2022-07-10', 승인일시: '-', 승인상태: '대기'},
        ],
        selectMode: '부서선택'
      }
    },

    components: {
      TableComponent
    },
  }

</script>
