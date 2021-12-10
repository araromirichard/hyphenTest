import Auth from "../../api/auth";

const state = {
  user: null,
};

const getters = {}

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {


  async login({ commit }, payload) {
    try {
      const {data} = await Auth.login(payload);
      commit("setUser", data);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },


  async register({ commit }, payload) {
    try {
      const {data} = await Auth.register(payload);
      commit("setUser", data);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
