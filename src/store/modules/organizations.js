import Organization from "../../api/organizations";

const state = {};

const getters = {};

const mutations = {
  commitOrganization(state, organization) {
    state.organization = organization;
  },
};

const actions = {
  async createOrganization({ commit }, organization) {
    try {
      const response = await Organization.create(organization);
      commit("commitOrganization", response.data);
      return response;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return Promise.reject(error);
    }
  },

  async updateOrganization({ commit }, organization) {
    try {
      const response = await Organization.update(organization);
      commit("commitOrganization", response.data);
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
  actions,
  mutations,
};
