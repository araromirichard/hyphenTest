import invoices from "../../api/invoices";

const state = {
  //

  allInvoices: null,
  singleInvoice: {},
};

const getters = {
  getAllInvocies(state) {
    if (state.allInvoices != null) {
      return state.allInvoices;
    }
  },
  numOfInvoices(state) {
    return state.allInvoices.length;
  },
  getSingleInvoice(state) {
    return state.singleInvoice;
  },

  checkInvoiceArray(state) {
    if (state.allInvoices.length === 0) {
      //Return false if the array is empty
      return false;
    }
    //Otherwise, return true.
    else return true;
  },
  checkNumberOfExceptions(state) {
    let exceptionInvoiceArray = state.allInvoices.filter((obj) => {
      return obj.exception == "1";
    });

    if (exceptionInvoiceArray.length === 0) {
      return 0;
    } else return exceptionInvoiceArray.length;
  },
};
const mutations = {
  //
  setInvoices(state, invoices) {
    state.allInvoices = invoices;
  },

  setSingleInv(state, invoice) {
    state.singleInvoice = invoice;
    console.log(JSON.stringify(invoice, null, 2));
  },
};
const actions = {
  //

  async FetchAllInvoices({ commit }, orgId) {
    try {
      const response = await invoices.getAll(orgId);
      commit("setInvoices", response.data);
      console.log(JSON.stringify(response.data, null, 2));
      return response;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return Promise.reject(error);
    }
  },
  async getInvoiceById({ commit }, id) {
    try {
      const response = await invoices.getInvoice(id);
      commit("setSingleInv", response.data);
      console.log(response.data);
      return response;
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
