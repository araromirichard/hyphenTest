import payables from "../../api/payables";

const state = {
    payables: null,
};
const getters = {};
const mutations = {
    SET_PAYABLE(state, data) {
        state.payables = data;
        console.log(JSON.stringify(data, null, 2));
    },
};
const actions = {
    async addToPayables({ commit }, payload) {
        try {
            const response = await payables.addInvoiceToPayable(payload);
            commit("SET_PAYABLE", response.data);
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
    mutations,
    actions,
};