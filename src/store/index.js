import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
import createMultiTabState from "vuex-multi-tab-state";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ...modules,
  },
  plugins: [createMultiTabState()],
});
