import formbuilder from "../../api/formbuilder";

const state = {
  formCards: [],
};

const getters = {
  forms: (state) => {
    return state.formCards;
  },
};

const mutations = {
  commitForm(state, form) {
    state.formCards = form;
  },
  setForms(state, forms) {
    state.formCards = forms;
  },
  updateForm(state, forms) {
    const item = state.formCard.find((item) => item.id === forms.id);
    Object.assign(item, forms);
  },
  deleteForm(state, formId) {
    let formCards = state.formCards.filter((form) => form.id != formId);
    state.formCards = formCards;
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
  async getForm({ commit }, id) {
    try {
      const response = await formbuilder.getForm(id);
      commit("setForms", response.data);
      return response;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return Promise.reject(error);
    }
  },

  async updateForm({ commit }, data) {
    try {
      const response = await formbuilder.updateForm(data.id, data.payload);
      commit("updateForm", response.data);
      console.log(JSON.stringify(response.data, null, 2));
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async deleteForm({ commit }, id) {
    try {
      const response = await formbuilder.deleteForm(id);

      commit("deletForm", response.data);
      return response;
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
