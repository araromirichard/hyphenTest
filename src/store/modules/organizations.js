import organization from "../../api/organization";
import Organization from "../../api/organization";

const state = {
    organization: null,
    fullOrganizationObject: null,
    // invitedCoWorkers: [],
    organizationToken: {},
    cacDoc: null,
    idCard: null,
};

const getters = {
    OrganToken(state) {
        return state.organizationToken;
    },
    organObj(state) {
        return state.fullOrganizationObject;
    },
    getOrganizationLogoData(state) {
        return state.fullOrganizationObject.logo;
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
    setFullOrganization(state, data) {
        state.fullOrganizationObject = data;
    },
    setOrganizationLogo(state, data) {
        state.fullOrganizationObject.logo = data;
    },
    // coWorkerState(state, coWorker) {
    //     state.invitedCoWorkers = coWorker;
    // },
    setCAC(state, cacDoc) {
        state.cacDoc = cacDoc;
    },
    setIdCard(state, idCard) {
        state.idCard = idCard;
    },
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

    async updateOrganization({ commit }, data) {
        try {
            const response = await Organization.update(data.orgId, data.payload);
            commit("commitOrganization", response.data);
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },

    async uploadCacDoc({ commit }, payload) {
        try {
            const response = await Organization.uploadOrganCac(payload);
            commit("setCAC", response.data);
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    async uploadIdCard({ commit }, payload) {
        try {
            const response = await organization.uploadIdCard(payload);
            commit("setIdCard", response.data);
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    async organizationLogoUpload({ commit }, payload) {
        try {
            const response = await organization.uploadOrganizationLogo(payload);
            commit("setOrganizationLogo", response.data);
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    async getOrganizationToken({ commit, rootState }) {
        console.log(rootState.auth.user);
        try {
            const response = await organization.getOrganizationToken(
                rootState.auth.user.organization.id
            );
            commit("organizationToken", response.data);
            console.log(response.data);
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },

    async getOrganizationById({ commit }, organId) {
        try {
            const response = await organization.getId(organId);
            commit("setFullOrganization", response.data);
            console.log(JSON.stringify(response.data, null, 2));
            console.log(response);
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },

    async inviteCoWorker({ rootState }, payload) {
        try {
            const response = await organization.inviteCoWorker(
                rootState.auth.user.organization.id,
                payload
            );
            console.log(JSON.stringify(response, null, 2));

            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },

    async fetchCoWorkers({ rootGetters }) {
        try {
            const { data } = await organization.getCoWorkers(
                rootGetters["auth/organizationId"],
            );

            return data.data;
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