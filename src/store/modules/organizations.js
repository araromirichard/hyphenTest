import Organization from "../../api/organization";

const state = {
<<<<<<< HEAD
    organization: null,

    organizationToken: {},
    invitedCoWorkers: [],
=======
    organizationToken: {},
>>>>>>> 0108695badfe21a4a8e1ab44c7bbbaefd364beff
};

const getters = {
    OrganToken(state) {
        return state.organizationToken;
    },
    getOrganizationEmail(state) {
        console.log(state.organizationToken.data);
        return state.organizationToken.hypn_email;
    },
};

const mutations = {
    commitOrganization(state, organization) {
        state.organization = organization;
    },
    organizationToken(state, token) {
        state.organizationToken = token;
    },
<<<<<<< HEAD
    coWorkerState(state, coWorker) {
        state.invitedCoWorkers = coWorker;
    },
=======
>>>>>>> 0108695badfe21a4a8e1ab44c7bbbaefd364beff
};

const actions = {
    async createOrganization({ commit }, organization) {
        try {
            const response = await Organization.create(organization);
            commit("commitOrganization", response.data);
            return response;
        } catch (error) {
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
    async getOrganizationToken({ commit, rootState }) {
        console.log(rootState.auth.user);
        try {
            const response = await Organization.getOrganizationToken(
                rootState.auth.user.organization
            );
            commit("organizationToken", response.data);
            console.log(response.data);
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },
<<<<<<< HEAD
    async inviteCoWorker({ commit, rootState }, payload) {
        try {
            const response = await Organization.inviteCoWorker(
                rootState.auth.user.organization,
                payload
            );
            console.log(JSON.stringify(response, null, 2));

            commit("coWorkerState", response.data);
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },
=======
>>>>>>> 0108695badfe21a4a8e1ab44c7bbbaefd364beff
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};