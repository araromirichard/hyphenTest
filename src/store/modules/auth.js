import Auth from "../../api/auth";

const state = {
  user: null,
  token: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  user: (state) => state.user.user,
  token: (state) => state.user.jwt,
}

const mutations = {
  setUser(state, user) {
    state.user = user;
    state.token = user.jwt;
  },
};

const actions = {


  async login({ commit }, payload) {
    try {
      const { data } = await Auth.login(payload);
      commit("setUser", data);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },


  async register({ commit }, payload) {
    console.log(JSON.stringify(payload, null, 2));
    try {
      const  req  = await Auth.registerUser(payload);
      commit("setUser", req.data);
      return req.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async registerCoWorkerUser({commit}, payload) {
    try {
      const data = await Auth.registerCoWorkerUser(payload);
      commit("coworker", data);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
