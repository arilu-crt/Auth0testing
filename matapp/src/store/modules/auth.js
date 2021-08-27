const state = {
    user: null
};

const getters = {
    authenticated(state) {
        console.log(state)
        return !!state.user;

    }
};

const actions = {

}

const mutations = {
    setUser(state, userData) {
        state.user = userData
        console.log(state)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};