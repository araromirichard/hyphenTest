import contact from "../../api/contact";

const state = {
  vendors: [],
};
const getters = {
  getAllVendors(state) {
    if (state.vendors.length != 0) {
      const approvedVendors = state.vendors.filter(
        (vendor) => vendor.approved != null || vendor.approved == true
      );
      console.log(JSON.stringify(approvedVendors, null, 2));
      return approvedVendors;
    }
  },

  PendingVendors(state) {
    if (state.vendors.length != 0) {
      return state.vendors.filter(
        (vendor) => vendor.approved == null || vendor.approved == false
      );
    }
  },

  numberOfContacts(state) {
    return state.vendors.length;
  },
};
const mutations = {
  setVendors(state, vendors) {
    state.vendors = vendors;
  },
};
const actions = {
  async fetchAllVendors({ commit, rootState }) {
    try {
      const response = await contact.getAllVendors(
        rootState.auth.user.organization.id
      );
      commit("setVendors", response.data);
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
  mutations,
  actions,
};
