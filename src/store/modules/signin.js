export const SIGNIN = {
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
};

export const signin = {
  state: () => ({
    email: '',
    password: '',
  }),
  mutations: {
    [SIGNIN.SET_EMAIL](state, value) {
      state.email = value;
    },
    [SIGNIN.SET_PASSWORD](state, value) {
      state.password = value;
    },
  },
  getters: {
    getEmail(state) {
      return state.email;
    },
    getPassword(state) {
      return state.password;
    },
  },
  actions: {
    setEmail({ commit }, value) {
      commit(SIGNIN.SET_EMAIL, value);
    },
    setPassword({ commit }, value) {
      commit(SIGNIN.SET_PASSWORD, value);
    },
    login({ commit }, value) {
      commit(SIGNIN.SET_EMAIL, value.email);
      commit(SIGNIN.SET_PASSWORD, value.password);
      console.log(value.email);
      console.log(value.password);
    },
  }
};
