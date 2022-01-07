import Auth from "../../api/auth";

const state = {
  user: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  user: (state) => state.user,
  token: () => localStorage.getItem("token"),
};

const mutations = {
  setUser(state, data) {
    if (data.user != undefined) {
      state.user = data.user;
    } else {
      state.user = data;
    }
  },
};

const actions = {
  async login({ commit }, payload) {
    try {
      const { data } = await Auth.login(payload);
      commit("setUser", data);
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("userId", data.user.id);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async logout({ state }) {
    state.user = null;
    state.token = null;
  },

  async register({ commit }, payload) {
    try {
      const {data} = await Auth.registerUser(payload);
      commit("setUser", data);
      // save user token to browser
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("userId", data.user.id);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async registerCoWorkerUser({ commit }, payload) {
    try {
      const data = await Auth.registerCoWorkerUser(payload);
      commit("coworker", data);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async fetchUserDetails({ commit }, payload) {
    try {
      const { data } = await Auth.getUser(payload);
      commit("setUser", data);
      return data;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
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
