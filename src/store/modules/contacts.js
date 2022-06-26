import contact from "../../api/contact";

const state = {
  vendors: [],
  singleVendor: null,
};
const getters = {
  getAllVendors(state) {
    if (state.vendors.length != 0) {
      const approvedVendors = state.vendors.filter(
        (vendor) => vendor.approved == true
      );
      console.log(JSON.stringify(approvedVendors, null, 2));
      return approvedVendors;
    }
  },

  PendingVendors(state) {
    if (state.vendors.length != 0) {
      return state.vendors.filter((vendor) => !vendor.approved == true);
    }
  },

  numberOfContacts(state) {
    return state.vendors.length;
  },
  getVendor(state) {
    if (state.singleVendor != null) {
      return state.singleVendor;
    }
  },
  getVendorInvoices(state) {
    if (state.singleVendor != null) {
      return state.singleVendor.invoices;
    }
  },
};
const mutations = {
  setVendors(state, vendors) {
    state.vendors = vendors;
  },
  SET_SINGLE_VENDOR(state, data) {
    state.singleVendor = data;
  },
};
const actions = {
  async fetchAllVendors({ commit, rootState }) {
    try {
      const response = await contact.getAllVendors(
        rootState.auth.user.organization.id
      );
      commit("setVendors", response.data.data);
      console.log(JSON.stringify(response.data.data));
      return response;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return Promise.reject(error);
    }
  },

  async getSingleVendor({ commit }, id) {
    try {
      const response = await contact.getVendorById(id);
      commit("SET_SINGLE_VENDOR", response.data);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async updateVendorDetails({ commit }, data) {
    try {
      const response = await contact.updateVendorById(data.id, data.payload);

      commit("SET_SINGLE_VENDOR", response.data);
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
