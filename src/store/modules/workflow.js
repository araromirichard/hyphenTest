const state = {
    workflow: null

}

const getters = {
    workflow(state) {
        let workflow = {};
        if (state.workflow != null) {
            workflow = state.workflow
        }
        return workflow
    },

    conditions(state) {
       try{
           return state.workflow.schema.condition
       }catch(e){
           return null
       }
    },

    actions(state) {
        if (state.workflow != null) {
             return state.workflow.actions
        }
        return {}
    }
}

const mutations = {
    SET_WORKFLOW(state, payload) {
        state.workflow = payload
    }
}

const actions = {
    setWorkflow({
        commit
    }, payload) {
        commit('SET_WORKFLOW', payload);
    }
}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};