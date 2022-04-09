const state = {
  workflow: null,
  trigger: null,
  runs: 0,
};

const getters = {
  workflow(state) {
    let workflow = {};
    if (state.workflow != null) {
      workflow = state.workflow;
    }
    return workflow;
  },

  conditions(state) {
    try {
      return state.workflow.schema.condition;
    } catch (e) {
      return null;
    }
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
};

const mutations = {
  SET_WORKFLOW(state, payload) {
    state.workflow = payload;
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
