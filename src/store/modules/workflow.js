import Workflow from "../../api/workflow";

const state = () => ({
  trigger: null,
  runs: 0,
  schema: null,
  payment: null,
  paymentOptions: null,
  newWorkflow: null,
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
  allWorkflow: null,
  allActions: [],
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

  allActions(state) {
    return state.allActions;
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

  invoiceWorkflow(state) {
    if (state.allWorkflow != null) {
      const invoicearray = state.allWorkflow.filter(
        (obj) => obj.source == "invoice"
      );

      console.log(JSON.stringify(invoicearray, null, 2));
      return invoicearray.map((object) => object.workflow_title);
    }
  },
};

const mutations = {
  SET_SCHEMA(state, payload) {
    state.schema = payload;
  },

  SET_ALL_ACTIONS(state, payload) {
    state.allActions = payload.map((action) => {
      return {
        icon: require(`@/assets/${action.icon.split("/").pop()}`),
        text: action.text,
        type: action.type,
        active: action.active,
        meta: action.meta,
      };
    });
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

  NEW_WORKFLOW(state, payload) {
    state.newWorkflow = payload;
  },
  workflowMutate(state, data) {
    state.allWorkflow = data;
    //console.log(JSON.stringify(data, null, 2));
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

  async getAllOperators() {
    try {
      const { data } = await Workflow.getAllOperators();
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
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
          label:
            data.options[key].charAt(0).toUpperCase() +
            data.options[key].slice(1),
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
      return data.data
        .filter((item) => item.option === paymentType)
        .map((item) => {
          return {
            label: item.label.charAt(0).toUpperCase() + item.label.slice(1),
            key: item.key,
          };
        });
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async createWorkflow({ commit }, payload) {
    try {
      const { data } = await Workflow.createWorkflow(payload);
      commit("NEW_WORKFLOW", data);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async updateWorkflow({ commit }, payload) {
    try {
      const { data } = await Workflow.updateworkflow(payload);
      commit("NEW_WORKFLOW", data);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async deleteWorkflow({ commit }, id) {
    try {
      const { data } = await Workflow.deleteWorkflow(id);
      commit("NEW_WORKFLOW", data);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async getAllWorkflows({ commit }) {
    try {
      const data = await Workflow.getAllWorkflows();
      commit("workflowMutate", data.data);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async getAllWorkflowActions({ commit }) {
    try {
      const { data } = await Workflow.getAllWorkflowActions();
      commit("SET_ALL_ACTIONS", data.data);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async getAllWorkflowById({ commit }, id) {
    try {
      const data = await Workflow.getWorkflowById(id);
      commit("NEW_WORKFLOW", data);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async fetchApprovalOTP({ commit }, token) {
    try {
      const data = await Workflow.fetchOTP(token);
      commit("NEW_WORKFLOW", data);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async verifyApprovalOTP({ commit }, payload) {
    try {
      const data = await Workflow.verifyApprovalOTP(payload);
      commit("NEW_WORKFLOW", data);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async approvalStatus({ commit }, payload) {
    try {
      const data = await Workflow.approvalUrl(payload);
      commit("NEW_WORKFLOW", data);
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
