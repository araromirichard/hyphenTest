import formbuilder from "../../api/formbuilder";

const state = {
  formCards: null,
  singleForm: null,
  makePayment: false,
  needSignature: false,
  formDescription: "",
  entriesResponse: null,
  entries: null,
  selectedFormType: {},
  API: {},
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
  getSingleForm: (state) => {
    if (state.singleForm != null) {
      return state.singleForm;
    }
  },
  getPaymentStatus: (state) => {
    if (state.makePayment != null) {
      return state.makePayment;
    }
  },

  getSignatureStatus: (state) => {
    if (state.needSignature != null) {
      return state.needSignature;
    }
  },
  getFormDescription: (state) => {
    if (state.formDescription != "") {
      return state.formDescription;
    }
  },
  getApiObject: (state) => {
    if (state.API != "") {
      return state.API;
    }
  },
  getSelectedFormType: (state) => {
    if (state.getSelectedFormType != "") {
      return state.selectedFormType;
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

  async updateForm(state, form) {
    const index = state.formCards.findIndex((item) => item.id === form.id);
    if (index !== -1) {
      state.formCards[index] = form;
    }

    state.formCards = [...state.formCards];
  },
  deleteForm(state, formId) {
    let index = state.formCards.findIndex((form) => form.id == formId);
    if (index >= 0) {
      state.formCards.splice(index, 1);
    }
  },

  GETFORMENTRIES(state, entriesResponse) {
    state.dataEntries = entriesResponse;
  },
  SET_MAKEPAYMENT(state, value) {
    console.log(value);
    state.makePayment = value;
  },
  SET_FORMTYPE(state, value) {
    console.log(value);
    state.selectedFormType = value;
  },
  SET_API(state, value) {
    console.log(value);
    state.API = value;
  },
  SET_SIGNATURE(state, value) {
    console.log(value);
    state.needSignature = value;
  },
  SET_FORM_DESCRIPTION(state, data) {
    console.log(data);
    state.formDescription = data;
  },
};

const actions = {
  updatePaymentStatus({ commit }, status) {
    commit("SET_MAKEPAYMENT", status);
    console.log(status);
  },
  updateSignatureStatus({ commit }, status) {
    commit("SET_SIGNATURE", status);
    console.log(status);
  },
  updateSelectedFormType({ commit }, status) {
    commit("SET_FORMTYPE", status);
    console.log(status);
  },
  getApiObject({ commit }, status) {
    commit("SET_API", status);
    console.log(status);
  },
  getFormDescription({ commit }, data) {
    commit("SET_FORM_DESCRIPTION", data);
    console.log(data);
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
      const response = await formbuilder.updateForm(data.id, data.payload);
      commit("updateForm", response.data);
      console.log(JSON.stringify(response.data, null, 2));
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async getFormEntries({ commit }, hypn_id) {
    try {
      const response = await formbuilder.getFormEntries(hypn_id);
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

      commit("deletForm", id);
      return response.data;
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
