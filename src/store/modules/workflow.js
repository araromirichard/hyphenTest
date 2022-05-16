import Workflow from "../../api/workflow";

const state = () => ({
  trigger: null,
  runs: 0,
  schema: null,
  payment: null,
  paymentOptions: null,
  operators: [
    {
      string: "Equal to",
      val: "=",
    },
    {
      string: "Not Equal to",
      val: "!=",
    },
    {
      string: "Less than",
      val: "<",
    },
    {
      string: "Less than or Equal to",
      val: "<=",
    },
    {
      string: "Greater than",
      val: ">",
    },
    {
      string: "Greater than",
      val: ">=",
    },
  ],
  comparisonType: [
    {
      string: "ALL",
      val: "and",
    },
    {
      string: "ANY",
      val: "or",
    },
  ],
});

const getters = {
  workflow(state) {
    let workflow = {};
    if (state.workflow != null) {
      workflow = state.workflow;
    }
    return workflow;
  },

  schema(state) {
    return state.schema;
  },

  actions(state) {
    if (state.workflow != null) {
      return state.workflow.actions;
    }
    return {};
  },

  trigger(state) {
    return state.trigger;
  },

  runs(state) {
    return state.runs;
  },

  operators(state) {
    return state.operators;
  },

  comparisonType(state) {
    return state.comparisonType;
  },
};

const mutations = {
  SET_SCHEMA(state, payload) {
    state.schema = payload;
  },

  SET_TRIGGER(state, payload) {
    state.trigger = payload;
  },

  SET_PAYMENT(state, payload) {
    state.payment = payload;
  },

  SET_PAYMENT_OPTIONS(state, payload) {
    state.paymentOptions = payload;
  },
};

const actions = {
  setWorkflow({ commit }, payload) {
    commit("SET_WORKFLOW", payload);
  },

  setTrigger({ commit }, payload) {
    commit("SET_TRIGGER", payload);
  },

  updateSchema({ commit }, payload) {
    commit("SET_SCHEMA", payload);
  },

  async getAllInvoiceFieldsOptions() {
    try {
      const { data } = await Workflow.getAllInvoiceFieldsOptions();
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async getPaymentTypes({ commit }, paymentType) {
    try {
      const { data } = await Workflow.getPaymentFieldsOptions(paymentType);
      commit("SET_PAYMENT", data.options);
      return Object.keys(data.options).map((key) => {
        return {
          label: data.options[key].charAt(0).toUpperCase() + data.options[key].slice(1),
          key: data.options[key],
        };
      });
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async getPaymentFieldsOptions({ commit }, paymentType) {
    try {
      const { data } = await Workflow.getPaymentFieldsOptions(paymentType);
      commit("SET_PAYMENT_OPTIONS", data.data);
      return data.data.filter((item) => item.option === paymentType).map((item) => {
        return {
          label: item.label.charAt(0).toUpperCase() + item.label.slice(1),
          key: item.key,
        };
      });
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
