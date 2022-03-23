import formbuilder from "../../api/formbuilder";

const state = {
    formCards: null,
    singleForm: null,
    makePayment: false,
};

const getters = {
    forms: (state) => {
        let forms = [];
        if (state.formCards != null) {
            forms = state.formCards;
            console.log(forms);
        }
        return forms;
    },
    getForm: (state) => {
        return state.singleForm;
    },
};

const mutations = {
    commitForm(state, form) {
        state.formCards = form;
    },
    setForms(state, forms) {
        state.formCards = forms;
    },
    singleForm(state, form) {
        state.singleForm = form;
        //console.log(JSON.stringify(form, null, 2));
    },
    updateForm(state, forms) {
        const item = state.formCard.find((item) => item.id === forms.id);
        Object.assign(item, forms);
    },
    deleteForm(state, formId) {
        let formCards = state.formCards.filter((form) => form.id != formId);
        state.formCards = formCards;
    },
    SET_MAKEPAYMENT(state, value) {
        state.makePayment = value;
    },
};

const actions = {
    async createForm({ commit }, form) {
        try {
            const response = await formbuilder.create(form);
            commit("commitForm", response.data);
            return response;
        } catch (error) {
            console.log(JSON.stringify(error, null, 2));
            return Promise.reject(error);
        }
    },

    async FetchAllForms({ commit }) {
        try {
            const response = await formbuilder.getAllForms();
            commit("setForms", response.data);
            console.log(JSON.stringify(response.data, null, 2));
            return response;
        } catch (error) {
            console.log(JSON.stringify(error, null, 2));
            return Promise.reject(error);
        }
    },
    async getSingleForm({ commit }, id) {
        try {
            const response = await formbuilder.getForm(id);
            commit("singleForm", response.data);
            return response;
        } catch (error) {
            //console.log(JSON.stringify(error, null, 2));
            return Promise.reject(error);
        }
    },

    async updateForm({ commit }, data) {
        try {
            const response = await formbuilder.updateForm(data.id, data.payload);
            commit("updateForm", response.data);
            console.log(JSON.stringify(response.data, null, 2));
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },

    async deleteForm({ commit }, id) {
        try {
            const response = await formbuilder.deleteForm(id);

            commit("deletForm", response.data);
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },

    // callMakePayment({ commit }, value) {
    //     commit("SET_MAKEPAYMENT", value);
    // },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};