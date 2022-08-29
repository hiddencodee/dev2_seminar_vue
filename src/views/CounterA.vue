<template>
  <div>
    {{ count }}  <br />
    {{ doneTodosCount }} <br />
    {{ doneTodosCount2 }} <br />
    mutation test :
    <b-button @click="addTardy">
      버튼
    </b-button>
  </div>
</template>

<style scoped>
</style>


<script>
// import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
//import { mapActions } from 'vuex'

export default {
  computed:
    /* 1. state
    {
    count() {
      return this.$store.state.testStore.count
    },
    }
    */
    /* 1-1. state
    mapState({
      count: state => state.testStore.count,
    })
    */
    /* 1-2. state
    {
    ...mapState('testStore',[
        'count'
    ])
    }
    */
    /* 2. getters
    {
     doneTodosCount(){
      return this.$store.getters['testStore/doneTodos']
     }
    }
    */
    /* 2-1. getters
    {
     doneTodosCount(){
      return this.$store.state.testStore.todos.filter(todo => todo.done).length
     }
    }
    */
    /* 2-2 getters
    {
    doneTodosCount(){
      return this.$store.getters['testStore/doneTodoCount']
    }
    }
    */

    {
    doneTodosCount2(){
      console.log(this.$store.getters);
      return this.$store.getters['testStore/getTodoById'](1)
    },

      ...mapGetters('testStore',[
        'doneTodos'
      ]),
      doneTodosCount(){
        return this.doneTodos
      }
    },

    methods:
    /* 3. mutation
    {
      addTardy(){
        this.$store.commit('testStore/addTardy');
        console.log(this.$store.state.testStore.tardy)
      }
    }
    */
    /* 3-1 mutation 인자값전달
     {
      addTardy(){
        this.$store.commit('testStore/addTardy2',10);
        console.log(this.$store.state.testStore.tardy)
      }
    }
    */
    /* 3-2 mutation 인자값전달 - payload
    {
      addTardy(){
        this.$store.commit('testStore/addTardy3', {
          amount: 10
        });
        console.log(this.$store.state.testStore.tardy)
      }
   }
   */
   /* 3-3 mutation 인자값전달 - payload2
   {
      addTardy(){
        this.$store.commit({
          type: 'testStore/addTardy3',
          amount: 10
        });
        console.log(this.$store.state.testStore.tardy)
      }
   }
   */
   /* 4. actions
   {
    addTardy(){
      this.$store.dispatch('testStore/addTardy');
      console.log(this.$store.state.testStore.tardy)
    }
   }
   */
   /* 4-1 actions
   {
    addTardy(){
      this.$store.dispatch('testStore/addTardy2')
      console.log(this.$store.state.testStore.tardy)
    }
   }
   */
   /* 4-2 actions mapActions 실패
   {
      ...mapActions('testStore',[
        'addTardy'
      ]),
      addTardy(){
        console.log(this.$store.state.testStore.tardy)
      }
   }
   */
   {

   }



}
</script>
