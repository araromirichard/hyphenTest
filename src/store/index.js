import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
<<<<<<< HEAD
import createMultiTabState from "vuex-multi-tab-state";
=======
>>>>>>> 0108695badfe21a4a8e1ab44c7bbbaefd364beff

Vue.use(Vuex);

export default new Vuex.Store({
<<<<<<< HEAD
    state: {},
    mutations: {},
    actions: {},
    modules: {
        ...modules,
    },
    plugins: [createMultiTabState()],
});
=======
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ...modules,
  },
});
>>>>>>> 0108695badfe21a4a8e1ab44c7bbbaefd364beff
