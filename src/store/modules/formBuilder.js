import formbuilder from "../../api/formbuilder";

const state = {
  formCards: [],
};

const getters = {};

const mutations = {
  commitForm(state, form) {
    state.formCards = form;
  },
  setForms(state, forms) {
    state.formCards = forms;
  },
};

const actions = {
  async createForm({ commit }, form) {
    try {
      const response = await formbuilder.create(form);
      commit("commitForm", response.data);
      return response;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return Promise.reject(error);
    }
  },

  async FetchAllForms({ commit }) {
    try {
      const response = await formbuilder.getAllForms();
      commit("setForms", response.data);
      return response;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return Promise.reject(error);
    }
  },

  // async updateForm({ commit }, form) {
  //     try {
  //         const response = await formbuilder.update(form);
  //         commit("commitForm", response.data);
  //         return response;
  //     } catch (error) {
  //         return Promise.reject(error);
  //     }
  // },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
