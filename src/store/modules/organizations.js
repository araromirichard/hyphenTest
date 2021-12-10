import Organization from "../../api/organizations";

const state = {}

const getters = {}

const actions = {

    async createOrganization({}, organization) {
        try {
            const response = await Organization.create(organization);
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },

    async updateOrganization({}, organization) {
        try {
            const response = await Organization.update(organization);
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };
  