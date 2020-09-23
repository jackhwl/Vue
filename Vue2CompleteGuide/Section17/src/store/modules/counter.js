const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => state.counter * 2,
    stringCounter: state => state.counter + ' Clicks',
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    }
};

const actions = {
    increment: (context, payload) => {
        context.commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
        commit('decrement', payload);
    },        
    asyncIncrement: ({ commit }) => {
        setTimeout(() => {
            commit('increment');
        }, 1000);
    },        
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrement', payload.by);
        }, payload.duration);
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}