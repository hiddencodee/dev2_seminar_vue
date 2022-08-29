/* eslint-disable no-plusplus */
import axios from "axios";

const testStore = {
  namespaced: true,
  state: {
    tardy: 0,
    count: 33,
    todos: [
      {id : 1, text: "안녕하세요", done: true},
      {id : 2, text: "안녕히계세요", done: false},
    ],

  },
  getters: {
    doneTodos(state){
      return state.todos.filter(todo => todo.done)
    },
    doneTodoCount(state, getters){
      return getters.doneTodos.length
    },
    getTodoById : (state) => (id) => {
      console.log(id);
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    addTardy(state) {
      state.tardy++;
    },
    addTardy2(state, n){
      state.tardy += n
    },
    addTardy3(state, payload){
      state.tardy += payload.amount
    }
  },
  actions: {
    addTardy( {commit} ) {
      commit('addTardy');
      return this.state.tardy
    },
    addTardy2 ( {commit }){
      setTimeout(() => {
        commit('addTardy')
      }, 1000)
    },

    actionA ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('addTardy2')
          resolve()
        },1000)
      })
    },

    keepLogin(){
      console.log("keepLogin!!!!!!");
      axios.post('/api/keepLogin')
      .then(response => {
        console.log(response.data);
        console.log("여기여깅겨이ㅕ이겨ㅣ")

      })
      .catch( error => {
          console.log(error)
      })

    }

  },
};

export default testStore;

