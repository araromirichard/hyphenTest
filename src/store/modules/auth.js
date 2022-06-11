import Auth from "../../api/auth";

const state = {
    user: null,
    singleUser: null,
    isLoggedIn: localStorage.getItem("userId") != null,
};

const getters = {
  isLoggedIn: (state) => !!state.user,
  user: (state) => state.user,
  token: () => localStorage.getItem("token"),
  organizationId: (state) => (state.user ? state.user.organization.id : ""),
};

const mutations = {
    setUser(state, data) {
        if (data.user != undefined) {
            state.user = data.user;
        } else {
            state.user = data;
        }

        state.isLoggedIn = true;
    },
    setSingleUser(state, data) {
        if (data.singleUser != undefined) {
            state.singleUser = data.user;
        } else {
            state.singleUser = data;
        }
    },

    emptyUser(state) {
        state.user = null;
        state.isLoggedIn = false;
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
    },
};

const actions = {
    async login({ commit }, payload) {
        try {
            const { data } = await Auth.login(payload);
            commit("setUser", data);
            localStorage.setItem("token", data.jwt);
            localStorage.setItem("userId", data.user.id);
            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    },

    async logout({ commit }) {
        commit("emptyUser");
    },

    async register({ commit }, payload) {
        try {
            const { data } = await Auth.registerUser(payload);
            commit("setUser", data);
            // save user token to browser
            localStorage.setItem("token", data.jwt);
            localStorage.setItem("userId", data.user.id);
            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    },

    async registerCoWorkerUser({ commit }, payload) {
        try {
            const data = await Auth.registerCoWorkerUser(payload);
            commit("coworker", data);
            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    },

    async fetchUserDetails({ commit }) {
        try {
            const { data } = await Auth.getUser();
            commit("setUser", data);
            return data;
        } catch (error) {
            console.log(JSON.stringify(error, null, 2));
            return Promise.reject(error);
        }
    },
    // async sendResetPasswordEmailLink(context, payload) {
    //     try {
    //         const data = await Auth.forgotPassword(payload);
    //         console.log(context);
    //         return data;
    //     } catch (error) {
    //         console.lo(JSON.stringify(error, null, 2));
    //         return Promise.reject(error);
    //     }
    // },

    async getUserDetails({ commit }, id) {
        try {
            const response = await Auth.getUserById(id);
            commit("setSingleUser", response.data);
            // console.log(JSON.stringify(response, null, 2));
            return response.data;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    async updateUserDetails({ commit }, data) {
        try {
            const response = await Auth.upadateUserById(data.userId, data.payload);
            commit("setUser", response.data);
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