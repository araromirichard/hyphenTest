import formbuilder from "../../api/formbuilder";

const state = {
  formCards: null,
  singleForm: null,
  makePayment: false,

  entriesResponse: null,
  entries: null,
};

const getters = {
  forms: (state) => {
    let forms = [];
    if (state.formCards != null) {
      forms = state.formCards;
      console.log(forms);
    }
    return forms;
  },
  getPaymentStatus: (state) => {
    if (state.makePayment != null) {
      return state.makePayment;
    }
  },
  entriesResponse: (state) => {
    if (state.entriesResponse != null) {
      return state.entriesResponse;
    }
  },
};

const mutations = {
  commitForm(state, form) {
    state.formCards = form;
  },
  setForms(state, forms) {
    state.formCards = forms;
  },
  singleForm(state, form) {
    state.singleForm = form;
    //console.log(JSON.stringify(form, null, 2));
  },

  async updateForm(state, forms) {
    const item = state.formCards.find((item) => item.id === forms.id);
    //Object.assign(item, forms);
    await console.log(item);
  },
  deleteForm(state, formId) {
    let formCards = state.formCards.filter((form) => form.id != formId);
    state.formCards = formCards;
  },

  GETFORMENTRIES(state, entriesResponse) {
    state.dataEntries = entriesResponse;
  },
  SET_MAKEPAYMENT(state, value) {
    console.log(value);
    state.makePayment = value;
  },
};

const actions = {
  updatePaymentStatus({ commit }, status) {
    commit("SET_MAKEPAYMENT", status);
    console.log(status);
  },

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
      console.log(JSON.stringify(response.data, null, 2));
      return response;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return Promise.reject(error);
    }
  },
  async getSingleForm({ commit }, id) {
    try {
      const response = await formbuilder.getForm(id);
      commit("singleForm", response.data);
      return response;
    } catch (error) {
      //console.log(JSON.stringify(error, null, 2));
      return Promise.reject(error);
    }
  },

  async updateForm({ commit }, data) {
    try {
      const response = await formbuilder.updateForm(data.id, data);
      commit("updateForm", response.data);
      console.log(JSON.stringify(response.data, null, 2));
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async getFormEntries({ commit }, id) {
    try {
      const response = await formbuilder.getFormEntries(id);
      commit("GETFORMENTRIES", response.data);
      console.log(response.data);
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
