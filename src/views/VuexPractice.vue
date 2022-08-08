<template>
  <div>
    <b-input v-model="loginEmail" />
    <b-button @click="clickEvent">
      메롱
    </b-button>
    {{ loginUserName }}님
    <!-- <b-button @click="mutationClick">
      mutation실험
    </b-button> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data(){
    return{
      localString : '님',
      loginEmail: "",
      loginUserName: "",
    }
  },
  computed:{
    ...mapGetters(['getUserByName', 'getUserInfo']),
    ...mapMutations(['setIsLogin']),
    mutationClick(){
      console.log(this.$store.state.isLogin)
      return this.setIsLogin("true")
    }
    
  },
  methods:{
    // axios로 DB에 있는 이름 가져와서 state에 넣고 getter로 가져와서 
    // 이 component 에 변수에 setting 해줘서 databinding 해줌
    async clickEvent(){
      await this.$store.dispatch("getUserinfo", this.loginEmail)
      this.loginUserName = this.getUserInfo.userName
    },
  }
}
</script>
