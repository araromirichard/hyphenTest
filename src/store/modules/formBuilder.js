import formbuilder from "../../api/formbuilder";

const state = {
    formCards: null,
    singleForm: null,
    makePayment: false,
<<<<<<< HEAD
    entriesResponse: null,
    entries: null,
=======
>>>>>>> 0108695badfe21a4a8e1ab44c7bbbaefd364beff
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
<<<<<<< HEAD
    getPaymentStatus: (state) => {
        if (state.makePayment != null) {
            return state.makePayment;
        }
    },
    entriesResponse: (state) => {
        if (state.entriesResponse != null) {
            return state.entriesResponse;
        }
=======
    getForm: (state) => {
        return state.singleForm;
>>>>>>> 0108695badfe21a4a8e1ab44c7bbbaefd364beff
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
<<<<<<< HEAD
    async updateForm(state, forms) {
        const item = state.formCards.find((item) => item.id === forms.id);
        //Object.assign(item, forms);
        await console.log(item);
=======
    updateForm(state, forms) {
        const item = state.formCard.find((item) => item.id === forms.id);
        Object.assign(item, forms);
>>>>>>> 0108695badfe21a4a8e1ab44c7bbbaefd364beff
    },
    deleteForm(state, formId) {
        let formCards = state.formCards.filter((form) => form.id != formId);
        state.formCards = formCards;
    },
<<<<<<< HEAD
    GETFORMENTRIES(state, entriesResponse) {
        state.dataEntries = entriesResponse;
    },
    SET_MAKEPAYMENT(state, value) {
        console.log(value);
=======
    SET_MAKEPAYMENT(state, value) {
>>>>>>> 0108695badfe21a4a8e1ab44c7bbbaefd364beff
        state.makePayment = value;
    },
};

const actions = {
<<<<<<< HEAD
    updatePaymentStatus({ commit }, status) {
        commit("SET_MAKEPAYMENT", status);
        console.log(status);
    },
=======
>>>>>>> 0108695badfe21a4a8e1ab44c7bbbaefd364beff
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
<<<<<<< HEAD
            const response = await formbuilder.updateForm(data.id, data);
=======
            const response = await formbuilder.updateForm(data.id, data.payload);
>>>>>>> 0108695badfe21a4a8e1ab44c7bbbaefd364beff
            commit("updateForm", response.data);
            console.log(JSON.stringify(response.data, null, 2));
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },

<<<<<<< HEAD
    async getFormEntries({ commit }, id) {
        try {
            const response = await formbuilder.getFormEntries(id);

            commit("GETFORMENTRIES", response.data);
            console.log(response.data);
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    },
=======
>>>>>>> 0108695badfe21a4a8e1ab44c7bbbaefd364beff
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