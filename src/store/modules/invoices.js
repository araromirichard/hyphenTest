import invoices from "../../api/invoices";

const state = {
    //

    allInvoices: [],
};

const getters = {
    numOfInvoices(state) {
        return state.allInvoices.length;
    },
    checkInvoiceArray(state) {
        if (state.allInvoices.length === 0) {
            //Return TRUE if the array is empty
            return false;
        }
        //Otherwise, return FALSE.
        else return true;
    },
};
const mutations = {
    //
    setInvoices(state, invoices) {
        state.allInvoices = invoices;
    },
};
const actions = {
    //

    async FetchAllInvoices({ commit }, orgId) {
        try {
            const response = await invoices.getAll(orgId);
            commit("setInvoices", response.data);
            return response;
        } catch (error) {
            console.log(JSON.stringify(error, null, 2));
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