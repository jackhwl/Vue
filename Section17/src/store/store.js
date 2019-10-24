import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 42
    },
    getters: {
        doubleCounter: state => state.counter * 2,
        stringCounter: state => state.counter + ' Clicks',
        value: state => state.value
    },
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        },
        updateValue: (state, payload) => {
            state.value = payload;
        },
    },
    actions: {
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
        },
        updateValue({commit}, payload) {
            commit('updateValue', payload);
        }
    }
});