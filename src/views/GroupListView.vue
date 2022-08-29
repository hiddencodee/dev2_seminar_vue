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
        modes: ['부서선택','개발1팀', '개발2팀', '디자인기획팀'],
        fields: ['이름', '부서', '직위', '등록일시', '권한'],
        items: [],
        selectMode: '부서선택',
        contentlist: []
      }
    },

    //mounted는 페이지가 켜질때 실행됨
    mounted() {
      this.$store.dispatch('listStore/groupList')
        .then(() => {
          this.items = this.$store.state.listStore.groupDataList;
        })

      this.$store.dispatch('loginStore/keepLogin')
        .then(() => {
          if(this.$store.state.loginStore.loginYN){
            console.log("로그인유지");
          }else{
            console.log("로그인유지실패");
          }
        })
        .catch(() => {
          console.log("로그인유지로직오류");
        })

    },

    components: {
      TableComponent
    }

  }

</script>
