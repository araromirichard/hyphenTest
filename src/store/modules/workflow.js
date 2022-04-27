const state = () => ({
  trigger: null,
  runs: 0,
  schema: null,
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
