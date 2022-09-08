<template>
  <div>
    sessionId : {{ sessionId }}
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
        fields: ['이름', '부서', '직위', '종류', '근태일자', '등록일시', '승인일시', '승인상태'],
        items: [],
        selectMode: '부서선택',
        sessionId : ''
      }
    },
    mounted(){
      this.$store.dispatch('listStore/attendanceList')
        .then(() => {
          this.items = this.$store.state.listStore.attdDataList;
        })

      this.sessionId = this.$store.state.loginStore.sessionId;

      //세션유지 로직
      const sessionInfo = this.sessionId
      this.$store.dispatch('loginStore/keepLogin',sessionInfo)
      .then(() => {
        if(this.$store.state.loginStore.sessionId != ''){
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
    },
  }

</script>
